import React, { useEffect, useState } from 'react';
import Container from '@mui/material/Container';

import Header from './Header';
import Content from './Content';
import { onMessage, saveFormSubmission } from './service/mockServer';
import Toast from './Toast';

function App() {

  const [open, setOpen] = useState(false);
  const [data, setData] = useState(undefined);


  const callback = (x) => {
    console.log(x);
    setOpen(true);
    setData(x);
    // only save if the toast is liked
    saveFormSubmission(x);
  };
  useEffect(() => {
    onMessage(callback);
  }, []);

  return (
    <>
      <Header createToast={setOpen} />
      <Container>
        <Content />
        <Toast open={open} data={data} setOpen={setOpen} />
      </Container>
    </>
  );
}

export default App;
