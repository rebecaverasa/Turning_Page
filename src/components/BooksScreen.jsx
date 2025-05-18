import { View } from 'react-native';
import MyHeader from './header/MyHeader';
import BookModal from './books/BookModal';
import BookList from './books/BooksList';
import PageTitle from './header/PageTitle';
import AddBookInput from './AddBookInput';
import { useState } from 'react';


const BooksScreen = ({ navigation, title }) => {
    const [readedBooks, setReadedBooks] = useState([]);
    const [wantToReadBooks, setWantToReadBooks] = useState([]);
    const [readingBooks, setReadingBooks] = useState([]);

    let books, setBooks;
    if (title === 'Readed') {
        books = readedBooks;
        setBooks = setReadedBooks;
    } else if (title === 'Wanna read') {
        books = wantToReadBooks;
        setBooks = setWantToReadBooks;
    } else if (title === 'Reading') {
        books = readingBooks;
        setBooks = setReadingBooks;
    }

    const addBook = (book) => {
        setBooks([...books, book])
    }

    return (
        <View>
            <MyHeader navigation={navigation} />
            <PageTitle title={title} />
            <AddBookInput onAddBook={addBook} />
            <BookList books={books} />
            <BookModal />
        </View>
    )
};

export default BooksScreen;
