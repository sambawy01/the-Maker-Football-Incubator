import React from "react";
import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Programme } from "./pages/Programme";
import { Players } from "./pages/Players";
import { PlayerProfile } from "./pages/PlayerProfile";
import { Academies } from "./pages/Academies";
import { Scouts } from "./pages/Scouts";
import { DreamLeague } from "./pages/DreamLeague";
import { NewsPage } from "./pages/News";
import { Contact } from "./pages/Contact";
import { Camps } from "./pages/Camps";
import { FirstTeam } from "./pages/FirstTeam";
import { Podcast } from "./pages/Podcast";
import { SchoolsProgramme } from "./pages/SchoolsProgramme";

// Scroll to top component
const ScrollToTop = () => {
    const { pathname } = useLocation();
  
    React.useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  
    return null;
};

const App = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="bg-white min-h-screen font-sans selection:bg-[#16A34A] selection:text-white flex flex-col">
        <Navbar />
        <main className="flex-grow">
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
            </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
