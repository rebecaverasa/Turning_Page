import React from 'react';
import MyHeader from '../../components/MyHeader';
import BooksInput from '../../components/BooksInput';
import BooksList from '../../components/BooksList';
import { View } from 'react-native';

const App = () => {
  return (
    <View>
      <MyHeader />
      <BooksInput />
      <BooksList />
    </View>
  )

};

export default App;
