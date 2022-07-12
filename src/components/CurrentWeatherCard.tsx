import React from 'react';
import '../shared/styles.scss';
import { Grid, Typography, Paper } from '@mui/material'
import { currentTemperature, currentWeather, windspeed, speedUnit } from '../shared/mockstrings';
import WeatherIcon from './WeatherIcon'
import UnitToggle from './UnitToggle'

function CurrentWeatherCard() {
    return (
        <Grid container direction="row">
            <Grid item><Typography variant="h2">{currentTemperature}°</Typography></Grid>
            <Grid item><WeatherIcon weather={currentWeather} /></Grid>
            <Grid item>
                <Grid container direction="column">
                    <Typography align="left">{currentWeather}</Typography>
                    <Typography align="left">{windspeed} {speedUnit}</Typography>
                </Grid>
            </Grid>
            <Grid item alignContent="flex-end">
                <UnitToggle />
            </Grid>
        </Grid>
    );
}

export default CurrentWeatherCard;
