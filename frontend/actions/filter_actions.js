
export const FilterConstants = {
  UPDATE_FILTER: "UPDATE_FILTER",
  UPDATE_BOUNDS: "UPDATE_BOUNDS"
};

export const updateFilter = (filter, value) => ({
  type: FilterConstants.UPDATE_FILTER,
  filter,
  value
});
export const updateBounds = (bounds) => ({
  type: FilterConstants.UPDATE_BOUNDS,
  bounds
});
