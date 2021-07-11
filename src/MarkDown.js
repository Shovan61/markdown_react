import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from './TextField';
import Display from './Display';

const useStyles = makeStyles({
    root: {
        marginTop: '2rem',
        height: '100%',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    textarea: {
        width: '40%',
    },
    displayarea: {
        width: '40%',
    },
});

function MarkDown() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.textarea}>
                <TextField />
            </div>
            <div className={classes.displayarea}>
                <Display />
            </div>
        </div>
    );
}

export default MarkDown;
