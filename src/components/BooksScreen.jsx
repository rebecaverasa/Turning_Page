import { View } from 'react-native';
import MyHeader from './header/MyHeader';
import BookModal from './books/BookModal';
import BookList from './books/BooksList';
import PageTitle from './header/PageTitle';
import AddBookInput from './AddBookInput';
import { useState } from 'react';


const BooksScreen = ({ navigation, title }) => {

    const [readedBooks, setReadedBooks] = useState([]);
    const [readingBooks, setReadingBooks] = useState([]);
    const [wannareadBooks, setWannareadBooks] = useState([]);

    let books, setBooks;
    if (title === 'Readed') {
        books = readedBooks
        setBooks = setReadedBooks
    } else if (title === 'Reading') {
        books = readingBooks
        setBooks = setReadingBooks
    } else if (title === 'Wanna read') {
        books = wannareadBooks
        setBooks = setWannareadBooks
    }

    const onAddBook = (book) => {
        setBooks([...books, book])
    }

    const handleRemoveBook = (indexToRemove) => {
        setBooks(books.filter((_, idx) => idx !== indexToRemove))
    }

    return (
        <View>
            <MyHeader navigation={navigation} />
            <PageTitle title={title} />
            <AddBookInput onAddBook={onAddBook} />
            <BookList books={books} onRemoveBook={handleRemoveBook} />
            <BookModal />
        </View>
    )
};

export default BooksScreen;
