import React from 'react';
import { Header } from '@rneui/themed';
import UserAvatar from './UserAvatar';

const MyHeader = () => {
    return (
        <Header
            backgroundColor="pink"
            backgroundImageStyle={{}}
            barStyle="default"
            centerComponent={{
                text: "Turning Page",
                style: { color: "#fff", fontSize: 16 },
            }}
            centerContainerStyle={{}}
            leftComponent={{ icon: "menu", color: "#fff" }}
            leftContainerStyle={{}}
            linearGradientProps={{}}
            placement="left"
            rightComponent={<UserAvatar />}
            rightContainerStyle={{}}
            statusBarProps={{}}
        />
    );
};

export default MyHeader;

