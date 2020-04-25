import React from 'react';
import { Button, Alert,        } from 'antd';
import './App.css';

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
