import React from 'react';
import { useSelector } from 'react-redux';
import { Boot, AppShell } from './components';

export default function Settings() {
    const {
        boot,
    } = useSelector(state => state.system);
    // console.log('booted',boot.booted)
    if (!boot.booted) {
        return <Boot />
    }
    return <AppShell />;
}
