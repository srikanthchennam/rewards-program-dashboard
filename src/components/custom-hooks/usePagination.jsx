import {useEffect, useState} from 'react';

const usePagination = (data, amountItemsPerPage) => {
    const tableData = [...data];

    const [currentPage, setCurrentPage] = useState(1);
    const [pageItems, setPageItems] = useState([]);

    const onPageChange = (event, pageNumber) => {
        const endIndexExclusive = (pageNumber * amountItemsPerPage) - 1;
        const startIndexInclusive = endIndexExclusive - (amountItemsPerPage - 1);
        setCurrentPage(pageNumber);
        setPageItems(tableData.slice(startIndexInclusive, endIndexExclusive + 1));
    };

    const numberOfPages = () => {
        const pages = tableData.length/amountItemsPerPage;
        return Math.ceil(pages); // We don't want the last page to be something like 3.33
    }
    useEffect(() => {
        onPageChange({},1); // setting initial page data
    }, [data]);

    return {
        currentPage, pageItems, number0fPages: numberOfPages(), onPageChange,
    };

};

export default usePagination;

