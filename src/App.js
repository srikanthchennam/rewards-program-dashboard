import React from "react";
import UserDashBoard from './components/UserDashboard'
import styles from './css/Main.module.css'
import Typography from "@material-ui/core/Typography";

const App = () => (<div className={styles.root}>
        <Typography
            component="h1"
            variant="h5"
            color="primary"
            align="center"
            gutterBottom={true}
        >Rewards Program Dashboard
        </Typography>
        <UserDashBoard/>
    </div>
)

export default App;
