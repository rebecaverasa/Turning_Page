import React from 'react';
import { View } from 'react-native';
import MyHeader from './header/MyHeader';
import BookModal from './books/BookModal';
import BookList from './books/BooksList';


const BooksScreen = ({ navigation }) => {
    return (
        <View>
            <MyHeader navigation={navigation} />
            <BookList />
            <BookModal />
        </View>
    )

};

export default BooksScreen;
