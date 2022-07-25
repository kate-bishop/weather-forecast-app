import { Card, Grid, Typography } from '@mui/material'
import WeatherIcon from './WeatherIcon'
import { Forecast, WEEKDAY } from '../shared/utils/constants'

function ForecastCard(props: { forecast: Forecast }) {
    return (
        <Card variant="outlined" square={true} elevation={0} className="forecast-card">
            <Grid container direction="column" alignItems="center" justifyContent="center">
                <Grid item><Typography variant="subtitle2">{WEEKDAY[props.forecast.date.getDay()]}</Typography></Grid>
                <Grid item><WeatherIcon weather={props.forecast.weather.description} /></Grid>
                <Grid item><Typography variant="h5">{props.forecast.main.temp_max}°</Typography></Grid>
            </Grid>
        </Card>
    );
}

export default ForecastCard;
