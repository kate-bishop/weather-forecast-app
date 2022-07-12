import React from 'react';
import '../shared/styles.scss';
import { Grid, Typography, Paper } from '@mui/material'
import { location } from '../shared/mockstrings';
import CurrentWeatherCard from './CurrentWeatherCard';

function ForecastContainer() {
    return (
        <Paper className="container">
            <Paper className="forecast-container">
                <Grid container direction="row" alignItems="center">
                    <Grid item><CurrentWeatherCard /></Grid>
                </Grid>
            </Paper>
        </Paper>
    );
}

export default ForecastContainer;
