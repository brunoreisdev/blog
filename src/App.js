import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Header } from './components';
import { Home } from './screens/home/home.screen';
import { GalleryProvider } from 'context/gallery.context';
import { Post } from 'screens/post/post.screen';

function App() {
  return (
    
    <div className="App">
      <Header />
      <BrowserRouter>
        <GalleryProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/post/:id" element={<Post />} />
          </Routes>
        </GalleryProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
