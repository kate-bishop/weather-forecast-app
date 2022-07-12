import React from 'react';
import '../util/styles.css';
import { Typography } from '@mui/material'
import { location, date } from '../util/mockstrings';

function LocationHeader() {
  return (
    <div className="header">
        <Typography variant="h6">{location}</Typography>
        <Typography variant="subtitle1">{date}</Typography>
    </div>
  );
}

export default LocationHeader;
