import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import BooksScreen from "../../src/components/BooksScreen";

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
    return (
        <Drawer.Navigator screenOptions={{ headerShown: false }}>
            <Drawer.Screen name="Home" component={BooksScreen} />
        </Drawer.Navigator>
    );
}

export default DrawerNavigation;