import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NousChoisir from './pages/NousChoisir';
import Services from './components/Services'
import Debutant from './pages/Debutant'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nous-choisir" element={<NousChoisir />} />
        <Route path="/nos-services" element={<Services />} />
        <Route path="/debutant" element={<Debutant />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
