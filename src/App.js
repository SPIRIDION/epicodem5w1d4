import { useState } from 'react';
import './App.css';
import MyNav from './components/MyNav';
import MyFooter from './components/MyFooter';
import Welcome from './components/Welcome';
import AllTheBooks from './components/AllTheBooks';

function App() {

  const [searchBooks, setSearchBooks] = useState('')

  return (
    <div className="App">
      
      <MyNav searchBooks={searchBooks} setSearchBooks={setSearchBooks} />

      <Welcome />

      <AllTheBooks searchBooks={searchBooks} />

      <MyFooter />

    </div>
  );
}

export default App;
