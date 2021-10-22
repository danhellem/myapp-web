import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Box from '@material-ui/core/Box';
import Container from '../../../common/Container';
import {
  Contact,
  Hero,
  Process,
  Reviews,
  SeenOn,
  WhatWeDo,
} from './components';

const Services = ({ themeMode = 'light' }) => {
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.up('sm'), {
    defaultMatches: true,
  });

  return (
    <Box>
      <Container>
        <Hero />
      </Container>
      <Container>
        <WhatWeDo />
      </Container>
      <Box bgcolor={theme.palette.alternate.main}>
        <Container>
          <SeenOn />
        </Container>
      </Box>
      <Container>
        <Process themeMode={themeMode} />
      </Container>
      <Container
        sx={{
          backgroundImage:
            'url("https://assets.maccarianagency.com/backgrounds/img1.jpg")',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
        borderRadius={isSm ? 4 : 0}
      >
        <Reviews />
      </Container>
      <Container>
        <Contact />
      </Container>
    </Box>
  );
};

Services.propTypes = {
  themeMode: PropTypes.string.isRequired,
};

export default Services;
