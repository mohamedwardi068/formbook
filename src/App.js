import { useEffect, useContext } from 'react';

import BooksContext from './context/books';
import Navbar from './components/navbar';
import Header from './components/header';
import PopularCat from './components/popularcat';
import TopStory from './components/topstory';
import BottomStory from './components/bottomstory';
import TrendingSearch from './components/trendingSearch';
import PreOrder from './components/preOrder';


function App() {
  const { fetchBooks } = useContext(BooksContext);

  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);

  return (
    <div className="app">
      <Navbar/>
      <Header/>
      <PopularCat/>
      <TopStory/>
      <BottomStory/>
      <TrendingSearch/>
      <PreOrder/>
    </div>
  );
}

export default App;
