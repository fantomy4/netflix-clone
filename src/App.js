import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import MobileNavigation from './components/MobileNavigation';

function App() {
  return (
    <main className='pb-14 lg:pb-0'>
      <Header></Header>
      <div className='pt-16'>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
      <MobileNavigation></MobileNavigation>
    </main>
  );
}

export default App;
