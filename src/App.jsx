// REACT
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

// FONTS
import '@fontsource-variable/inter';

// COMPONENTES
import { Header } from './components/Header';
import { Hero } from './components/Hero';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <>
      <Header onSearch={setSearchTerm} />
      <Routes>
        <Route path='/' element={<Hero searchTerm={searchTerm} />} />
      </Routes>
    </>
  )
}

export default App
