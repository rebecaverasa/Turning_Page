import { Image, TouchableOpacity } from 'react-native';
import addbook from "../assets/images/addbook.png";

const IconAddBook = () => {
    <TouchableOpacity onPress={() => console.log('Logo clicada')}>
        <Image
            source={addbook}
            style={{ width: 120, height: 40, resizeMode: 'contain' }}
        />
    </TouchableOpacity>
}

export default IconAddBook;