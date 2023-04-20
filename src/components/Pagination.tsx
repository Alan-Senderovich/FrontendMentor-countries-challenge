import React from 'react'
import { PaginationTS } from '@/types/Pagination';
import { BackwardIcon, ForwardIcon } from '@heroicons/react/24/solid'


const Pagination = ({ handleClickPrevious, handleClickNext, setCurrentPage, currentPage, totalPages }: PaginationTS) => {

    const getPageNumbers = (totalPages: number, currentPage: number) => {
        const pageNumbers = [];
        const maxVisiblePages = 5; // cantidad máxima de números de página visibles
        let startPage = currentPage - Math.floor(maxVisiblePages / 2);
        if (startPage < 1) {
            startPage = 1;
        }
        let endPage = startPage + maxVisiblePages - 1;
        if (endPage > totalPages) {
            endPage = totalPages;
            startPage = endPage - maxVisiblePages + 1;
            if (startPage < 1) {
                startPage = 1;
            }
        }
        for (let i = startPage; i <= endPage; i++) {
            pageNumbers.push(i);
        }
        return pageNumbers;
    };

    const pageNumbers = getPageNumbers(totalPages, currentPage);

    return (
        <div className='flex justify-center gap-5 py-8 '>
            <button onClick={handleClickPrevious} disabled={currentPage === 1} className='px-4 py-2 hover:opacity-50 cursor-pointer transform transition duration-300 hover:scale-105 active:scale-95 '>
                <BackwardIcon className="h-6 w-6 text-[#2b3743] dark:text-[#fff]" />
            </button>
            <div className='flex gap-1 '>
                {pageNumbers.map((pageNumber, index) => (
                    <button className={`${currentPage === pageNumber ? "bg-[#2b3743] text-[#fff]": "bg-transparent"} text-[#2b3743] dark:text-[#fff] px-3 py-2 hover:opacity-50 font-bold cursor-pointer transform transition duration-300 hover:scale-105 active:scale-95`} key={index} onClick={() => setCurrentPage(pageNumber)}>
                        {pageNumber}
                    </button>
                ))}
            </div>
            <button onClick={handleClickNext} disabled={currentPage === totalPages} className='px-4 py-2 hover:opacity-50 cursor-pointer transform transition duration-300 hover:scale-105 active:scale-95'>
                <ForwardIcon className="h-6 w-6 text-[#2b3743] dark:text-[#fff]" />
            </button>
        </div>
    )
}

export default Pagination