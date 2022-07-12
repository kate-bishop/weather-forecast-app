import React from 'react';
import '../shared/styles.scss';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import CloudOutlinedIcon from '@mui/icons-material/CloudOutlined';

// TODO
function CurrentWeatherCard(props: { weather: string }) {
    return (
        <>
            {props.weather === "PARTLY_CLOUDY" ? <CloudOutlinedIcon color="primary" /> :
                <WbSunnyOutlinedIcon color="primary" />
            }
        </>
    );
}

export default CurrentWeatherCard;
