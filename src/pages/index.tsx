import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Outlet } from 'react-router-dom';

const Index = () => {
  return(
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-gradient-to-br from-white to-blue-50">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Index;