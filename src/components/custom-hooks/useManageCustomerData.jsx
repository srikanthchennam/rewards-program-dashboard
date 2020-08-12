import {useEffect, useState} from "react";
import mockDataFromApi from '../mock-api/dataSet';
//This hook is created to keep logic away from presentational data
const useManageCustomerData = () => {
    const [customer, setCustomer] = useState('');
    const [rewardsData, setRewardsData] = useState([]);
    const [transactions, setTransactions] = useState([]);

    const calculateRewards = (incomingData) => {
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        const result = incomingData.reduce((acc, currentValue) => {
            const monthNumber = currentValue.transactionDate.split("/")[0] - 1
            const month = months[monthNumber];
            let points = 0;
            let over100 = currentValue.amount - 100;

            if (over100 > 0) {
                // A customer receives 2 points for every dollar spent over $100 in each transaction
                points += (over100 * 2);
            }
            if (currentValue.amount > 50) {
                // plus 1 point for every dollar spent over $50 in each transaction
                points += 50;
            }

                if (acc[month]) {
                    acc[month].points += points;
                } else {
                    acc[month] = {}
                    acc[month]["points"] = 0;
                    acc[month].points = points;
                }
            return acc;
        }, {})

        const rewardsArray = Object.keys(result).map((month => ({
            month,
            points: result[month].points
        })))
        setRewardsData(rewardsArray);
    };

    useEffect(() => {
        console.log('ger');
        console.log(customer);

        async function fetchData() {
            if (customer) {
                const data = mockDataFromApi(+new Date('01/01/2020'), +new Date('03/03/2020'))
                setTransactions(data);
                calculateRewards(data)
            } else {
                setRewardsData([]);
                setTransactions([]);
            }
        }

        fetchData();
    }, [customer]);

    return {
        customer,
        setCustomer,
        rewardsData,
        transactions
    }
}

export default useManageCustomerData;
