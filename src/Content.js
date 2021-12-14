import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { fetchLikedFormSubmissions } from './service/mockServer';

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
      <Typography variant="h4">Liked Form Submissions</Typography>

      <Typography variant="body1" sx={{fontStyle: 'italic', marginTop: 1}}>
        {likedToasts.map(toast => (
          <div key={toast?.id} className="liked-toast">
            <p>{toast?.data?.firstName}</p>
          </div>
        ))}
      </Typography>
    </Box>
  );
}
