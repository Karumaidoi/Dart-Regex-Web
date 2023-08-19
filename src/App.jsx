import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import AppLayout from './ui/AppLayout';
import HomePage from './pages/HomePage';
import RegexPage from './pages/RegexPage';
import { QueryClientProvider } from 'react-query';
import { useClient } from './hooks/useClient';

function App() {
  const queryClient = useClient();

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate to="dart-regex" />} />
            <Route path="dart-regex" element={<HomePage />} />
            <Route path="regex" element={<RegexPage />} />
          </Route>

          <Route path="*" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
