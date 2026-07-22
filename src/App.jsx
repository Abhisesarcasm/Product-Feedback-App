import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CustomerSide from './pages/CustomerSide'
import AdminSide from './pages/AdminSide'

import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CustomerSide />} />
          <Route path="/admin" element={<AdminSide />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App