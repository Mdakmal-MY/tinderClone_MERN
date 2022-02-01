import './App.css';
import Header from './Header.js';
import TinderCard from './TinderCard.js';
import SwipeButtons from './swipeButtons';

function App() {
  return (
    <div className="app">
      <Header/>
      <TinderCard/>
      <SwipeButtons/>
    </div>
  );
}

export default App;
