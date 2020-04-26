import { Alert, Button } from 'antd';
import React from 'react';
import './App.css';

interface ITest {
  name: string;
}
const App = () => {
  const data: ITest = { name: 'shiva' };
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
