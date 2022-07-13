import '../shared/styles/styles.scss';
import { styled } from '@mui/material/styles';
import Switch, { SwitchProps } from '@mui/material/Switch'
import { UNIT } from '../shared/util';

const StyledSwitch = styled((props: SwitchProps) => (
    <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
    width: 42,
    height: 26,
    padding: 0,
    '& .MuiSwitch-switchBase': {
        padding: 0,
        margin: 2,
        transitionDuration: '300ms',
        '&.Mui-checked': {
            transform: 'translateX(16px)',
            color: '#fff',
            '& + .MuiSwitch-track': {
                backgroundColor: theme.palette.secondary.main,
                opacity: 1,
                border: 0,
            },
        },
        '&.Mui-disabled .MuiSwitch-thumb': {
            color: theme.palette.secondary.main,
        },
    },
    '& .MuiSwitch-thumb': {
        boxSizing: 'border-box',
        width: 22,
        height: 22,
    },
    '& .MuiSwitch-track': {
        borderRadius: 26 / 2,
        backgroundColor: theme.palette.secondary.main,
        opacity: 1,
    },
}));

function UnitToggle(props: { unit: string, setUnit: Function }) {
    return (
        <StyledSwitch defaultChecked value={props.unit === UNIT.IMPERIAL ? true : false} onChange={(e) => {
            props.setUnit(e.target.checked ? UNIT.IMPERIAL : UNIT.METRIC)
        }} />
    );
}

export default UnitToggle;
