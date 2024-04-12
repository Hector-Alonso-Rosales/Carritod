
import Header from './components/Header/Header';
import CartContent from './components/CartContent/CartContent';
import DataProvider from './components/Context/DataContext';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
  <DataProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header/>} />
        <Route path="/cart" element={<CartContent/>} />
      </Routes>
    </BrowserRouter>
  </DataProvider> 
  );
}

export default App;
