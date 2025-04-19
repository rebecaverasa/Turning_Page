import React from 'react';
import MyHeader from '../../components/MyHeader';
import BooksList from '../../components/BooksList';
import { View } from 'react-native';
import BookModal from '../../components/BookModal';
import AddBook from '../../components/AddBook';

const App = () => {
  return (
    <View>
      <MyHeader />
      <AddBook />
      <BooksList />
      <BookModal />
    </View>
  )

};

export default App;
