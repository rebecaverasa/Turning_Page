import { Button } from "react-native-elements";

const AddBook = () => {
    return (
        <Button
            title="Add book"
            loading={false}
            loadingProps={{ size: 'small', color: 'white' }}
            buttonStyle={{
                backgroundColor: '#F4D07A',
                borderRadius: 100,
            }}
            titleStyle={{ fontWeight: 'bold', fontSize: 18 }}
            containerStyle={{
                height: 50,
                width: 120,
            }}
            onPress={() => console.log('aye')}
        />
    )
}

export default AddBook;