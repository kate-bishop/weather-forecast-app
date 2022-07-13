import React, { useEffect, useState } from 'react';
import './shared/styles/styles.scss';
import { theme } from './shared/styles/MuiTheme'
import { ThemeProvider } from '@mui/material/styles'
import LocationHeader from './components/LocationHeader';
import ForecastContainer from './components/ForecastContainer';
import { getCurrent, getForecast, processForecast, buildForecast, Forecast } from './shared/util'
import { lon, lat, unit } from './shared/mockstrings'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [current, setCurrent] = useState<Forecast | null>(null)
  const [forecast, setForecast] = useState<Forecast[]>([])

  useEffect(() => {
    getForecast(lat, lon, unit)
      .then(response => {
        setForecast(processForecast(response.list))
        setIsLoading(false)
      })
      .catch(error => console.log(error));
  }, [])

  useEffect(() => {
    getCurrent(lat, lon, unit)
      .then(response => {
        console.log(response)
        setCurrent(buildForecast(response, new Date()))
        setIsLoading(false)
      })
      .catch(error => console.log(error));
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <LocationHeader />
        {!isLoading && current && <ForecastContainer forecast={forecast} current={current} />}
      </div>
    </ThemeProvider>
  );
}

export default App;
