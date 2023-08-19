import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import AppLayout from './ui/AppLayout';
import HomePage from './pages/HomePage';
import RegexPage from './pages/RegexPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate to="dart-regex" />} />
          <Route path="dart-regex" element={<HomePage />} />
          <Route path="email" element={<RegexPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
