import React from 'react'
import ViewListIcon from '@mui/icons-material/ViewList';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import { ICONS } from '../utils/Constants';

export const IconSwitch = ({ icon, onSwitch }) => {
    return (
        <button className='icon' onClick={onSwitch}>
            {icon == ICONS.VEIW_LIST ? <ViewListIcon fontSize="large" /> : <ViewModuleIcon fontSize="large" />}
        </button>
    )
}
