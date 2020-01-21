import {
  MOBILENO_CHANGED,
  PASSWORD_CHANGED,
  CONFIRM_PASSWORD_CHANGED,
  OTP_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER,
  SIGNUP_USER,
  SIGNUP_USER_SUCCESS,
  SIGNUP_USER_FAIL,
  VERIFY_OTP,
  VERIFY_OTP_SUCCESS,
  VERIFY_OTP_FAIL,
  RESET_STATE,
  CREATE_PASSWORD,
  CREATE_PASSWORD_FAIL,
  CREATE_PASSWORD_SUCCESS,
  RESEND_OTP,
  RESEND_OTP_FAIL,
  RESEND_OTP_SUCCESS,
  GET_ADDRESS,
  GET_ADDRESS_FAIL,
  GET_ADDRESS_SUCCESS,
  ADD_ADDRESS,
  ADD_ADDRESS_FAIL,
  ADD_ADDRESS_SUCCESS,
  TEST
} from "../actions/actionTypes"

const INITIAL_STATE = {

  mobileno: "",
  password: "",
  confirmpassword: "",
  user: null,
  customerid: "",
  error: "",
  message: "",
  loading: false,
  addresses: null,
  otp: ""
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RESET_STATE:
      return { ...state, ...INITIAL_STATE };
    case OTP_CHANGED:
      return { ...state, otp: action.payload };
    case MOBILENO_CHANGED:
      return { ...state, mobileno: action.payload };
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    case CONFIRM_PASSWORD_CHANGED:
      return { ...state, confirmpassword: action.payload };

    case LOGIN_USER:
      return { ...state, loading: true, error: "" };
    case TEST:
      return { ...state, loading: true, error: "" };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        ...INITIAL_STATE,
        user: action.payload,
        mobileno: "",
        password: "",
        error: "",
        loading: false
      };
    case LOGIN_USER_FAIL:
      return { ...state, error: action.payload, password: "", loading: false };

    case CREATE_PASSWORD:
      return { ...state, loading: true, error: "" };

    case CREATE_PASSWORD_SUCCESS:
      return {
        ...state,
        ...INITIAL_STATE,
        error: "",
        loading: false
      };
    case CREATE_PASSWORD_FAIL:
      return { ...state, error: action.payload, password: "", confirmpassword: "", loading: false };

    case SIGNUP_USER:
      return { ...state, loading: true, error: "" };
    case SIGNUP_USER_SUCCESS:
      return {
        ...state,
        ...INITIAL_STATE,
        customerid: action.payload,
        mobileno: "",
        error: "",
        loading: false
      };
    case SIGNUP_USER_FAIL:
      return { ...state, error: action.payload, mobileno: "", loading: false };


    case VERIFY_OTP:
      return { ...state, loading: true, error: "" };
    case VERIFY_OTP_SUCCESS:
      return {
        ...state,
        ...INITIAL_STATE,
        message: action.payload,
        otp: "",
        error: "",
        loading: false
      };
    case VERIFY_OTP_FAIL:
      return { ...state, error: action.payload, loading: false };

    case RESEND_OTP:
      return { ...state, loading: true, error: "" };

    case RESEND_OTP_SUCCESS:
      return {
        ...state,
        ...INITIAL_STATE,
        user: action.payload,
        mobileno: "",
        error: "",
        loading: false
      };
    case RESEND_OTP_FAIL:
      return { ...state, error: action.payload, loading: false };

    case GET_ADDRESS:
      return { ...state, loading: true, error: "" };

    case GET_ADDRESS_SUCCESS:
      return {
        ...state,
        ...INITIAL_STATE,
        addresses: action.payload,
        error: "",
        loading: false
      };
    case GET_ADDRESS_FAIL:
      return { ...state, error: action.payload, loading: false };

    case ADD_ADDRESS:
      return { ...state, loading: true, error: "" };

    case ADD_ADDRESS_SUCCESS:
      return {
        ...state,
        ...INITIAL_STATE,
        error: "",
        loading: false
      };
    case ADD_ADDRESS_FAIL:
      return { ...state, error: action.payload, loading: false };

    default:
      return state;
  }
};