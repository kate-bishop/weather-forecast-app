import { useEffect, useState } from 'react';
import './shared/styles/styles.scss';
import { theme } from './shared/styles/MuiTheme'
import { ThemeProvider } from '@mui/material/styles'
import LocationHeader from './components/LocationHeader';
import ForecastContainer from './components/ForecastContainer';
import { getCurrent, getForecast } from './shared/utils/api'
import { processForecast, buildForecast, getWindowSize } from './shared/utils/functions'
import { LON, LAT, UNIT, Forecast } from './shared/utils/constants'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [current, setCurrent] = useState<Forecast | null>(null)
  const [forecast, setForecast] = useState<Forecast[]>([])
  const [unit, setUnit] = useState(UNIT.IMPERIAL)
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }
    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

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
        {!isLoading && current && <ForecastContainer forecast={forecast} current={current} unit={unit} setUnit={setUnit} windowSize={windowSize.innerWidth} />}
      </div>
    </ThemeProvider>
  );
}

export default App;
