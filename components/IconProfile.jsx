import { Image, TouchableOpacity } from 'react-native';
import profileicon from "../assets/images/profileicon.png"

const IconProfile = () => {
    return (
        <TouchableOpacity onPress={() => console.log('Logo clicada')}>
            <Image
                source={profileicon}
                style={{ width: 120, height: 40, resizeMode: 'contain', margin: 0, padding: 0 }}
            />
        </TouchableOpacity>
    );
}

export default IconProfile;