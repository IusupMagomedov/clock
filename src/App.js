
import './App.css';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import StarIcon from '@mui/icons-material/StarBorder';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const tier = {
    title: '25 + 5 Clock',
    breakLable: 'Break Length', 
    sessionLable: 'Session Length',
    buttonText: 'Sign up for free',
    buttonVariant: 'outlined',
  }



function PricingContent() {
  const [ breakLength, setBreakLength ] = useState(5)
  const [ sessionLength, setSessionLength ] = useState(25)
  return (
    <React.Fragment>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
      
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
            <Grid
              item
              key={tier.title}
              xs={12}
              sm={tier.title === 'Enterprise' ? 12 : 6}
              md={4}
            >
              <Card>
                <CardHeader
                  title={tier.title}
                />
                <CardContent>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'baseline',
                      mb: 2,
                    }}
                  >
                    <Typography id="break-label" variant="h6">
                      {tier.breakLable}
                      <Button id="break-increment"><ArrowUpwardIcon/></Button>
                      <Button id="break-decrement"><ArrowDownwardIcon/></Button>
                      <Typography id="break-length">{breakLength}</Typography>
                    </Typography>
                    <Typography id="session-label" variant="h6">
                      {tier.sessionLable}
                      <Button id="session-increment"><ArrowUpwardIcon/></Button>
                      <Button id="session-decrement"><ArrowDownwardIcon/></Button>
                      <Typography id="session-length">{sessionLength}</Typography>
                    </Typography>
                  </Box>
                </CardContent>
                <CardActions>
                  <Button fullWidth variant={tier.buttonVariant}>
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          
        </Grid>
      </Container>
    </React.Fragment>
  );
}
function App() {
  return (
    <PricingContent />
  );
}

export default App;
