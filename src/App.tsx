import {BrowserRouter, Routes, Route} from 'react-router-dom';

import {QueryClient, QueryClientProvider} from 'react-query';

import './index.css';

import {ReactNode} from 'react';

// Pages
import PageNotFound from './pages/PageNotFound';
import Pokemon from './pages/Pokemon';
import Home from './pages/Home';

// States
import {AppStateProvider} from './state/AppState';

// Setting for React-query ( React  v18 solution)
declare module 'react-query/types/react/QueryClientProvider' {
  interface QueryClientProviderProps {
    children?: ReactNode;
  }
}

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppStateProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/*" element={<PageNotFound />} />
            <Route path="/:pokemon" element={<Pokemon />} />
          </Routes>
        </BrowserRouter>
      </AppStateProvider>
    </QueryClientProvider>
  );
}

export default App;
