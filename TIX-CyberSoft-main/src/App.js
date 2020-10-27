import logo from './logo.svg';
import './App.css';
import Navbar from '../src/components/Navbar/Navbar'
import CarouselMovie from './components/Carousel/Carousel'
function App() {
  return (
    <div className="App">
      <Navbar/>
      <CarouselMovie />
    </div>
  );
}

export default App;
