import '../shared/styles/styles.scss';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import CloudOutlinedIcon from '@mui/icons-material/CloudOutlined';
import ThunderstormOutlinedIcon from '@mui/icons-material/ThunderstormOutlined';
import UmbrellaOutlinedIcon from '@mui/icons-material/UmbrellaOutlined';
import GrainOutlinedIcon from '@mui/icons-material/GrainOutlined';
import AcUnitOutlinedIcon from '@mui/icons-material/AcUnitOutlined';
import { WEATHER } from '../shared/utils/constants';

function CurrentWeatherCard(props: { weather: string }) {
    return (
        <div className="weather-icon">
            {
                props.weather === WEATHER.CLEAR_SKY ? <WbSunnyOutlinedIcon color="secondary" fontSize="large" />
                    : props.weather.toLowerCase().includes("cloud") ? <CloudOutlinedIcon color="secondary" fontSize="large" />
                        : props.weather.toLowerCase().includes("rain") ? <UmbrellaOutlinedIcon color="secondary" fontSize="large" />
                            : props.weather === WEATHER.THUNDERSTORM ? <ThunderstormOutlinedIcon color="secondary" fontSize="large" />
                                : props.weather === WEATHER.SNOW ? <AcUnitOutlinedIcon color="secondary" fontSize="large" />
                                    : <GrainOutlinedIcon color="secondary" fontSize="large" />
            }
        </div>
    );
}

export default CurrentWeatherCard;
