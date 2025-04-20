import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#2B2A2C',
        flex: 1,
    },
    header: {
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#444',
        marginBottom: 10,
    },
    title: {
        fontSize: 20,
        color: '#F4D07A',
        fontFamily: 'YesevaOne',
    },
    logoutButton: {
        marginTop: 'auto',
        padding: 20,
        borderTopWidth: 1,
        borderTopColor: '#444',
    },
    logoutText: {
        color: '#F9F7F3',
        fontSize: 16,
    },
    item: {
        fontSize: 20,
        color: '#F4D07A',
        fontFamily: 'YesevaOne',
    }
});

const CustomSidebar = (props) => {
    return (
        <DrawerContentScrollView {...props} contentContainerStyle={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Turning Page</Text>
            </View>

            <DrawerItemList {...props} style={styles.item} />

            <TouchableOpacity style={styles.logoutButton} onPress={() => console.log('Logout')}>
                <Text style={styles.logoutText}>Sair</Text>
            </TouchableOpacity>
        </DrawerContentScrollView>
    );
};

export default CustomSidebar;
