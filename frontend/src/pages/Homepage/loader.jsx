import React from 'react';
import { Box, AspectRatio, Spinner } from '@chakra-ui/react';

const Loader = () => {
  return (
    <Box
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: '#181a27',
        zIndex: 9999,
      }}
    >
      <img src="zfit-loader1.gif"style={{width: 'auto',height: '30%'}}/>
    </Box>
  );
};

export default Loader;
