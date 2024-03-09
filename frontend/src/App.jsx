import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import List from './pages/List';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/list" element={<List />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
