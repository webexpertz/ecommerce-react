import React, { Component } from "react";
import { Image, AsyncStorage } from "react-native";
import Constants  from "../../constants/Constants"
import { Actions } from "react-native-router-flux";

const splashscreen = require("../../../assets/PatanjaliSplash.png");
//../../../assets/splash.png");


export default class SplashScreen extends Component {

  constructor(props) {
    super(props);
    
    
  }

  componentDidMount(){
    setTimeout(() => {
      AsyncStorage.getItem('user').then(user => {
        if (user !==null && user.token !== null) {
          Actions.replace("drawer");
  
        }
        else{
          Actions.replace("landing");
        }
  
      });
    }, 2000);
    
  }

  render() {
    // eslint-disable-line class-methods-use-this
    
    return (
      <Image
      resizeMode="cover"
        source={splashscreen}
        style={{ flex: 1, width: Constants.ScreenSize.width, height:Constants.ScreenSize.height}}
      />
    );
  }
}
