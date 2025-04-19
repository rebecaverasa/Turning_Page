import { Image, TouchableOpacity } from 'react-native';
import thinmenu from "../../assets/images/thinmenu.png";

const IconMenu = () => {
    return (
        <TouchableOpacity onPress={() => console.log('Logo clicada')}>
            <Image
                source={thinmenu}
                style={{ width: 120, height: 40, resizeMode: 'contain' }}
            />
        </TouchableOpacity>
    );
}

export default IconMenu;