import { useContext } from 'react';
import '../shared/styles/styles.scss';
import { Grid, Paper } from '@mui/material'
import CurrentWeatherCard from './CurrentWeatherCard';
import ForecastCard from './ForecastCard';
import UnitToggle from './UnitToggle';
import { Forecast, WindowSize } from '../shared/utils/constants'
import { WindowSizeContext } from '../App';

function ForecastContainer(props: { forecast: Forecast[], current: Forecast, unit: string, setUnit: Function }) {
    const windowSize = useContext(WindowSizeContext);
    
    return (
        <Paper className="container">
            <Paper className="today-container">
                <Grid container direction="row" justifyContent="space-between" alignItems="flex-start">
                    <Grid item>
                        <CurrentWeatherCard current={props.current} unit={props.unit} />
                    </Grid>
                    <Grid item alignContent="flex-end" justifyContent="flex-start">
                        <UnitToggle unit={props.unit} setUnit={props.setUnit} />
                    </Grid>
                </Grid>
            </Paper>
            <Paper className="forecast-container" elevation={0}>
                <Grid container direction={windowSize > WindowSize.SMALL ? 'row' : 'column'} justifyContent="space-between">
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
