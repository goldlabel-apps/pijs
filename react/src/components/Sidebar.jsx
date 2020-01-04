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
            <Settings />
            <UserEntity />
            <Messages />
        </React.Fragment>
    );
}
