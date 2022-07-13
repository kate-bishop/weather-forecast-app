import { Grid, Typography } from '@mui/material'
import { LOCATION } from '../shared/util';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function LocationHeader() {
  const today = new Date()
  const dateOptions: Intl.DateTimeFormatOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
  return (
    <div className='location'>
      <Grid container direction="row" alignItems="center" justifyContent="center">
        <Grid item>
          <LocationOnIcon fontSize="small" style={{ marginRight: '.25rem' }} />
        </Grid>
        <Grid item>
          <Typography variant="h6">{LOCATION}</Typography>
        </Grid>
      </Grid>
      <Typography variant="body2">{today.toLocaleDateString("en-US", dateOptions)}</Typography>
    </div>
  );
}

export default LocationHeader;
