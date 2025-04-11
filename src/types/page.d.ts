export interface PageResponse<T> {
    currentPage: number;
    totalPages: number;
    totalElements: number;
    additionalData?: any;
    data: T[];
}