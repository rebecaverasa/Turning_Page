import { createDrawerNavigator } from "@react-navigation/drawer";
import BooksScreen from "../../src/components/BooksScreen";
import CustomSidebar from "../components/sidebar/CustomSidebar";
import Reading from "../screens/Reading";
import WannaRead from "../screens/WannaRead";
import Readed from "../screens/Readed";

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
    return (
        <Drawer.Navigator drawerContent={(props) => <CustomSidebar {...props} />} screenOptions={{ headerShown: false }}>
            <Drawer.Screen name="Wanna read" component={WannaRead} />
            <Drawer.Screen name="Readed" component={Readed} />
            <Drawer.Screen name="Reading" component={Reading} />
        </Drawer.Navigator>
    );
}

export default DrawerNavigation;