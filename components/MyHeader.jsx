import React from 'react';
import { Header } from '@rneui/themed';
import UserAvatar from './UserAvatar';
import IconAddBook from './IconAddBook';
import IconProfile from './IconProfile';
import IconMenu from './IconMenu';
const MyHeader = () => {
    return (
        <Header
            backgroundColor="#2B2A2C"
            barStyle="default"
            centerContainerStyle={{}}
            centerComponent={<IconAddBook />}
            leftComponent={<IconMenu />}
            linearGradientProps={{}}
            placement="center"
            rightComponent={<IconProfile />}
            rightContainerStyle={{}}
            statusBarProps={{}}
        />
    );
};

export default MyHeader;