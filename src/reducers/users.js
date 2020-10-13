import {
  GET_USERS_LIST,
  GET_USERS_DETAIL,
  POST_USER_CREATE,
  PUT_USER_EDIT,
} from "../actions/userAction";

let initialState = {
  title: "FJ",
  getUsersList: false,
  errorUsersList: false,
  getUsersDetail: false,
  errorUsersDetail: false,
  getResponDataUser: false,
  errorResponDataUser: false,
};
export const users = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS_LIST:
      return {
        ...state,
        getUsersList: action.payload.data,
        errorUsersList: action.payload.errorMessage,
      };
    case GET_USERS_DETAIL:
      return {
        ...state,
        getUsersDetail: action.payload.data,
        errorUsersDetail: action.payload.errorMessage,
      };
    case POST_USER_CREATE:
      return {
        ...state,
        getResponDataUser: action.payload.data,
        errorResponDataUser: action.payload.errorMessage,
      };
    case PUT_USER_EDIT:
      return {
        ...state,
        getResponDataUser: action.payload.data,
        errorResponDataUser: action.payload.errorMessage,
      };
    default:
      return state;
  }
};
export default users;
