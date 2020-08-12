const mockDataFromApi = (startDate, EndDate) => {
    const randomNumber = (maxDigits) => Math.ceil(Math.random() * maxDigits);
    const randomDate = (start, end) => {
        const dt = new Date(+start + Math.random() * (end - start))
        return (dt.getMonth() + 1) + "/" + dt.getDate() + "/" + dt.getFullYear();
    };

    return [...new Array(randomNumber(100))].map((item, index) => ({
        transactionId: index,
        itemName: "item " + index,
        amount: randomNumber(1000),
        transactionDate: randomDate(startDate, EndDate)
    }))
}

export default mockDataFromApi;

export const users = [
    "James", "John", "Robert", "Becky", "Jessica", "Ava"
];
