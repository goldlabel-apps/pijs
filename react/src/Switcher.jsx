import React from 'react';
import { useSelector } from 'react-redux';
import {
    Boot,
    View
} from './components';

export default function Settings() {
    const {
        boot,
    } = useSelector(state => state.system);
    // console.log('booted',boot.booted)
    if (!boot.booted) {
        return <Boot />
    }
    return <View />;
}
