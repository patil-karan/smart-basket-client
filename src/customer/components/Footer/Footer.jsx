import { Button, Grid, Typography, Link, Box } from '@mui/material';
import React from 'react';

const Footer = () => {
  return (
    <div>
      <Grid
        container
        spacing={4}
        sx={{ bgcolor: 'black', color: 'white', py: 3 }}
      >
        <Grid item xs={12} sm={6} md={3} sx={{ textAlign: 'center' }}>
          <Typography variant="h6" gutterBottom>
            Company
          </Typography>
          <Box display="flex" flexDirection="column" gap={1}>
            <Button color="inherit">About</Button>
            <Button color="inherit">Blog</Button>
            <Button color="inherit">Press</Button>
            <Button color="inherit">Jobs</Button>
            <Button color="inherit">Partners</Button>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={3} sx={{ textAlign: 'center' }}>
          <Typography variant="h6" gutterBottom>
            Solutions
          </Typography>
          <Box display="flex" flexDirection="column" gap={1}>
            <Button color="inherit">Marketing</Button>
            <Button color="inherit">Analytics</Button>
            <Button color="inherit">Commerce</Button>
            <Button color="inherit">Insights</Button>
            <Button color="inherit">Support</Button>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={3} sx={{ textAlign: 'center' }}>
          <Typography variant="h6" gutterBottom>
            Documentation
          </Typography>
          <Box display="flex" flexDirection="column" gap={1}>
            <Button color="inherit">Guides</Button>
            <Button color="inherit">API Status</Button>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={3} sx={{ textAlign: 'center' }}>
          <Typography variant="h6" gutterBottom>
            Legal
          </Typography>
          <Box display="flex" flexDirection="column" gap={1}>
            <Button color="inherit">Claim</Button>
            <Button color="inherit">Privacy</Button>
            <Button color="inherit">Terms</Button>
          </Box>
        </Grid>

        <Grid item xs={12} sx={{ textAlign: 'center', mt: 5 }}>
          <Typography variant="body2" gutterBottom>
            © 2023 My Company. All rights reserved.
          </Typography>
          <Typography gutterBottom>
            Made with love by me.
          </Typography>
          <Typography variant="body2">
            Icons made by{' '}
            <Link href="https://www.freepik.com" color="inherit" underline="always">
              Freepik
            </Link>{' '}
            from{' '}
            <Link href="https://www.flaticon.com/" color="inherit" underline="always">
              www.flaticon.com
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
