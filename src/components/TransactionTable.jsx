import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Pagination from './Pagination';
import usePagination from "./custom-hooks/usePagination";

const useStyles = makeStyles({
    table: {
        minWidth: 500,
    },
});

const TransactionTable = ({transactions}) => {
    const classes = useStyles();
    const { currentPage, pageItems, number0fPages, onPageChange} = usePagination(transactions, 10);
    return (
        <>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell >Date</TableCell>
                            <TableCell align="center">Rewards</TableCell>
                            <TableCell align="center">Amount</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {pageItems.map((transaction) => (
                            <TableRow key={transaction.transactionId}>
                                <TableCell component="th" scope="row">
                                    {transaction.transactionDate}
                                </TableCell>
                                <TableCell align="center">{transaction.itemName}</TableCell>
                                <TableCell align="center">$ {transaction.amount}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Pagination
                number0fPages={number0fPages}
                currentPage={currentPage}
                onPageChange={onPageChange}
            />
        </>
    );
}

export default TransactionTable;
