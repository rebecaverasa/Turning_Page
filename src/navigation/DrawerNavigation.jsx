import { createDrawerNavigator } from "@react-navigation/drawer";
import BooksScreen from "../../src/components/BooksScreen";
import CustomSidebar from "../components/sidebar/CustomSidebar";

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
    return (
        <Drawer.Navigator drawerContent={(props) => <CustomSidebar {...props} />} screenOptions={{ headerShown: false }}>
            <Drawer.Screen name="Home" component={BooksScreen} />
        </Drawer.Navigator>
    );
}

export default DrawerNavigation;