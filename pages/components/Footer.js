// src/components/Footer.js

import { Typography } from '@mui/material';
import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <Typography>90F Glenda Trace No. 429 Newnan, GA, 30265</Typography><br />
        <a href='mailto:kim@joeystoybox.net'><Typography>kim@joeystoybox.net</Typography></a>      
      <Typography>&copy; 2023 Joey&apos;s Toy Box, Inc.</Typography>
    </footer>
  );
};

export default Footer;
