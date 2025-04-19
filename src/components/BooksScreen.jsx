import React from 'react';
import { View } from 'react-native';
import MyHeader from './MyHeader';
import BookModal from './BookModal';
import BookList from './BooksList';


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
