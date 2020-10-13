import axios from "axios";

export const GET_USERS_LIST = "GET_USERS_LIST";
export const GET_USERS_DETAIL = "GET_USERS_DETAIL";

export const getUsersList = () => {
  return (dispatch) => {
    axios
      .get(
        "http://my-json-server.typicode.com/afifwijaya16/db-learn-react-crud-redux/users"
      )
      .then(function (response) {
        dispatch({
          type: GET_USERS_LIST,
          payload: {
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch(function (error) {
        dispatch({
          type: GET_USERS_LIST,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const getUsersDetail = (id) => {
  return (dispatch) => {
    axios
      .get(
        "http://my-json-server.typicode.com/afifwijaya16/db-learn-react-crud-redux/users/" +
          id
      )
      .then(function (response) {
        dispatch({
          type: GET_USERS_DETAIL,
          payload: {
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch(function (error) {
        dispatch({
          type: GET_USERS_DETAIL,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const deleteUsersDetail = () => {
  return (dispatch) => {
    dispatch({
      type: GET_USERS_DETAIL,
      payload: {
        data: false,
        errorMessage: false,
      },
    });
  };
};
