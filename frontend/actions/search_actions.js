export const SearchConstants = {
  UPDATE_SEARCH: "UPDATE_SEARCH"
};

export const updateSearch = (search) => ({
  type: SearchConstants.UPDATE_SEARCH,
  search
});
