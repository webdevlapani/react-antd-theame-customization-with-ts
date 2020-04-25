import { Alert, Button } from 'antd';
import React from 'react';
import './App.css';

const App = () => {
  return (
    <div>
      <Button type="primary" disabled={true}>
        Button
      </Button>
      <Button type="danger">Button</Button>
    </div>
  );
};

export default App;
