import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const Copyright = () => {
  return (
    <Typography variant="caption" color="textSecondary" style={{color:'white', marginTop:20}} align="center">
      {'Hak Cipta © '} {new Date().getFullYear()} {' - '}
      <Link color="inherit" href="https://dev.rsuregar.id/">
         Donorki
      </Link>{' '}
    </Typography>
  );
}

export default Copyright