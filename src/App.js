import logo from './logo.svg';
import './App.css';
import { Card, Header } from './components';
import { Home } from './screens/home/home.component';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      {/* <Card        
        title="Sample Card"
        content="TLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci sagittishis is a description for the sample card."
      /> */}
    </div>
  );
}

export default App;
