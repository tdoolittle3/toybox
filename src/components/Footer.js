// src/components/Footer.js

import { Typography } from '@mui/material';
import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <p><Typography>90F Glenda Trace No. 429 Newnan, GA, 30265</Typography><br />
        <a href='mailto:kim@joeystoybox.net'><Typography>kim@joeystoybox.net</Typography></a>
      </p>
      <p><Typography>&copy; 2023 Joey's Toy Box, Inc.</Typography></p>
    </footer>
  );
};

export default Footer;
