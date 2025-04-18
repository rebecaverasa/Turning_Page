import * as React from 'react';
import { Input } from '@rneui/base';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const BooksInput = () => {
  return (
    <Input
      containerStyle={{}}
      disabledInputStyle={{ background: "#ddd" }}
      inputContainerStyle={{}}
      errorStyle={{}}
      errorProps={{}}
      inputStyle={{}}
      labelStyle={{}}
      labelProps={{}}
      leftIcon={<Icon name="book" size={20} />}
      leftIconContainerStyle={{}}
      rightIcon={<Icon name="send" size={20} />}
      rightIconContainerStyle={{}}
      placeholder="Book name"
    />
  );
};

export default BooksInput;