import React from 'react';
import { Header } from '@rneui/themed';

const MyHeader = () => {
    return (
        <Header
            backgroundColor="pink"
            backgroundImageStyle={{}}
            barStyle="default"
            centerComponent={{
                text: "Turning Page",
                style: { color: "grey", fontSize: 16 },
            }}
            centerContainerStyle={{}}
            leftComponent={{ icon: "menu", color: "#fff" }}
            leftContainerStyle={{}}
            linearGradientProps={{}}
            placement="left"
            rightComponent={{ icon: "home", color: "#fff" }}
            rightContainerStyle={{}}
            statusBarProps={{}}
        />
    );
};

export default MyHeader;

