import React from 'react';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import ReactMarkdown from 'react-markdown';
import { useGlobalContext } from './context';
import gfm from 'remark-gfm';

const useStyles = makeStyles({
    root: {
        minHeight: '47.5rem',
        minWidth: '100%',
    },
    img: {
        width: '200px',
        height: '200px',
        objectFit: 'cover',
    },
});

function Display() {
    const classes = useStyles();
    const { input } = useGlobalContext();
    console.log(input);
    return (
        <Card className={classes.root}>
            <ReactMarkdown remarkPlugins={[gfm]}>{input}</ReactMarkdown>
        </Card>
    );
}

export default Display;
