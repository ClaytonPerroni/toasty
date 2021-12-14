import React, { useEffect, useState } from 'react';
import Container from '@mui/material/Container';

import Header from './Header';
import Content from './Content';
import { onMessage, saveFormSubmission } from './service/mockServer';
import Toast from './Toast';

function App() {

  const [open, setOpen] = useState(false);
  const [data, setData] = useState(undefined);


  const callback = (toast) => {
    setOpen(true);
    setData(toast);
  };

  useEffect(() => {
    onMessage(callback);
  }, []);

  const handleLike = (data) => {
    console.log(data)
    setOpen(false);
    setData(undefined);
    saveFormSubmission(data);
  }

  return (
    <>
      <Header createToast={setOpen} />
      <Container>
        <Content />
        <Toast 
          open={open} 
          data={data} 
          setOpen={setOpen} 
          handleLike={handleLike} 
        />
      </Container>
    </>
  );
}

export default App;
