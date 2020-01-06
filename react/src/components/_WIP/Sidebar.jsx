import React from 'react';
import {
    Message,
    NavList,
    Settings,
    SidebarHeader,
    UserEntity,
} from './';

export default function Menu() {
    return (
        <React.Fragment>
            <SidebarHeader />
            <NavList />
            <UserEntity />
            <Message />
            <div style={{ flexGrow: 1 }} />
            <Settings />
        </React.Fragment>
    );
}
