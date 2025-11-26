// import { useState } from 'react'
import { AuthProvider } from "@/contexts/AuthContext";
import { CartProvider } from "@/contexts/CartContext";

import './App.css'
import Index from './pages/index'
import { Toaster } from './components/ui/sonner'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <AuthProvider>
      <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
        </Routes>
      </BrowserRouter>
      <Toaster />
      </CartProvider>
    </AuthProvider>
  )
}

export default App
