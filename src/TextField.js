import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { useGlobalContext } from './context';

const useStyles = makeStyles({
    input: {
        width: '100%',
        border: '1px solid black',
        resize: 'none',
        '&:focus': {
            outline: 'none !important',
            border: '2px solid #42a5f5',
        },
    },
});

function TextField() {
    const classes = useStyles();
    const { handleInput } = useGlobalContext();

    return (
        <TextareaAutosize
            className={classes.input}
            aria-label='empty textarea'
            minRows={50}
            maxRows={50}
            onChange={(e) => handleInput(e.target.value)}></TextareaAutosize>
    );
}

export default TextField;
