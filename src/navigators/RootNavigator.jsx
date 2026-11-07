import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CartNavigator from './CartNavigator';
import ProfileScreen from "../screens/ProfileScreen";
import HomeNavigator from './HomeNavigator';

const Tab = createBottomTabNavigator();

export default function RootNavigator() {
    return (
        <Tab.Navigator >
            <Tab.Screen
                name="HomeTab"
                component={HomeNavigator}
                options={{ headerShown: false }}
            />
            <Tab.Screen
                name="CartTab"
                component={CartNavigator}
                options={{ headerShown: false }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
            />
        </Tab.Navigator>
    );
}