import { Outlet } from 'react-router-dom';
import Navigation from './components/navigation';
import Footer from './components/footer';



function App() {
  return (
    <div>
      <Navigation open={"true"}/>
      <div className='mt-14 z-10'>
      <Outlet />
      </div>
      <Footer />
      
    </div>
  );
}

export default App;
