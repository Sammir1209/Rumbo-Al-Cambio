import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { HomePage } from './pages/HomePage';
import { EquipoPage } from './pages/EquipoPage';
import { CandidatePage } from './pages/CandidatePage';
import { PropuestasPage } from './pages/PropuestasPage';
import { PorQueNosotrosPage } from './pages/PorQueNosotrosPage';
import { InvolucrarsePage } from './pages/InvolucratePage';
import { ComoVotarPage } from './pages/ComoVotarPage';
import { MuralPage } from './pages/MuralPage';
import { LoadingScreen } from './components/layout/LoadingScreen';

function App() {
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowLoading(false), 2600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {showLoading && <LoadingScreen onFinish={() => setShowLoading(false)} />}
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/equipo" element={<EquipoPage />} />
        <Route path="/equipo/:slug" element={<CandidatePage />} />
        <Route path="/propuestas" element={<PropuestasPage />} />
        <Route path="/por-que-nosotros" element={<PorQueNosotrosPage />} />
        <Route path="/involucrarse" element={<InvolucrarsePage />} />
        <Route path="/como-votar" element={<ComoVotarPage />} />
        <Route path="/mural" element={<MuralPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
