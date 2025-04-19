import React from 'react';
import { Header } from '@rneui/themed';
import UserAvatar from './UserAvatar';
import IconAddBook from './IconAddBook';
import IconProfile from './IconProfile';
const MyHeader = () => {
    return (
        <Header
            backgroundColor="#2B2A2C"
            barStyle="default"
            centerContainerStyle={{}}
            centerComponent={<IconAddBook />}
            leftComponent={<IconProfile />}
            linearGradientProps={{}}
            placement="center"
            rightComponent={< UserAvatar />}
            rightContainerStyle={{}}
            statusBarProps={{}}
        />
    );
};

export default MyHeader;

