import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { DrawerContentScrollView } from '@react-navigation/drawer';

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
    itemContainer: {
        paddingVertical: 12,
        paddingHorizontal: 20,
    },
    itemFocused: {
        backgroundColor: '#A9A1A7',
        borderRadius: 50,
    },
    itemText: {
        fontSize: 15,
        color: '#F9F7F3',
        fontFamily: 'Raleway',
    },
    itemTextFocused: {
        color: '#2B2A2C',
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
});

const CustomSidebar = ({ navigation, state }) => {
    return (
        <DrawerContentScrollView contentContainerStyle={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Turning Page</Text>
            </View>

            {state.routes.map((route, index) => {
                const focused = state.index === index;
                { console.log(state.routes) }

                return (
                    <TouchableOpacity
                        key={route.key}
                        style={[styles.itemContainer, focused && styles.itemFocused]}
                        onPress={() => navigation.navigate(route.name)}
                    >
                        <Text style={[styles.itemText, focused && styles.itemTextFocused]}>
                            {route.name}
                        </Text>
                    </TouchableOpacity>
                );
            })}

            <TouchableOpacity style={styles.logoutButton} onPress={() => console.log('Logout')}>
                <Text style={styles.logoutText}>Log out</Text>
            </TouchableOpacity>
        </DrawerContentScrollView>
    );
};

export default CustomSidebar;
