import React, { useState, useEffect } from 'react';
import { IconButton, CircularProgress, CircularProgressLabel, Box } from '@chakra-ui/react';
import { ChevronUpIcon } from '@chakra-ui/icons';
import './move-top.css';

const MoveToTopButton = () => {
  const [showButton, setShowButton] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollPosition = window.scrollY;
      const maxScroll = documentHeight - windowHeight;
      const currentProgress = (scrollPosition / maxScroll) * 100;
      setProgress(currentProgress);
      if(scrollPosition > 300){
        setShowButton(true);
      }
      else{
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return(

    <Box
      className='box-1'
      opacity={showButton ? 1 : 0}
      transform={showButton ? 'scale(1)' : 'scale(0)'}
    >
      <Box className='box-2'>
        <CircularProgress
          value={progress}
          color="#181a27"
          size="100%"
          thickness="8px"
          trackColor="gray.250"
          capIsRound
        >
          <CircularProgressLabel fontSize="16px">
          <IconButton
          className="move-to-top-button"
          icon={<ChevronUpIcon />}
          onClick={scrollToTop}
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          color="#181a27"
          bg="white"
          _hover={{ bg: 'rgb(0,0,0,0.8)' , color: 'white' }}
          borderRadius="50%"
          fontSize="24px"
          aria-label="Move to top"
        />

          </CircularProgressLabel>
        </CircularProgress>
        
      </Box>
    </Box>
  );
};

export default MoveToTopButton;
