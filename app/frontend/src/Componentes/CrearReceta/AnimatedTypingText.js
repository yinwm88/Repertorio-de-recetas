import React, { useState, useEffect } from 'react';
import { Typography } from '@mui/material';

const AnimatedTypingText = ({ text }) => {
  const [displayText, setDisplayText] = useState('');
  
  useEffect(() => {
    let intervalId;
    let currentIndex = 0;
  
    if (currentIndex < text.length) {
      intervalId = setInterval(() => {
        setDisplayText((prevText) => {
          if (currentIndex < text.length) {
            return prevText + text[currentIndex];
          } else {
            clearInterval(intervalId);
            return prevText;
          }
        });
        currentIndex++;
      }, 100); 
    }
  
    return () => clearInterval(intervalId);
  }, [text]);
  

  return (
    <Typography variant="h6" sx={{ textAlign: 'center', fontSize: '2rem' }}>
      {displayText}
    </Typography>
  );
};

export default AnimatedTypingText;
