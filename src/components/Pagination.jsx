import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            marginTop: theme.spacing(2)
        },
    },
}));

export default function BasicPagination({number0fPages, currentPage, onPageChange}) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Pagination
                count={number0fPages}
                page={currentPage}
                onChange={onPageChange}
                color="primary" />
        </div>
    );
}
