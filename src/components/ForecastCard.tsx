import React from 'react';
import { Card, Grid, Typography } from '@mui/material'
import WeatherIcon from './WeatherIcon'
import { Forecast, WEEKDAY } from '../shared/util'

function ForecastCard(props: { forecast: Forecast }) {
    return (
        <Card variant="outlined">
            <Grid container direction="column" alignItems="center" justifyContent="center" className="forecast-card">
                <Grid item><Typography variant="subtitle2">{WEEKDAY[props.forecast.date.getDay()]}</Typography></Grid>
                <Grid item><WeatherIcon weather={props.forecast.weather.description} /></Grid>
                <Grid item><Typography variant="h5">{props.forecast.main.temp_max}°</Typography></Grid>
            </Grid>
        </Card>
    );
}

export default ForecastCard;
