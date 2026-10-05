import { Routes, Route } from 'react-router-dom';
import { WipPage } from './app/WipPage';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<WipPage />} />
    </Routes>
  );
}

export default App;