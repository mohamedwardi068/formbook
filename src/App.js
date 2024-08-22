import { useEffect, useContext } from 'react';

import BooksContext from './context/books';
import Navbar from './components/navbar';
import Header from './components/header';
import PopularCat from './components/popularcat';
import TopStory from './components/topstory';
import BottomStory from './components/bottomstory';
import TrendingSearch from './components/trendingSearch';
import PreOrder from './components/preOrder';
import Loginn from './pages/login';
import SignUp from './pages/signup';
import { BrowserRouter,Routes,Route } from "react-router-dom";

import ListProduct from './pages/listProduct';

import BestSeller from './pages/BestSeller';
import PopCat from './components/popCateg';
import JustLanding from './pages/justlanding';
import Suggest from './pages/lsitsuggesttoday';
import BestSellingSpeakers from './pages/BestSellingSpeakers';
import JustLandingAndBestSeller from './pages/justLandingAndBestSeller';
import Subscribe from './components/subscibe';
import PaymentMethode from './components/paymentMethode';
import Footer from './components/footer';


function App() {
  // const { fetchBooks } = useContext(BooksContext);

  // useEffect(() => {
  //   fetchBooks();
  // }, [fetchBooks]);

  return (
    
    <>
    <Navbar/>
    <Header/>
    <BrowserRouter>
<Routes >
<Route index element={<><PopularCat/><TopStory/><BottomStory/><ListProduct/><PreOrder/><TrendingSearch/> <BestSeller/><PopCat/><Suggest/><BestSellingSpeakers/><JustLanding/><JustLandingAndBestSeller/><Subscribe/></>}/>
<Route path="/login" element={<><Loginn/></>}/>
<Route path="/signup" element={<><SignUp/></>}/>
</Routes>
</BrowserRouter>

      <Footer/> 
      <PaymentMethode/>
    </>
  );
}

export default App;
