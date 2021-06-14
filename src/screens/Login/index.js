import React from 'react';
import { View, Text, TextInput } from 'react-native';
import Container from '../../components/common/Container/index';
import Input from '../../components/common/Input/index';
import CustomButton from '../../components/common/CustomButton/index';

const Login = () => {
    const [value, onChangeText] = React.useState('');
  
    return (
    <Container style={{marginTop: 50}}>
        <Input
         label="Username"
         onChangeText={(text) => onChangeText(text)}
         value={value}
        //  icon={<Text>HIDE</Text>}
         iconPosition="right"
         error={'This field is required'}
        />

        <Input
         label="Password"
         onChangeText={(text) => onChangeText(text)}
         value={value}
         icon={<Text>HIDE</Text>}
         iconPosition="right"
        />
        <CustomButton secondary title="Submit" loading={true}  disabled={true}></CustomButton>
        <CustomButton secondary loading={true} title="ClickMe" ></CustomButton>
        <CustomButton primary title="Submit" loading={true}  disabled={true}></CustomButton>
        <CustomButton danger title="Submit" ></CustomButton>

    </Container>
    );
}

export default Login;