import React from 'react';
import {
    Messages,
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
            <Messages />
            <div style={{ flexGrow: 1 }} />
            <Settings />
        </React.Fragment>
    );
}
