// FONTS
import '@fontsource-variable/inter';

// COMPONENTS
import { Route, Routes } from 'react-router-dom';
import { Explore } from './components/Explore';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Explore />} />
      </Routes>
    </>
  )
}

export default App
