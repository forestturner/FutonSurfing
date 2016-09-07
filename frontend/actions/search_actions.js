export const SearchConstants = {
  UPDATE_SEARCH: "UPDATE_SEARCH"
};

export const updateSearch = (search) => ({
  type: SEARCH_CONSTANTS.UPDATE_SEARCH,
  search
});
