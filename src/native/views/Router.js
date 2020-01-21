import React from "react";
import { View, StyleSheet, AsyncStorage } from "react-native";
import { Scene, Router, Actions, Modal } from "react-native-router-flux";
import { Icon } from 'native-base';
import Login from "./Login";
import LandingPage from "./LandingPage";
import SignUp from "./SignUp";
import Main from "./Main";
import Home from "./Home";
import AllCategories from "./Products/AllCategories";
import CreatePassword from "./CreatePassword";
import OTP from "./OTP";
import Products from "./Products/Products";
import ProductDetail from "./Products/ProductDetail";
import Search from "./Products/Search";
import ReportIssue from "./Products/ReportAnIssue";

import AddReview from "./Products/AddReview";
import AllReviews from "./Products/AllReviews";
import MyCart from "./Cart/MyCart";
import MyCartDetail from "./Cart/MyCartDetail";
import AddAddress from "./Cart/AddAddress";
import MyShippingAddress from "./MyShippingAddress";
import SplashScreen from "./SplashScreen";
import Wishlist from "./Products/Wishlist";
import MyAddresses from "./MyAddresses";
import Payment from "./Payment/Payment";
import About from "./About/About";
import CustomerService from "./CustomerSupport/CustomerService";
import CustomerServiceDetail from "./CustomerSupport/CustomerServiceDetail";
import ReferEarn from "./ReferEarn";
import SamriddhiCard from "./SamriddhiCard";
import CouponCredit from "./CouponCreditPoint/CouponCredit";
import Notification from "./Notification/Notification";
import Filter from "./Filter";




const MenuIcon = () => {
  return (
    <View style={{ flex: 1, flexDirection: "row" }}>
      <View style={styles.leftButtons}>
        <Icon name="menufold" type="AntDesign" color="rgb(4, 6, 10)" size={20} />
      </View>

    </View>
  );
};

const TopRightIcons = () => {
  return (


    <View style={{ flex: 1, flexDirection: "row", marginRight: 15 }}>
      <View style={styles.rightButtons}>

        <Icon
          name="search"
          color="rgb(4, 6, 10)"
          size={20}
        // onPress={() => Actions.searchproduct()}
        />

      </View>

      <View style={styles.rightButtons}>

        <Icon
          name="shopping-cart"
          color="rgb(4, 6, 10)"
          size={20}
          onPress={() => Actions.carts()}
        />
      </View>
    </View>
  )
}

const RouterComponent = () => {

  return (
    <Router backAndroidHandler={this.onBackPress}>
      <Scene hideNavBar>

        <Scene key="auth">
          <Scene key="CouponCredit" component={CouponCredit} hideNavBar />
          <Scene key="splash" component={SplashScreen} hideNavBar />
          <Scene key="landing" component={LandingPage} hideNavBar />
          <Scene key="login" component={Login} title="Sign In" hideNavBar />
          <Scene key="signup" component={SignUp} title="Sign Up" hideNavBar />
          <Scene key="otppage" component={OTP} hideNavBar />
          <Scene key="createpassword" component={CreatePassword} hideNavBar />
        </Scene>
        <Scene
          key="drawer"
          drawer
          contentComponent={Main}
          drawerIcon={MenuIcon}
          drawerWidth={300} gesturesEnabled={false}>
          <Scene key="home" initial title="Home" hideNavBar component={Home} renderRightButton={TopRightIcons} />

        </Scene>

        <Scene key="allcategories" title="All Categories" hideNavBar component={AllCategories} renderRightButton={TopRightIcons} />
        <Scene key="products" hideNavBar component={Products} renderRightButton={TopRightIcons} />
        <Scene key="wishlist" hideNavBar component={Wishlist} renderRightButton={TopRightIcons} />
        <Scene key="productdetail" hideNavBar component={ProductDetail} renderRightButton={TopRightIcons} />
        <Modal key="search" hideNavBar component={Search} renderRightButton={TopRightIcons} />
        <Scene key="reportissue" hideNavBar component={ReportIssue} renderRightButton={TopRightIcons} />
        <Scene key="addreview" hideNavBar component={AddReview} renderRightButton={TopRightIcons} />
        <Scene key="allreviews" hideNavBar component={AllReviews} renderRightButton={TopRightIcons} />

        <Scene key="mycart" hideNavBar component={MyCart} renderRightButton={TopRightIcons} />
        <Scene key="mycartdetail" hideNavBar component={MyCartDetail} renderRightButton={TopRightIcons} />
        <Scene key="addaddress" hideNavBar component={AddAddress} renderRightButton={TopRightIcons} />
        <Scene key="myshippingaddress" hideNavBar component={MyShippingAddress} renderRightButton={TopRightIcons} />
        <Scene key="myaddresses" hideNavBar component={MyAddresses} renderRightButton={TopRightIcons} />
        <Scene key="Payment" hideNavBar component={Payment} renderRightButton={TopRightIcons} />
        <Scene key="About" hideNavBar component={About} renderRightButton={TopRightIcons} />
        <Scene key="CustomerServiceDetail" hideNavBar component={CustomerServiceDetail} renderRightButton={TopRightIcons} />
        <Scene key="CustomerService" component={CustomerService} hideNavBar />
        <Scene key="ReferEarn" component={ReferEarn} hideNavBar />
        <Scene key="SamriddhiCard" component={SamriddhiCard} hideNavBar />
        <Scene key="CouponCredit" component={CouponCredit} hideNavBar />
        <Scene key="Notification" component={Notification} hideNavBar />
      </Scene>
    </Router>
  );
};

onBackPress = () => {
  if (Actions.state.index === 0) {
    return false
  }
  Actions.pop()
  return true
}

export default RouterComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: "Montserrat-Regular",
    justifyContent: "space-between"
  },
  rightButtons:
  {
    marginLeft: 16,
    paddingTop: 10
  },
  leftButtons:
  {
    marginLeft: 10,
    paddingTop: 18
  },
  navBar: { height: 70 },
  navHome: { paddingTop: 10, fontSize: 20, marginRight: 200 }
});
