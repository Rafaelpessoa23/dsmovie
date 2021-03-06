
import Form from 'components/Navbar/Pages/Form/form';
import Listing from 'components/Navbar/Pages/listing';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Listing />} />
        <Route path='/form'>
          <Route path=':movieId' element={<Form />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
