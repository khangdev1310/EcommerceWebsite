import React from 'react'
import Home from './pages/Home'
import ProductList from './pages/Product'
import { Routes, Route, Navigate } from 'react-router-dom'
import Dashboard from './components/Dashboard/Index'


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/admin/dashboard" />} />
        <Route path="admin" element={<Dashboard />}>
          <Route path="/admin/dashboard" element={<Home />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
