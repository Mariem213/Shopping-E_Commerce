import React from 'react';
import Navbar from "./components/Navbar"
import Header from './components/Header';
import Products from './components/Products';
import TopRated from './components/TopRated';
import Sales from './components/Sales';
import NewProduct from './components/NewProduct';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Popup from './components/Popup';
import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {

  const [orderPopup, setOrderPopup] = React.useState(false);
  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup)
  }

  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100
    });
    AOS.refresh();
  }, []);

  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white duration-200'>
      <Navbar handleOrderPopup = {handleOrderPopup}/>
      <Header handleOrderPopup = {handleOrderPopup}/>
      <Products />
      <TopRated handleOrderPopup = {handleOrderPopup}/>
      <Sales />
      <NewProduct />
      <Products />
      <Testimonials />
      <Footer />
      <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
    </div>
  )
}

export default App