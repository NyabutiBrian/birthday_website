import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';

import { Analytics } from "@vercel/analytics/react"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
