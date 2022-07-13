import React from 'react';
import '../shared/styles/styles.scss';
import { Card, Grid, Paper } from '@mui/material'
import CurrentWeatherCard from './CurrentWeatherCard';
import ForecastCard from './ForecastCard';
import UnitToggle from './UnitToggle';
import { Forecast } from '../shared/util'

function ForecastContainer(props: { forecast: Forecast[], current: Forecast }) {
    return (
        <Paper className="container">
            <Paper className="today-container">
                <Grid container direction="row" justifyContent="space-between" alignItems="center">
                    <Grid item>
                        <CurrentWeatherCard current={props.current} />
                    </Grid>
                    <Grid item alignContent="flex-end">
                        <UnitToggle />
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
