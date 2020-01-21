import React from 'react';
import { StyleSheet, View, Dimensions, Text, BackHandler} from 'react-native';
import {
    Container,
    Form,
    Item,
    Label,
    Button,
    Input,
    Header,
    Title,
    Icon,
    Left,
    Spinner,
    Content
} from 'native-base';
import { Actions } from "react-native-router-flux";
import { connect } from 'react-redux';
import { mobilenoChanged, passwordChanged, loginUser, resetState } from "../../store/actions";
import styles from '../styles';

import Constants from '../../constants/Constants';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasMobileInputError: false,
            hasPasswordInputError: false,
            securePassword: true,
            inputError: ""
        };
          
    }

    componentWillMount() {

        BackHandler.addEventListener("hardwareBackPress", this.handleBackPress);
      }
    
      componentWillUnmount() {
        BackHandler.removeEventListener("hardwareBackPress", this.handleBackPress);
      }
    
      handleBackPress = () => {
        this.props.navigation.goBack();
        this.props.resetState();
        return true;
      };

    
    onMobileNoChange(text) {
        this.props.mobilenoChanged(text);
    }

    onPasswordChange(text) {
        this.props.passwordChanged(text);
    }

    onButtonPress() {

        const { mobileno, password } = this.props;
        this.setState({ hasMobileInputError: false });
        this.setState({ hasPasswordInputError: false });
        this.setState({ inputError: "" });

        if (this.validateInput()) {
            this.props.loginUser({ mobileno, password });
        }

    }

    validateInput() {
        const { mobileno, password } = this.props;
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

        if (password === "") {
            flag = false;
            this.setState({ hasPasswordInputError: true });
            setTimeout(() => {
              
            if(this.state.inputError === "")
            {
                this.setState({ inputError: "Please enter password" });
            }
        },200);
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
                            }
                            >
                            <Icon name="ios-arrow-round-back" type="Ionicons" style={{ fontSize: 40, color: '#595959' }} />
                        </Button>
                        
                    </Left>
                    <Text style={styles.headerTitle}>Sign In</Text>
                </Header>
                <Content style={styles.contentContainer}>
                    <Form style={styles.formContainer}>
                        <Item floatingLabel error={this.state.hasMobileInputError}>
                            <Label style={styles.label}>
                                Mobile No.
                            </Label>
                            <Input style={styles.formInput}
                                autoCapitalize="none"
                                value={this.props.mobileno}
                                keyboardType="phone-pad"
                                maxLength={10}
                                onChangeText={this.onMobileNoChange.bind(this)}
                            />

                        </Item>
                        <Item floatingLabel error={this.state.hasPasswordInputError}>
                            <Label style={styles.label}>
                                Password
                            </Label>
                            <Input style={styles.formInput}
                                secureTextEntry={this.state.securePassword}
                                value={this.props.password}
                                onChangeText={this.onPasswordChange.bind(this)}
                            />
                            <Icon style={styles.menuItemIcon} active type="FontAwesome5" name={this.state.securePassword ? "eye-slash" : "eye"} onPress={() => this.setState({ securePassword: !this.state.securePassword })} />
                        </Item>
                        <Button transparent style={styles.transparentButton}><Text style={styles.transparentButtonText} onPress={() => { 
                            Actions.signup({ route: "forgot_password" });
                            this.props.resetState();
                            }}>Forgot?</Text></Button>
                        <View  style={styles.actionPanel}>
                            <Button full
                                style={styles.submitButton}
                                onPress={this.onButtonPress.bind(this)}
                                loading={this.props.loading}
                            >
                                {this.props.loading ? <Spinner color='white' /> : <Text style={styles.submitButtonText}>Sign In</Text>}
                            </Button>
                            <Text style={styles.errorText}>{this.state.inputError !== "" ?this.state.inputError:this.props.error}</Text>
                            <Button transparent style={styles.bigTransparentButton} onPress={() =>{ 
                                Actions.jump("signup");
                                this.props.resetState(); 
                            }}>
                                <Text style={styles.bigTransparentButtonText} >New to Patanjali? Sign Up</Text>
                            </Button>
                               
                        </View>

                    </Form>
                   
        
                </Content>
            </Container>
        );
    }

}
const mapStateToProps = ({ auth }) => {
    const { mobileno, password, error, loading } = auth;
    return { mobileno, password, error, loading };
};

export default connect(mapStateToProps, { mobilenoChanged, passwordChanged, loginUser, resetState })(Login);



