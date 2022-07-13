import React from 'react';
import { Card, Grid, Typography } from '@mui/material'
import WeatherIcon from './WeatherIcon'
import { Forecast } from '../shared/util'

const WEEKDAY = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
function ForecastCard(props: { forecast: Forecast }) {
    return (
        <Card variant="outlined">
            <Grid container direction="column" alignItems="center" justifyContent="space-around" className="forecast-card">
                <Grid item><Typography variant="body2">{WEEKDAY[props.forecast.date.getDay()]}</Typography></Grid>
                <Grid item><WeatherIcon weather={props.forecast.weather.main} /></Grid>
                <Grid item><Typography variant="subtitle1">{props.forecast.main.temp_max}°</Typography></Grid>
            </Grid>
        </Card>
    );
}

export default ForecastCard;
