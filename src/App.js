import { useState } from 'react';
import './App.css';
import MyNav from './components/MyNav';
import MyFooter from './components/MyFooter';
import Welcome from './components/Welcome';
import AllTheBooks from './components/AllTheBooks';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BookDetails from './components/BookDetails';
import NotFound from './components/NotFound';

function App() {

  const [searchBooks, setSearchBooks] = useState('')

  return (

    <BrowserRouter>

      <MyNav searchBooks={searchBooks} setSearchBooks={setSearchBooks} />

      <Welcome />

      <Routes>

        <Route path='/' element={<AllTheBooks searchBooks={searchBooks} />}/>
        <Route path='/details/:asin' element={<BookDetails />}/>
        <Route path='*' element={<NotFound />}/>

      </Routes>

      <MyFooter />
    
    </BrowserRouter>

  );
}

export default App;
