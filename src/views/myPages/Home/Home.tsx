import React from 'react';
import { useState, useEffect } from 'react';
import { useTheme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Container from '../../../common/Container';
import { Hero } from './components';

const Home = () => {
  const theme: any = useTheme();  
  const [auth, setAuthLevel] = useState(0);

  useEffect(() => {   
    setAuthLevel(4);         
  }, []); 

  return (
    <Box>
      <Box bgcolor={theme.palette.alternate.main} position={'relative'}>
        <Container position="relative" zIndex={2}>
          <Hero />
          <div>{auth}</div>
        </Container>
      </Box>      
    </Box>
  );
};

export default Home;
