import { Input } from "@rneui/base";
import { useState } from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const AddBookInput = ({ onAddBook }) => {

    const [value, setValue] = useState('');

    const handleSend = () => {
        if (value.trim() !== "") {
            onAddBook(value.trim());
            setValue("");
        }
    };

    return (
        <Input
            containerStyle={{ backgroundColor: '#F9F7F3' }}
            rightIcon={<Icon name="send" size={20} onPress={handleSend} />}
            value={value}
            onChangeText={setValue}
            rightIconContainerStyle={{}}
            placeholder="Add book"
        />
    );
}

export default AddBookInput;