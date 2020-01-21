import React from 'react';
import { StyleSheet, View, Text, BackHandler } from 'react-native';
import { Container, Form, Item, Label, Button, Input, Header, Title, Icon, Left, Spinner, Content } from 'native-base';
import { Actions } from "react-native-router-flux";
import styles from '../styles';
import { connect } from 'react-redux';
import { mobilenoChanged, signUpUser, resetState } from "../../store/actions";


class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasMobileInputError: false,
      title: "Sign Up",
      submitButtonText: "Join Patanjali",
      inputError: ""
    };

   
  }


  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.handleBackPress);
  }

  handleBackPress = () => {
    this.props.navigation.goBack();
    this.props.resetState();
    return true;
  };

  componentWillMount(){
    BackHandler.addEventListener("hardwareBackPress", this.handleBackPress);

    if (this.props.route != null && this.props.route === "forgot_password") {
      this.setState({ title: "Forgot Password" });
      this.setState({ submitButtonText: "Submit" });
    }
  }

  onMobileNoChange(text) {
    this.props.mobilenoChanged(text);
  }

  onButtonPress() {

    const { mobileno,route } = this.props;
    this.setState({ hasMobileInputError: false });
    this.setState({ inputError: "" });

    if (this.validateInput()) {
      this.props.signUpUser({ mobileno,route });
    }

  }

  validateInput() {
    const { mobileno } = this.props;
    var flag = true;
    if (mobileno === "") {
      flag = false;
      this.setState({ hasMobileInputError: true });
      this.setState({ inputError: "Please enter mobile number" });
    }
    else {
      if(mobileno.length < 10 )
      {
          flag = false;
          this.setState({ hasMobileInputError: true });
          this.setState({ inputError: "Please enter valid mobile number" });
      }
      else{
      const reg = /^\d{10}$/;
      //^[0]?[789]\d{9}$/;
      if (reg.test(mobileno) === false) {
          flag = false;
          this.setState({ hasMobileInputError: true });
          this.setState({ inputError: "Please enter valid mobile number" });
      }
    }
    }
    return flag;
  }

  render() {
    return (
      <Container style={styles.container}>
        <Header noShadow style={styles.headerStyle}>
          <Left style={styles.headerLeftWithTitle}>
            <Button transparent onPress={() => {
              this.props.navigation.goBack();
              this.props.resetState();
            }
              }>
              <Icon name="ios-arrow-round-back" type="Ionicons" style={styles.navigationMenuIcon} />
            </Button>
           
          </Left>
          <Text style={styles.headerTitle}>{this.state.title}</Text>
        </Header>

        <Content style={styles.contentContainer}>
          <Form style={styles.signupformContainer}>

            <View style={{ flexDirection: "row" }}>
              <View style={{ width: '27%' }}>
                <Item floatingLabel>

                  <Input style={styles.formInput}
                    autoCapitalize="none"
                    value="IN +91 |"
                    keyboardType="phone-pad"
                    disabled
                  />
                </Item>
              </View>
              <View style={{ flex: 1 }}>
                <Item floatingLabel error={this.state.hasMobileInputError}>
                  <Label style={styles.label}>
                    Mobile Number
                 </Label>

                  <Input style={styles.formInput}
                    maxLength={10}
                    value={this.props.mobileno}
                    keyboardType="phone-pad"
                    onChangeText={this.onMobileNoChange.bind(this)}
                  />
                </Item>
              </View>
            </View>




            <View style={styles.signupactionPanel}>
              <Button full style={styles.submitButton}
                onPress={this.onButtonPress.bind(this)}
                loading={this.props.loading} >
                {this.props.loading ? <Spinner color='white' /> : <Text style={styles.submitButtonText}>{this.state.submitButtonText}</Text>}
              </Button>
              <Text style={styles.errorText}>{this.state.inputError !== "" ?this.state.inputError:this.props.error}</Text>
             { this.props.route != null && this.props.route === "forgot_password"? 
               <View></View>
               :
               <Button transparent style={styles.bigTransparentButton} onPress={() => {  
                 Actions.jump("login");
                 this.props.resetState() }}>
                <Text style={styles.bigTransparentButtonText}>
                  Existing User? Sign In
                  </Text>
               </Button>
             }
            </View>


          </Form>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  const { mobileno, customerid, error, loading } = auth;
  return { mobileno, customerid, error, loading };
};

export default connect(mapStateToProps, { mobilenoChanged, signUpUser, resetState })(SignUp);