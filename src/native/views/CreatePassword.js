import React from 'react';
import { StyleSheet, View, Dimensions,
    Text, BackHandler } from 'react-native';
import {
    Container,
    Form,
    Item,
    Label,
    Button,
    Input,
    Header,
    Content,
    Icon,
    Left,
    Spinner
} from 'native-base';
import { Actions } from "react-native-router-flux";
import { connect } from 'react-redux';
import { createPasswordforUser, passwordChanged, confirmpasswordChanged, resetState } from "../../store/actions";

import styles from '../styles';


class CreatePassword extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          
            customerid: this.props.customerid,
            hasCPasswordInputError: false,
            hasPasswordInputError: false,
            securePassword: true,
            secureCPassword: true,
            title: this.props.route === "forgot_password"?"Reset Password":"Create Password",
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
          this.setState({ title: "Reset Password" });
        }
      }

    onPasswordChange(text) {
        this.props.passwordChanged(text);
    }

    onConfirmPasswordChange(text) {
        this.props.confirmpasswordChanged(text);
    }

    onButtonPress() {

        const { confirmpassword, password, route } = this.props;
        const { customerid } = this.state;
        this.setState({ hasCPasswordInputError: false });
        this.setState({ hasPasswordInputError: false });
        this.setState({ inputError: "" });

        if (this.validateInput()) {

            this.props.createPasswordforUser({ password, confirmpassword, customerid, route });
        }

    }

    validateInput() {
        const { confirmpassword, password } = this.props;
        var flag = true;
        if (confirmpassword === "") {
            flag = false;
            this.setState({ hasCPasswordInputError: true });
            this.setState({ inputError: "Please enter password" });
        }

        if (password === "") {
            flag = false;
            this.setState({ hasPasswordInputError: true });
            this.setState({ inputError: "Please enter password" });
        }
        else {
            if(password.length < 6)
            {
                flag = false;
                this.setState({ hasPasswordInputError: true });
                this.setState({ inputError: "Password should be atleast 6 characters" });
            }
        }
        return flag;
    }

    render() {
        return (
            <Container style={styles.container}>
                <Header noShadow style={styles.headerStyle}>
                    <Left style={styles.headerLeftWithTitle}>
                        <Button transparent onPress={() => 
                            {
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

                    <Form style={styles.formContainer}>

                        <Item floatingLabel error={this.state.hasPasswordInputError}>
                            <Label style={styles.label}>
                                Password
                            </Label>
                            <Input style={styles.formInput}
                                secureTextEntry={this.state.securePassword}
                                value={this.props.password}
                                onChangeText={this.onPasswordChange.bind(this)}                                
                            />
                            <Icon active type="FontAwesome5" style={styles.menuItemIcon} name={this.state.securePassword?"eye-slash":"eye"} onPress={() =>  this.setState({securePassword: !this.state.securePassword})  } />
                        </Item>
                        <Item floatingLabel error={this.state.hasCPasswordInputError}>
                            <Label style={styles.label}>
                                Confirm Password
                            </Label>
                            <Input style={styles.formInput}
                                secureTextEntry={this.state.secureCPassword}
                                value={this.props.confirmpassword}
                                onChangeText={this.onConfirmPasswordChange.bind(this)}                               
                            />
                             <Icon active type="FontAwesome5" style={styles.menuItemIcon} name={this.state.secureCPassword?"eye-slash":"eye"} onPress={() =>  this.setState({secureCPassword: !this.state.secureCPassword})  } />
                        </Item>

                        <View padder style={styles.actionPanel}>
                            <Button full
                                style={styles.submitButton}
                                onPress={this.onButtonPress.bind(this)}
                                loading={this.props.loading}
                            >
                                {this.props.loading ? <Spinner color='white' /> : <Text style={styles.submitButtonText}>Submit</Text>}
                            </Button>
                            <Text style={styles.errorText}>{this.state.inputError !== "" ?this.state.inputError:this.props.error}</Text>
                            {/* <Button transparent style={styles.bigTransparentButton} onPress={() => Actions.signup()}><Text style={styles.bigTransparentButtonText} >New to Patanjali? Sign Up</Text></Button> */}
                        </View>


                    </Form>
                </Content>
            </Container>
        );
    }

}
const mapStateToProps = ({ auth }) => {
    const { error, loading, password, confirmpassword } = auth;
    return { error, loading, password, confirmpassword };
};

export default connect(mapStateToProps, { createPasswordforUser, passwordChanged, confirmpasswordChanged, resetState })(CreatePassword);