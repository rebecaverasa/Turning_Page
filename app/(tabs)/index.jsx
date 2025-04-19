import React from 'react';
import MyHeader from '../../components/MyHeader';
import BooksInput from '../../components/BooksInput';
import BooksList from '../../components/BooksList';
import { View } from 'react-native';
import BookModal from '../../components/BookModal';

const App = () => {
  return (
    <View>
      <MyHeader />
      <BooksInput />
      <BooksList />
      <BookModal />
    </View>
  )

};

export default App;
