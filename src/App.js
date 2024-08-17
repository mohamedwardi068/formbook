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
<Route index element={<><PopularCat/><TopStory/><BottomStory/><TrendingSearch/><PreOrder/><ListProduct/></>}/>
<Route path="/login" element={<><Loginn/></>}/>
<Route path="/signup" element={<><SignUp/></>}/>
</Routes>
</BrowserRouter>

      
    </>
  );
}

export default App;
