export interface PaginationTS {
    currentPage: number;
    totalPages: number;
    setCurrentPage: (e: number) => void;
    handleClickPrevious: () => void;
    handleClickNext: () => void;
}
