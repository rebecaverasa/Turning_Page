import React from 'react';
import { Header } from '@rneui/themed';
import UserAvatar from './UserAvatar';
import AddBook from './AddBook';
import { Image, TouchableOpacity } from 'react-native';
import addbook from "../assets/images/addbook.png";
const MyHeader = () => {
    return (
        <Header
            backgroundColor="#2B2A2C"
            barStyle="default"
            centerContainerStyle={{}}
            centerComponent={() => (
                <TouchableOpacity onPress={() => console.log('Logo clicada')}>
                    <Image
                        source={addbook}
                        style={{ width: 120, height: 40, resizeMode: 'contain' }}
                    />
                </TouchableOpacity>
            )}
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

