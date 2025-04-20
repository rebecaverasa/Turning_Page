import React from 'react';
import { Header } from 'react-native-elements';
import IconAddBook from './IconAddBook';
import IconMenu from './IconMenu';
const MyHeader = ({ navigation }) => {
    return (
        <Header
            backgroundColor="#2B2A2C"
            barStyle="default"
            placement="center"

            leftComponent={< IconMenu navigation={navigation} />}
            leftContainerStyle={{
                justifyContent: 'flex-start',
                alignItems: 'center',
            }}

            centerComponent={{ text: "Turning Page", style: { color: '#fff', fontSize: 18, fontFamily: 'YesevaOne' } }}
            centerContainerStyle={{
                justifyContent: 'center',
            }}

            rightComponent={< IconAddBook />}
            rightContainerStyle={{
                justifyContent: 'flex-end',
                alignItems: 'center',
            }}
        />
    );
};

export default MyHeader;