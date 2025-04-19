import * as React from 'react';
import { Input } from '@rneui/base';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const BooksInput = () => {
  return (
    <Input
      disabledInputStyle={{ background: "#ddd" }}
      leftIcon={<Icon name="book" size={20} />}
      rightIcon={<Icon name="send" size={20} />}
      placeholder="Book name"
    />
  );
};

export default BooksInput;