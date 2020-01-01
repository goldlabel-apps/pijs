import React from 'react';
import { useSelector } from 'react-redux';
import {
    IconButton,
} from '@material-ui/core/';
import {
    Icon,
} from './';

export default function ConnectionStatus() {
    const { pijs } = useSelector(state => state.system);
    let icon = `disconnected`;
    if (pijs.status === `connected`) {
        icon = `connected`
    }
    return (
        <IconButton disabled>
            <Icon icon={icon} color={`primary`} />
        </IconButton>
    );
}