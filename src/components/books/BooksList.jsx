import { ScrollView } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';

const BookList = ({ books }) => {

    return (
        <ScrollView>
            {books?.map((book, index) => (
                <ListItem
                    key={index}
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
                        <ListItem.Title style={{ fontFamily: 'Raleway_400' }}>{book}</ListItem.Title>
                    </ListItem.Content>
                    <ListItem.Chevron />
                </ListItem>
            ))}
        </ScrollView>
    );
};

export default BookList;

