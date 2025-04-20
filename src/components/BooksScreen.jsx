import React from 'react';
import { View } from 'react-native';
import MyHeader from './header/MyHeader';
import BookModal from './books/BookModal';
import BookList from './books/BooksList';
import { Text } from 'react-native-elements';


const BooksScreen = ({ navigation, titulo }) => {
    return (
        <View>
            <MyHeader navigation={navigation} />
            <Text>{titulo}</Text>
            <BookList />
            <BookModal />
        </View>
    )

};

export default BooksScreen;
