import ShopActionTypes from "./shop.types";

const INITIAL_STATE = {
  collections: null,
  isFetching: false,
  errorMessage: undefined,
  dropdownHidden: true,
  sortParam: "",
  counter: 0,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ShopActionTypes.FETCH_COLLECTIONS_START:
      return {
        ...state,
        isFetching: true,
      };
    case ShopActionTypes.FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        collections: action.payload,
      };
    case ShopActionTypes.FETCH_COLLECTIONS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    case ShopActionTypes.TOGGLE_DROPDOWN_HIDDEN:
      return {
        ...state,
        dropdownHidden: !state.dropdownHidden,
      };
    case ShopActionTypes.SET_SORT_PARAM:
      return {
        ...state,
        sortParam: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
