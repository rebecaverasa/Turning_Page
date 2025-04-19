import { Modal, StyleSheet, View } from "react-native";
import { Text } from "react-native-elements";

const BookModal = () => {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: 'rgba(0,0,0,0.4)',
            justifyContent: 'center',
            alignItems: 'center',
        },
        modalContent: {
            backgroundColor: 'white',
            padding: 24,
            borderRadius: 8,
        },
    });

    return (
        <Modal visible={true} transparent animationType="fade">
            <View style={styles.container}>
                <View style={styles.modalContent}>
                    <Text>Esse modal está sempre visível 😎</Text>
                </View>
            </View>
        </Modal>
    )
}

export default BookModal;