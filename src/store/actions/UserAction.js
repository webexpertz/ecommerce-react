import { Actions } from "react-native-router-flux";
import { AsyncStorage, Alert } from "react-native";
// import {   } from "../../lib/api/methods/user";

import { loginUserAPI, forgotPasswordAPI, forgotPasswordVerifyOTPAPI, resetPasswordAPI, checkMobileAPI, resendOTPAPI, verifyOTPAPI, registerCustomerAPI, setPasswordAPI, getCustomerDetailsAPI, getShippingAddressAPI, getBillingAddressAPI } from "../../lib/api-dynamic/methods/user";

import {
  MOBILENO_CHANGED,
  PASSWORD_CHANGED,
  CONFIRM_PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER,
  SIGNUP_USER,
  SIGNUP_USER_FAIL,
  SIGNUP_USER_SUCCESS,
  VERIFY_OTP,
  VERIFY_OTP_FAIL,
  VERIFY_OTP_SUCCESS,
  CREATE_PASSWORD,
  CREATE_PASSWORD_FAIL,
  CREATE_PASSWORD_SUCCESS,
  OTP_CHANGED,
  RESET_STATE,
  RESEND_OTP,
  RESEND_OTP_FAIL,
  RESEND_OTP_SUCCESS,
  TEST,
  ADD_ADDRESS,
  ADD_ADDRESS_FAIL,
  ADD_ADDRESS_SUCCESS,
  GET_ADDRESS,
  GET_ADDRESS_FAIL,
  GET_ADDRESS_SUCCESS
} from "./actionTypes"


export const resetState = () => {
  return {
    type: RESET_STATE,
    payload: ""
  };
};

export const otpChanged = text => {
  return {
    type: OTP_CHANGED,
    payload: text
  };
};

export const mobilenoChanged = text => {
  return {
    type: MOBILENO_CHANGED,
    payload: text
  };
};

export const passwordChanged = text => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
};

export const confirmpasswordChanged = text => {
  return {
    type: CONFIRM_PASSWORD_CHANGED,
    payload: text
  };
};


export const testAction = ({ mobileno }) => {



  return dispatch => {
    dispatch({ type: TEST });
  };
};


export const loginUser = ({ mobileno, password }) => {



  return dispatch => {
    dispatch({ type: LOGIN_USER });
    loginUserAPI(mobileno, password)
      .then(user => {

        loginUserResponse(dispatch, user);
      })
      .catch(error => {

        loginUserFail(
          dispatch,
          "Authentication Failed. Something went wrong. Please try again."
        );
      }
      );
  };
};

const loginUserFail = (dispatch, error) => {
  dispatch({
    type: LOGIN_USER_FAIL,
    payload: error
  });
};

const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  });

  Actions.push("drawer",{mainlogin:true});
};

const loginUserResponse = (dispatch, user) => {
  if (user.status === 1) {



    AsyncStorage.setItem("usertoken", user.data[0].token);
    AsyncStorage.setItem("user", JSON.stringify(user))
      .then(res => {
        loginUserSuccess(dispatch, user);
      });


  } else {
    loginUserFail(dispatch, user.message);
  }
};


///////////

export const createPasswordforUser = ({ password, confirmpassword, customerid, route }) => {


  return dispatch => {
    dispatch({ type: CREATE_PASSWORD });

    AsyncStorage.getItem('usertoken').then(token => {
      if (token != null) {



        if (password === confirmpassword) {
          if (route === "forgot_password") {
            resetPasswordAPI(customerid, password, token)
              .then(user => {

                if (user.status === 1) {
                  createPasswordforUserResponse(dispatch, customerid, token);
                }
                else {
                  createPasswordforUserFail(
                    dispatch,
                    user.message
                  );
                }
              })
              .catch(error => {

                createPasswordforUserFail(
                  dispatch,
                  "Something went wrong. Please try again."
                );
              }
              );
          }
          else {

            setPasswordAPI(customerid, password, token)
              .then(user => {
                if (user.status === 1) {
                  createPasswordforUserResponse(dispatch, customerid, token);
                }
                else {
                  createPasswordforUserFail(
                    dispatch,
                    user.message
                  );
                }
              })
              .catch(error => {

                createPasswordforUserFail(
                  dispatch,
                  "Something went wrong. Please try again."
                );
              }
              );
          }
        }
        else {
          createPasswordforUserFail(
            dispatch,
            "Passwords do not match. Please try again."
          );
        }
      }
      else {
        createPasswordforUserFail(
          dispatch,
          "Something went wrong. Please try again."
        );
      }
    });
  };
};

const createPasswordforUserFail = (dispatch, error) => {
  dispatch({
    type: CREATE_PASSWORD_FAIL,
    payload: error
  });
};

const createPasswordforUserSuccess = (dispatch, user) => {
  dispatch({
    type: CREATE_PASSWORD_SUCCESS,
    payload: user
  });

  Actions.push("drawer");

  //this.resetState();
};

const createPasswordforUserResponse = (dispatch, customerid, token) => {


  getCustomerDetailsAPI(customerid, token)
    .then(user => {
      if (user.status === 1) {
        if (user.data.length > 0) {
          user.token = token;
        }
        createPasswordforUserSuccess(dispatch, user);

        AsyncStorage.setItem("usertoken", token);
        AsyncStorage.setItem("user", JSON.stringify(user));
      }
      else {
        createPasswordforUserFail(
          dispatch,
          user.message
        );
      }
    })
    .catch(error => {

      createPasswordforUserFail(
        dispatch,
        "Something went wrong. Please try again."
      );
    })


};



//////////////

export const signUpUser = ({ mobileno, route }) => {


  var mobileExistsCheck = false;

  if (route === "forgot_password") {
    mobileExistsCheck = true;
  }
  else {
    mobileExistsCheck = false;
  }

  return dispatch => {
    dispatch({ type: SIGNUP_USER });
    checkMobileAPI(mobileno)
      .then(res => {

        if (res !== null && res !== undefined) {

          if (res.status === mobileExistsCheck ? 1 : 0) {

            signUpUserFail(
              dispatch,
              res.message
            );
          }
          else if (res.status === mobileExistsCheck ? 0 : 1) {


            if (route === "forgot_password") {

              forgotPasswordAPI(mobileno)
                .then(customer => {

                  if (customer !== null && customer !== undefined) {
                    signUpUserResponse(dispatch, customer, mobileno, route);
                  }
                  else {
                    signUpUserFail(
                      dispatch,
                      "Something went wrong! Please try again"
                    );
                  }

                })
                .catch(checksignup => {

                  signUpUserFail(
                    dispatch,
                    "Something went wrong! Please try again"
                  );
                }
                );
            }
            else {
              registerCustomerAPI(mobileno)
                .then(customer => {

                  if (customer !== null && customer !== undefined) {
                    signUpUserResponse(dispatch, customer, mobileno, route);
                  }
                  else {
                    signUpUserFail(
                      dispatch,
                      "Something went wrong! Please try again"
                    );
                  }

                })
                .catch(checksignup => {

                  signUpUserFail(
                    dispatch,
                    "Something went wrong! Please try again"
                  );
                }
                );
            }
          }
          else {

            signUpUserFail(
              dispatch,
              "Something went wrong! Please try again"
            );
          }
        }

      })
      .catch(checkmobileerror => {

        signUpUserFail(
          dispatch,
          "Something went wrong! Please try again"
        );
      }
      );
  };
};

const signUpUserFail = (dispatch, error) => {
  dispatch({
    type: SIGNUP_USER_FAIL,
    payload: error
  });
};

const signUpUserSuccess = (dispatch, customer, mobileno, route) => {
  dispatch({
    type: SIGNUP_USER_SUCCESS,
    payload: customer
  });

  Actions.otppage({ mobileno: mobileno, customerid: customer, countrycode: "+91", route: route });
};

const signUpUserResponse = (dispatch, customer, mobileno, route) => {
  if (customer.status === 1) {
    signUpUserSuccess(dispatch, customer.data[0].customer_id, mobileno, route);



  } else {
    signUpUserFail(dispatch, customer.message);
  }
};

export const verifyUserOTP = ({ mobileno, customerid, otp, route }) => {



  return dispatch => {
    dispatch({ type: VERIFY_OTP });

    if (route === "forgot_password") {
      forgotPasswordVerifyOTPAPI(customerid, mobileno, otp)
        .then(res => {

          verifyOTPResponse(dispatch, res, route);
        })
        .catch(error => {

          verifyOTPFail(
            dispatch,
            error
          );
        }
        );
    }
    else {
      verifyOTPAPI(customerid, mobileno, otp)
        .then(res => {

          verifyOTPResponse(dispatch, res, route);
        })
        .catch(error => {

          verifyOTPFail(
            dispatch,
            error
          );
        }
        );
    }
  };
};

const verifyOTPFail = (dispatch, error) => {
  dispatch({
    type: VERIFY_OTP_FAIL,
    payload: error
  });
};

const verifyOTPSuccess = (dispatch, res, route) => {

  dispatch({
    type: VERIFY_OTP_SUCCESS,
    payload: res
  });
  Actions.createpassword({ customerid: res.data[0].customer_id, route: route });
};

const verifyOTPResponse = (dispatch, res, route) => {

  if (res.status === 1) {
    verifyOTPSuccess(dispatch, res, route);
    AsyncStorage.setItem("usertoken", res.data[0].token);
  } else {
    verifyOTPFail(dispatch, res.message);
  }
};

//////////////

export const resendOTP = ({ mobileno }) => {



  return dispatch => {
    dispatch({ type: RESEND_OTP });
    resendOTPAPI(mobileno)
      .then(res => {

        resendOTPResponse(dispatch, res);
      })
      .catch(error => {

        resendOTPFail(
          dispatch,
          "Something went wrong. Please try again."
        );
      }
      );
  };
};

const resendOTPFail = (dispatch, error) => {
  dispatch({
    type: RESEND_OTP_FAIL,
    payload: error
  });
};

const resendOTPSuccess = (dispatch, res) => {
  dispatch({
    type: RESEND_OTP_SUCCESS,
    payload: res
  });


};

const resendOTPResponse = (dispatch, res) => {
  if (res.status === 1) {

    resendOTPSuccess(dispatch, res);
  } else {
    resendOTPFail(dispatch, res.message);
  }
};



//////////////


export const getAddress = () => {

  return dispatch => {
    dispatch({ type: GET_ADDRESS });

    let address = {
      shipping_addresses: [],
      billing_addresses: []
    }

    var customerid = 0;
    var token = '';
    AsyncStorage.getItem('user').then(usertemp => {
      var user = JSON.parse(usertemp);
      customerid = user !== null && user !== undefined && user.data.length > 0 ? user.data[0].customer_id : 0;
      token = user !== null && user !== undefined && user.data.length > 0 ? user.data[0].token : '';
      getShippingAddressAPI(customerid, token)
        .then(shippingaddresses => {

          if (shippingaddresses.status === 1) {
            address.shipping_addresses = shippingaddresses.data;
            getBillingAddressAPI(customerid, token)
              .then(billingaddresses => {

                if (billingaddresses.status === 1) {
                  address.billing_addresses = billingaddresses.data;
                  dispatch({ type: GET_ADDRESS_SUCCESS, payload: address });
                }
              })
              .catch(error => {

                dispatch({ type: GET_ADDRESS_FAIL, payload: error });

              }
              );
          }

        })
        .catch(error => {

          dispatch({ type: GET_ADDRESS_FAIL, payload: error });

        }
        );
    });

  };
};

