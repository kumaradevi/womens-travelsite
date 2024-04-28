import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Room from './components/Room/Room';
import Search from './components/Search/Search';
import City from './components/City/City';
function App() {
  return (
    <>
      <Navbar />
      <Room />
      <Search />
      <City/>
      <Footer/>
    </>
  );
}

export default App;
