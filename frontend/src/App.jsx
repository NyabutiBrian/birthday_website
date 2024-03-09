import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import List from './pages/List';
import To from './pages/To';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/list" element={<List />} />
          <Route path="/to/:slug" element={<To />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
