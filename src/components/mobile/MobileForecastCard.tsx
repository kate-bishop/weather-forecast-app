import { Card, Grid, Typography } from '@mui/material'
import WeatherIcon from '../WeatherIcon'
import { Forecast, WEEKDAY } from '../../shared/utils/constants'

function MobileForecastCard(props: { forecast: Forecast }) {
    return (
        <Card variant="outlined" square={true} elevation={0} className="forecast-card">
            <Grid container direction="row" alignItems="center" justifyContent="flex-start">
                <Grid item xs={7} justifyContent="flex-start"><Typography variant="subtitle2" textAlign="left">{WEEKDAY[props.forecast.date.getDay()]}</Typography></Grid>
                <Grid item xs={2} alignItems="flex-end"><WeatherIcon weather={props.forecast.weather.description} /></Grid>
                <Grid item xs={3} alignItems="flex-end"><Typography variant="h5" textAlign="right">{props.forecast.main.temp_max}°</Typography></Grid>
            </Grid>
        </Card>
    );
}

export default MobileForecastCard;
