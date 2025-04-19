import React from 'react';
import { Header } from '@rneui/themed';
import UserAvatar from './UserAvatar';
import AddBook from './AddBook';

const MyHeader = () => {
    return (
        <Header
            backgroundColor="#2B2A2C"
            barStyle="default"
            centerContainerStyle={{}}
            centerComponent={{
                text: "Turning Page",
                style: { color: "#fff", fontSize: 16 },
            }}
            leftComponent={{ icon: "menu", color: "#F4D07A" }
            }
            leftContainerStyle={{}}
            linearGradientProps={{}}
            placement="center"
            rightComponent={< UserAvatar />}
            rightContainerStyle={{}}
            statusBarProps={{}}
        />
    );
};

export default MyHeader;

