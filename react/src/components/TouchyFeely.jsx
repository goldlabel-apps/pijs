import React from 'react';
import {
    Snackbar,
} from '@material-ui/core/';

export default function TouchyFeely() {

    return (
        <React.Fragment>
            TouchyFeely
            <Snackbar
                open={true}
                color={`#000`}
            />
        </React.Fragment>
    );
}