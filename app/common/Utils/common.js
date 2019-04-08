import _ from 'lodash';

export function addPaginationURLParams(urlString, criteria) {
  let listURLPagination = urlString;
  if (!_.isEmpty(criteria)) {
    const { isLazy, currentPage, pageSize, sortField, sortOrder } = criteria;
    if (isLazy) {
      listURLPagination += !_.isUndefined(currentPage)
        ? `?page=${currentPage}`
        : '';
      listURLPagination += !_.isUndefined(pageSize) ? `&size=${pageSize}` : '';
      listURLPagination += !_.isEmpty(sortField) ? `&sort=${sortField}` : '';
      listURLPagination += !_.isEmpty(sortOrder) ? `,${sortOrder}` : '';
    }
  }
  return listURLPagination;
}
