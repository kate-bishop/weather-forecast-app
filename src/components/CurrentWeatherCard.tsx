import { Grid, Typography } from '@mui/material'
import WeatherIcon from './WeatherIcon'
import { Forecast, UNIT, SPEED_UNIT } from '../shared/util'

function CurrentWeatherCard(props: { current: Forecast, unit: string }) {
    return (
        <Grid container direction="row" alignItems="flex-end" className="current">
            <Grid item><Typography variant="h3" color="textSecondary">{props.current.main.temp}°</Typography></Grid>
            <Grid item><WeatherIcon weather={props.current.weather.description} /></Grid>
            <Grid item>
                <Grid container direction="column">
                    <Typography variant="subtitle2" align="left" color="textSecondary">{props.current.weather.description}</Typography>
                    <Typography variant="subtitle2" align="left" color="textSecondary">{props.current.wind.speed} {props.unit === UNIT.IMPERIAL ? SPEED_UNIT.IMPERIAL : SPEED_UNIT.METRIC}</Typography>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default CurrentWeatherCard;
