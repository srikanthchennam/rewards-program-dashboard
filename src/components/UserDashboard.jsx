import React from 'react';
import DropDown from "./DropDown";
import Typography from "@material-ui/core/Typography";
import RewardsTable from "./RewardsTable";
import TransactionTable from "./TransactionTable";
import useManageCustomerData from './custom-hooks/useManageCustomerData'
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            marginTop: theme.spacing(2)
        },
    },
}));

const UserDashboard = () => {
    const classes = useStyles();

    const {setCustomer, rewardsData, transactions} = useManageCustomerData();
    return (
        <div>
            <Typography
                display="inline"
                gutterBottom={true}
                variant="body1"
            >Please Select Customer</Typography>
            <DropDown
                setCustomer={setCustomer}
            />
            {rewardsData.length > 0 && (
                <React.Fragment>
                    <Typography
                        component="h1"
                        variant="h5"
                        color="primary"
                        align="center"
                        gutterBottom={true}
                    >Rewards Table
                    </Typography>
                    <RewardsTable
                        rewardsData={rewardsData}
                    />
                    <div className={classes.root}>
                        <Typography
                            component="h1"
                            variant="h5"
                            color="primary"
                            align="center"
                            gutterBottom={true}
                        >User Transactions Table
                        </Typography>
                    </div>
                    <TransactionTable
                        transactions={transactions}
                    />
                </React.Fragment>
            )}
        </div>
    );
}

export default UserDashboard;
