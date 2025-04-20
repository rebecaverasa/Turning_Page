import { Image, TouchableOpacity } from 'react-native';
import profilewhite from "../../../assets/images/profilewhite.png"

const IconProfile = () => {
    return (
        <TouchableOpacity onPress={() => console.log('Logo clicada')}>
            <Image
                source={profilewhite}
                style={{ width: 120, height: 40, resizeMode: 'contain' }}
            />
        </TouchableOpacity>
    );
}

export default IconProfile;