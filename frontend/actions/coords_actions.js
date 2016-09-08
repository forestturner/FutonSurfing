export const CoordsConstants = {
  UPDATE_COORDS: "UPDATE_COORDS"
};

export const updateCoords = (coords) => ({
  type: CoordsConstants.UPDATE_COORDS,
  coords
});
