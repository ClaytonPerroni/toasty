import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { fetchLikedFormSubmissions } from './service/mockServer';
import * as Styles from './styledToasts';

export default function Content() {
  const [likedToasts, setLikedToasts] = useState([]);

  useEffect(() => {
    const interval = setInterval(async () => {
      const toasts = await fetchLikedFormSubmissions()
      setLikedToasts(toasts?.formSubmissions || []);
      
    }
      , 5000);
    return () => clearInterval(interval);
  }, [])

  return (
    <Box sx={{marginTop: 3}}>
      <Styles.TypographyP variant="h4">Liked Form Submissions</Styles.TypographyP>

      
        {likedToasts.map(toast => (
          <Styles.Toast key={toast?.id}>
            <Styles.TypographyP variant="body1" sx={{fontStyle: 'italic', marginTop: 1}}>
              {`${toast?.data?.firstName} ${toast?.data?.lastName}, ${toast?.data?.email}`}
            </Styles.TypographyP>
          </Styles.Toast>
        ))}
      
    </Box>
  );
}
