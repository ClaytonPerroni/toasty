import React, { useEffect, useState } from 'react';
import Container from '@mui/material/Container';

import Header from './Header';
import Content from './Content';
import { onMessage, saveFormSubmission, createMockFormSubmission } from './service/mockServer';
import Toast from './Toast';

function App() {

  const [open, setOpen] = useState(false);
  const [data, setData] = useState(undefined);

  useEffect(() => {
    const callback = (toast) => {
      setOpen(true);
      setData(toast);
    };

    onMessage(callback);
  }, []);

  const handleLike = (data) => {
    setOpen(false);
    setData(undefined);
    saveFormSubmission(data);
  }

  return (
    <>
      <Header createToast={createMockFormSubmission} />
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
