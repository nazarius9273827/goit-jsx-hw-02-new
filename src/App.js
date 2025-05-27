import './App.css';
import React from 'react';
import Greeting from './componets/Greeting';
import Message from './componets/Message';
import Button from './componets/Button';

function App() {
  const handleClick = () => {
    console.log('Кнопку натиснули!');
  };

  return (
    <div>
      <Greeting name="Користувач" />
      <Message text="Ласкаво просимо до нашого сайту!" />
      <Button onClick={handleClick} />
    </div>
  );
}

export default App;
