import '../shared/styles/styles.scss';
import { Grid, Paper } from '@mui/material'
import CurrentWeatherCard from './CurrentWeatherCard';
import MobileCurrentWeatherCard from './mobile/MobileCurrentWeatherCard'
import ForecastCard from './ForecastCard';
import UnitToggle from './UnitToggle';
import { Forecast, WINDOW_SIZE } from '../shared/utils/constants'

function ForecastContainer(props: { forecast: Forecast[], current: Forecast, unit: string, setUnit: Function, windowSize: number }) {
    return (
        <Paper className="container">
            <Paper className="today-container">
                <Grid container direction="row" justifyContent="space-between" alignItems="center">
                    <Grid item>
                        {props.windowSize > WINDOW_SIZE.SMALL ?
                            <CurrentWeatherCard current={props.current} unit={props.unit} />
                            : <MobileCurrentWeatherCard current={props.current} unit={props.unit} />
                        }
                    </Grid>
                    <Grid item alignContent="flex-end">
                        <UnitToggle unit={props.unit} setUnit={props.setUnit} />
                    </Grid>
                </Grid>
            </Paper>
            <Paper className="forecast-container">
                <Grid container direction="row" justifyContent="space-between">
                    {
                        props.forecast.map((fc) => <Grid item xs>
                            <ForecastCard forecast={fc} />
                        </Grid>)
                    }
                </Grid>
            </Paper>
        </Paper>
    );
}

export default ForecastContainer;
