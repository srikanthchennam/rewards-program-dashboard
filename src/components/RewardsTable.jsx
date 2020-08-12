import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
        minWidth: 500,
    },
});

const RewardsTable = ({rewardsData}) => {
    const classes = useStyles();
console.log(rewardsData);
    return (
        <>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell >Month</TableCell>
                            <TableCell align="center">Rewards</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rewardsData.map((row) => (
                            <TableRow key={rewardsData.month}>
                                <TableCell component="th" scope="row">
                                    {row.month}
                                </TableCell>
                                <TableCell align="center">{row.points}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}

export default RewardsTable;
