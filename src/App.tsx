// import { useState } from 'react'
import { AuthProvider } from "@/contexts/AuthContext";
import { CartProvider } from "@/contexts/CartContext";

import './App.css'
import Index from './pages/index'
import { Toaster } from './components/ui/sonner'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import SignIn from './pages/auth/SignIn';
import SignUp from './pages/auth/SignUp';

import Shop from './pages/shop/Shop';
import Hero from "./components/home/hero";

function App() {
  return (
    <AuthProvider>
      <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/auth/signin" element={<SignIn />} />
          <Route path="/auth/signup" element={<SignUp />} />

          <Route path="/" element={<Index />} >
            <Route path="/" element={<Hero />} />
            <Route path="/shop" element={<Shop />} />

          
          </Route>


        </Routes>
      </BrowserRouter>
      <Toaster />
      </CartProvider>
    </AuthProvider>
  )
}

export default App
