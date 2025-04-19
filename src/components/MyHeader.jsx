import React from 'react';
import { Header } from 'react-native-elements';
import IconAddBook from './IconAddBook';
import IconMenu from './IconMenu';
import IconProfile from './IconProfile';
const MyHeader = () => {
    return (
        <Header
            backgroundColor="#2B2A2C"
            barStyle="default"
            centerComponent={<IconAddBook />}
            leftComponent={<IconMenu />}
            placement="center"
            rightComponent={<IconProfile />}
        />
    );
};

export default MyHeader;