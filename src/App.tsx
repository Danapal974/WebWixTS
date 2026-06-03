import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NousChoisir from './pages/NousChoisir';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nous-choisir" element={<NousChoisir />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
