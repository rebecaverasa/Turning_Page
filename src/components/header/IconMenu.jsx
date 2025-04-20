import { Image, TouchableOpacity } from 'react-native';
import thinmenu from "../../../assets/images/thinmenu.png";

const IconMenu = ({ navigation }) => {
    return (
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Image
                source={thinmenu}
                style={{ width: 120, height: 40, resizeMode: 'contain' }}
            />
        </TouchableOpacity>
    );
}

export default IconMenu;