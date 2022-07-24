import {BrowserRouter, Routes, Route} from 'react-router-dom';

import {QueryClient, QueryClientProvider} from 'react-query';

import './index.css';

// states
// import {AppStateProvider} from './states/AppState';

// pages
import Home from './pages/Home';
import {ReactNode} from 'react';
// import Pokemon from './pages/Pokemon';

//
declare module 'react-query/types/react/QueryClientProvider' {
  interface QueryClientProviderProps {
    children?: ReactNode;
  }
}

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/:pokemon" element={<Pokemon />} /> */}
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
