import React from 'react';
import PropTypes from 'prop-types';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import { SidebarNav } from './components';

const Sidebar = (props) => {
  const { pages, open, variant, onClose, auth, ...rest } = props;

  return (
    <Drawer
      anchor="left"
      onClose={() => onClose()}
      open={open}
      variant={variant}
      sx={{
        '& .MuiPaper-root': {
          width: '100%',
          maxWidth: { xs: '100%', sm: 400 },
        },
      }}
    >
      <Box
        {...rest}
        sx={{
          height: '100%',
          padding: 1,
        }}
      >
        <SidebarNav pages={pages} onClose={onClose} auth={auth} />
      </Box>
    </Drawer>
  );
};

Sidebar.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool.isRequired,
  variant: PropTypes.string.isRequired,
  pages: PropTypes.array.isRequired,
  auth: PropTypes.object.isRequired
};

export default Sidebar;
