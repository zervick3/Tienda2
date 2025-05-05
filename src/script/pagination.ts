// /pagination.ts

export function paginate<T>(items: T[], currentPage: number, itemsPerPage: number) {
    const totalItems = items.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);
  
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
  
    const paginatedItems = items.slice(startIndex, endIndex);
  
    return {
      currentPage,
      totalPages,
      paginatedItems,
    };
  }