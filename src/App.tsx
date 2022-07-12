import React from 'react';
import './shared/styles.scss';
import { theme } from './shared/MuiTheme'
import { ThemeProvider } from '@mui/material/styles'
import LocationHeader from './components/LocationHeader';
import ForecastContainer from './components/ForecastContainer';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <LocationHeader />
        <ForecastContainer />
      </div>
    </ThemeProvider>
  );
}

export default App;
