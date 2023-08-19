import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

function AppLayout() {
  return (
    <div className="z-10 h-screen">
      <Header />
      <main className=" h-full overflow-scroll ">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout;
