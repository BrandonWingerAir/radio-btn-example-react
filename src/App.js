import './App.css';
import BtnContainer from './BtnContainer';
import { useState } from 'react';

let btnValues = [
  {id: 1, value: 'Coding 💻' },
  {id: 2, value: 'Gaming 🎮' },
  {id: 3, value: 'Music 🎸' },
  {id: 4, value: 'Sports 🏂' }
];

function App() {
  const [BtnDisplay, setBtnDisplay] = useState(btnValues[0]);

  function BtnUpdate(updatedBtn) {
    console.log(updatedBtn);
    setBtnDisplay(updatedBtn);
  }

  return (
    <div className="app">
      <h2>{BtnDisplay.value}</h2>
      <BtnContainer buttons={btnValues} OnChange={BtnUpdate} />
    </div>
  );
}

export default App;
