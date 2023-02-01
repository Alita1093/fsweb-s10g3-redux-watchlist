import { ADD_LIST, REMOVE_FAVORITE } from "../actions/actions";

const initialState = {
  favMovies: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_LIST:
      const favoriteMovie = {
        id: action.payload.id,
        title: action.payload.title,
      };

      return {
        ...state,
        favMovies: [...state.favMovies, favoriteMovie],
      };
    case REMOVE_FAVORITE: {
      return {
        ...state,
        favMovies: state.favMovies.filter(
          (movie) => movie.id !== action.payload
        ),
      };
    }
    default:
      return state;
  }
};
export default reducer;
