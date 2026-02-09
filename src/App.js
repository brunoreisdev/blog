import './App.css';
import { Header } from './components';
import { Home } from './screens/home/home.component';
import { GalleryProvider } from 'context/gallery.context';

function App() {
  return (
    <div className="App">
        <Header />
      <GalleryProvider>
        <Home />
      </GalleryProvider>
    </div>
  );
}

export default App;
