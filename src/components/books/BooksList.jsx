import React, { useState } from 'react';
import { ScrollView, Alert } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';

const BookList = () => {
    const [books, setBooks] = useState([
        'The Hobbit',
        '1984',
        'The Alchemist',
        'Manacled',
        'The Great Gatsby',
        'To Kill a Mockingbird',
        'Pride and Prejudice',
        'The Catcher in the Rye',
        'The Lord of the Rings',
    ]);

    const handleItemPress = (book) => {
        Alert.alert('Você clicou em:', book);
    };

    return (
        <ScrollView>
            {books.map((book, index) => (
                <ListItem
                    key={index}
                    onPress={() => handleItemPress(book)}
                    bottomDivider
                    containerStyle={{
                        backgroundColor: '#F9F7F3',
                    }}
                >
                    <Avatar
                        rounded
                        source={{ uri: 'https://example.com/book-cover.jpg' }}
                        size="medium" />
                    <ListItem.Content>
                        <ListItem.Title style={{ fontFamily: 'Raleway' }}>{book}</ListItem.Title>
                    </ListItem.Content>
                    <ListItem.Chevron />
                </ListItem>
            ))}
        </ScrollView>
    );
};

export default BookList;

