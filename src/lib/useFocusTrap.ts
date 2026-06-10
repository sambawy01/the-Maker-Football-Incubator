import { useEffect, RefObject } from "react";

/**
 * Trap keyboard focus inside the element referenced by `ref` while `isActive`
 * is true. On activation, focus moves to the first focusable element inside
 * the container. Tab / Shift+Tab cycle between the first and last focusable
 * descendants.
 *
 * The hook intentionally does NOT manage focus restoration on deactivation —
 * callers should handle returning focus to the trigger (see Navbar's existing
 * Escape handler + close button focus return).
 */
const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

export function useFocusTrap(
  ref: RefObject<HTMLElement | null>,
  isActive: boolean
) {
  // Move focus into the container when it becomes active.
  useEffect(() => {
    if (!isActive) return;
    const container = ref.current;
    if (!container) return;

    const focusables = container.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR);
    const first = focusables[0];
    if (first) {
      // Defer slightly so any opening transition / mount completes before focus.
      const id = window.requestAnimationFrame(() => first.focus());
      return () => window.cancelAnimationFrame(id);
    }
  }, [ref, isActive]);

  // Trap Tab / Shift+Tab inside the container.
  useEffect(() => {
    if (!isActive) return;
    const container = ref.current;
    if (!container) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Tab") return;

      const focusables = Array.from(
        container.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)
      ).filter(
        (el) => !el.hasAttribute("disabled") && el.getAttribute("aria-hidden") !== "true"
      );

      if (focusables.length === 0) {
        event.preventDefault();
        return;
      }

      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      const active = document.activeElement as HTMLElement | null;

      if (event.shiftKey) {
        if (active === first || !container.contains(active)) {
          event.preventDefault();
          last.focus();
        }
      } else {
        if (active === last || !container.contains(active)) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [ref, isActive]);
}
