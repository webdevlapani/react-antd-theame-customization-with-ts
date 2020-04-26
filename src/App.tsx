import { Alert, Button } from 'antd';
import React from 'react';
import './App.css';

interface ITest {
  name: string;
}
const App = () => {
  const data: ITest = { name: 'shiva' };
  const a = 10;
  const b = 20;

  const helloWord = () => {
    console.log('hello');
  };

  return (
    <div>
      <Button type="primary" disabled>
        Button
      </Button>
      <Button type="danger">Button</Button>
    </div>
  );
};

export default App;
