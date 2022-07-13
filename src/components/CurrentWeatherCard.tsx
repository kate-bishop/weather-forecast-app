import React from 'react';
import { Grid, Typography } from '@mui/material'
// TODO -- if imperial, then mph - if metric, then m/s
import { speedUnit } from '../shared/mockstrings';
import WeatherIcon from './WeatherIcon'
import { Forecast } from '../shared/util'

function CurrentWeatherCard(props: { current: Forecast }) {
    return (
        <Grid container direction="row" alignItems="flex-end" className="current">
            <Grid item><Typography variant="h3" color="textSecondary">{props.current.main.temp}°</Typography></Grid>
            <Grid item><WeatherIcon weather={props.current.weather.main} /></Grid>
            <Grid item>
                <Grid container direction="column">
                    <Typography variant="subtitle2" align="left" color="textSecondary">{props.current.weather.description}</Typography>
                    <Typography variant="subtitle2" align="left" color="textSecondary">{props.current.wind.speed} {speedUnit}</Typography>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default CurrentWeatherCard;
