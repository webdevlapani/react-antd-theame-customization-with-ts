import './App.css';
import { Button, Alert } from 'antd';
import React from 'react';

const App = () => {
  return (
    <div>
      <Button type="primary" disabled={true}>
        Button
      </Button>
      <Button type="danger">Button</Button>
      <Alert message={'test'} />
    </div>
  );
};

export default App;
