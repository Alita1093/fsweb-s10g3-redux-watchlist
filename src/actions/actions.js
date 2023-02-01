export const ADD_LIST = "ADD_LIST";
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";

export const addtoList = (movie) => {
  console.log(movie);
  return { type: ADD_LIST, payload: movie };
};
export const removeFavorite = (id) => {
  return { type: REMOVE_FAVORITE, payload: id };
};
