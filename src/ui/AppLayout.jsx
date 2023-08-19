import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

function AppLayout() {
  return (
    <div className="z-10 h-[100vh]">
      <Header className="fixed h-[5vh]" />
      <main className=" h-[83vh] overflow-scroll ">
        <Outlet />
      </main>
      <Footer className="fixed z-10 h-[5vh]" />
    </div>
  );
}

export default AppLayout;
