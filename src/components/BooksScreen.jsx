import React from 'react';
import { View } from 'react-native';
import MyHeader from './header/MyHeader';
import BookModal from './books/BookModal';
import BookList from './books/BooksList';
import PageTitle from './header/PageTitle';


const BooksScreen = ({ navigation, title }) => {
    return (
        <View>
            <MyHeader navigation={navigation} />
            <PageTitle title={title} />
            <BookList />
            <BookModal />
        </View>
    )
};

export default BooksScreen;
