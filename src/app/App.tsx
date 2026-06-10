import React, { Suspense, lazy } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { WhatsAppButton } from "./components/WhatsAppButton";
// Home stays eager — it's the LCP-critical landing page.
import { Home } from "./pages/Home";

// Every other route is code-split so initial bundle stays small.
const About = lazy(() =>
  import("./pages/About").then((m) => ({ default: m.About }))
);
const Programme = lazy(() =>
  import("./pages/Programme").then((m) => ({ default: m.Programme }))
);
const Players = lazy(() =>
  import("./pages/Players").then((m) => ({ default: m.Players }))
);
const PlayerProfile = lazy(() =>
  import("./pages/PlayerProfile").then((m) => ({ default: m.PlayerProfile }))
);
const Academies = lazy(() =>
  import("./pages/Academies").then((m) => ({ default: m.Academies }))
);
const Scouts = lazy(() =>
  import("./pages/Scouts").then((m) => ({ default: m.Scouts }))
);
const DreamLeague = lazy(() =>
  import("./pages/DreamLeague").then((m) => ({ default: m.DreamLeague }))
);
const NewsPage = lazy(() =>
  import("./pages/News").then((m) => ({ default: m.NewsPage }))
);
const Contact = lazy(() =>
  import("./pages/Contact").then((m) => ({ default: m.Contact }))
);
const Camps = lazy(() =>
  import("./pages/Camps").then((m) => ({ default: m.Camps }))
);
const FirstTeam = lazy(() =>
  import("./pages/FirstTeam").then((m) => ({ default: m.FirstTeam }))
);
const Podcast = lazy(() =>
  import("./pages/Podcast").then((m) => ({ default: m.Podcast }))
);
const SchoolsProgramme = lazy(() =>
  import("./pages/SchoolsProgramme").then((m) => ({ default: m.SchoolsProgramme }))
);
const Privacy = lazy(() =>
  import("./pages/Privacy").then((m) => ({ default: m.Privacy }))
);
const Terms = lazy(() =>
  import("./pages/Terms").then((m) => ({ default: m.Terms }))
);

// Scroll to top on route change.
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const RouteFallback = () => (
  <div className="min-h-[400px] flex items-center justify-center">
    <div className="animate-pulse text-gray-400">Loading…</div>
  </div>
);

const App = () => {
  return (
    <BrowserRouter basename="/the-Maker-Football-Incubator">
      <ScrollToTop />
      <div className="bg-white min-h-screen font-sans selection:bg-[#16A34A] selection:text-white flex flex-col">
        <Navbar />
        <main id="main-content" className="flex-grow">
          <Suspense fallback={<RouteFallback />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/programme" element={<Programme />} />
              <Route path="/players" element={<Players />} />
              <Route path="/players/:id" element={<PlayerProfile />} />
              <Route path="/academies" element={<Academies />} />
              <Route path="/scouts" element={<Scouts />} />
              <Route path="/tournaments" element={<DreamLeague />} />
              <Route path="/camps" element={<Camps />} />
              <Route path="/first-team" element={<FirstTeam />} />
              <Route path="/podcast" element={<Podcast />} />
              <Route path="/schools" element={<SchoolsProgramme />} />
              <Route path="/news" element={<NewsPage />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </BrowserRouter>
  );
};

export default App;
