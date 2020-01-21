import DynamicApi from '../'
import Api from '../../api'
import { LOGIN, CHECKMOBILE, SIGNUP, VERIFYOTP, RESENDOTP, RESETPASSWORD, FORGOTPASSWORD, FPVERIFYOTP, SETPASSWORD, GETCUSTOMERDETAIL, GETSHIPPINGADDRESS, GETBILLINGADDRESS, ADDADDRESS, UPDATESHIPPINGADDRESS, UPDATEBILLINGADDRESS, DELETEADDRESS, MAKEADDRESSDEFAULT } from "../ApiConstants";


export function loginUserAPI(mobileno, password) {
  var url = LOGIN;


  var data = {
    "mobile": mobileno,
    "password": password
  }

  return DynamicApi(
    url,
    data,
    "post"
  );
}

export function checkMobileAPI(mobileno) {
  var url = CHECKMOBILE;


  var data = {
    "mobile": mobileno
  }
  return DynamicApi(
    url,
    data,
    "post"
  );
}

export function registerCustomerAPI(mobileno) {
  var url = SIGNUP;

  var data = {
    "mobile": mobileno
  }
  return DynamicApi(
    url,
    data,
    "post"
  );
}

export function verifyOTPAPI(customerid, mobileno, otp) {
  var url = VERIFYOTP;

  var data = {
    "customer_id": customerid,
    "mobile": mobileno,
    "otp": otp
  }

  return DynamicApi(
    url,
    data,
    "post"
  );
}

export function getCustomerDetailsAPI(customerid, token) {
  var url = GETCUSTOMERDETAIL;

  var data = {
    "customer_id": customerid,
    "token": token
  }

  return DynamicApi(
    url,
    data,
    "post"
  );
}

export function forgotPasswordVerifyOTPAPI(customerid, mobileno, otp) {
  var url = FPVERIFYOTP;
  var data = {
    "customer_id": customerid,
    "mobile": mobileno,
    "otp": otp
  }

  return DynamicApi(
    url,
    data,
    "post"
  );
}


export function resendOTPAPI(mobileno) {

  var url = RESENDOTP;

  var data = {
    "mobile": mobileno
  }
  return DynamicApi(
    url,
    data,
    "post"
  );
}

export function setPasswordAPI(customerid, password, token) {
  var url = SETPASSWORD;

  var data = {
    "customer_id": customerid,
    "password": password,
    "token": token
  }
  return DynamicApi(
    url,
    data,
    "post"
  );
}

export function resetPasswordAPI(customerid, password, token) {
  var url = RESETPASSWORD;

  var data = {
    "customer_id": customerid,
    "password": password,
    "token": token
  }
  return DynamicApi(
    url,
    data,
    "post"
  );
}

export function forgotPasswordAPI(mobileno) {

  var url = FORGOTPASSWORD;

  var data = {
    "mobile": mobileno
  }
  return DynamicApi(
    url,
    data,
    "post"
  );
}

export function getShippingAddressAPI(customerid, token) {

  var url = GETSHIPPINGADDRESS;

  var data = {
    "customer_id": customerid,
    "token": token
  }
  return DynamicApi(
    url,
    data,
    "post"
  );
}

export function getBillingAddressAPI(customerid, token) {

  var url = GETBILLINGADDRESS;

  var data = {
    "customer_id": customerid,
    "token": token
  }
  return DynamicApi(
    url,
    data,
    "post"
  );
}

export function addAddressAPI(customerid, token, address) {

  var url = ADDADDRESS;

  var data = {
    "customer_id": customerid,
    "token": token,
    "name": address.name,
    "address": address.address,
    "landmark": address.landmark,
    "city_id": address.cityid,
    "state_id": address.stateid,
    "pincode": address.pincode,
    "mobile": address.mobile,
    "alternat_mobile_no": address.alternatemobile,
    "address_type": address.addresstype,
    "isdefault": address.isdefault
  }
  
  return DynamicApi(
    url,
    data,
    "post"
  );
}

export function updateShippingAddressAPI(customerid, token, address) {

  var url = UPDATESHIPPINGADDRESS;

  var data = {
    "customer_id": customerid,
    "token": token,
    "name": address.name,
    "address": address.address,
    "landmark": address.landmark,
    "city_id": address.cityid,
    "state_id": address.stateid,
    "pincode": address.pincode,
    "mobile": address.mobile,
    "alternat_mobile_no": address.alternatemobile,
    "address_type": address.addresstype,
    "Isdefault": address.isdefault,
    "address_id": address.addressid
  }
  
  return DynamicApi(
    url,
    data,
    "post"
  );
}


export function updateBillingAddressAPI(customerid, token, address) {

  var url = UPDATEBILLINGADDRESS;

  var data = {
    "customer_id": customerid,
    "token": token,
    "name": address.name,
    "address": address.address,
    "landmark": address.landmark,
    "city_id": address.cityid,
    "state_id": address.stateid,
    "pincode": address.pincode,
    "mobile": address.mobile,
    "alternat_mobile_no": address.alternatemobile,
    "address_type": address.addresstype,
    "address_id": address.addressid
  }
  
  
  return DynamicApi(
    url,
    data,
    "post"
  );
}

export function deleteAddressAPI(customerid, token, addressid) {

  var url = DELETEADDRESS;

  var data = {
    "customer_id": customerid,
    "token": token,
    "address_id": addressid
  }
  console.log("DELETEADDRESS: ", data);
  
  return DynamicApi(
    url,
    data,
    "post"
  );
}

export function makeDefaultAddressAPI(customerid, token, addressid) {

  var url = MAKEADDRESSDEFAULT;

  var data = {
    "customer_id": customerid,
    "token": token,
    "address_id": addressid
  }
  console.log("MAKEADDRESSDEFAULT: ", data);
  
  return DynamicApi(
    url,
    data,
    "post"
  );
}