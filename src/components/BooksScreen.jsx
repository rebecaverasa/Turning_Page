import React from 'react';
import { View } from 'react-native';
import MyHeader from './header/MyHeader';
import BookModal from './books/BookModal';
import BookList from './books/BooksList';


const BooksScreen = () => {
    return (
        <View>
            <MyHeader />
            <BookList />
            <BookModal />
        </View>
    )

};

export default BooksScreen;
