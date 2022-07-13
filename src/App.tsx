import { useEffect, useState } from 'react';
import './shared/styles/styles.scss';
import { theme } from './shared/styles/MuiTheme'
import { ThemeProvider } from '@mui/material/styles'
import LocationHeader from './components/LocationHeader';
import ForecastContainer from './components/ForecastContainer';
import { getCurrent, getForecast, processForecast, buildForecast, Forecast, UNIT } from './shared/util'
import { LON, LAT } from './shared/util'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [current, setCurrent] = useState<Forecast | null>(null)
  const [forecast, setForecast] = useState<Forecast[]>([])
  const [unit, setUnit] = useState(UNIT.IMPERIAL)

  useEffect(() => {
    getForecast(LAT, LON, unit)
      .then(response => {
        setForecast(processForecast(response.list))
        setIsLoading(false)
      })
      .catch(error => console.log(error));
  }, [unit])

  useEffect(() => {
    getCurrent(LAT, LON, unit)
      .then(response => {
        setCurrent(buildForecast(response, new Date()))
        setIsLoading(false)
      })
      .catch(error => console.log(error));
  }, [unit])

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <LocationHeader />
        {!isLoading && current && <ForecastContainer forecast={forecast} current={current} unit={unit} setUnit={setUnit}/>}
      </div>
    </ThemeProvider>
  );
}

export default App;
