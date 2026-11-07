import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import CartNavigator from './CartNavigator';
import ProfileScreen from "../screens/ProfileScreen";
import HomeNavigator from './HomeNavigator';

const Tab = createBottomTabNavigator();

export default function GlobalNavigator() {
    return (
        <Tab.Navigator >
            <Tab.Screen
                name="HomeTab"
                component={HomeNavigator}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => <Ionicons name="home" color={color} size={size} />
                }}
            />
            <Tab.Screen
                name="CartTab"
                component={CartNavigator}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Cart',
                    tabBarIcon: ({ color, size }) => <Ionicons name="cart" color={color} size={size} />
                }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color, size }) => <Ionicons name="person" color={color} size={size} />
                }}
            />
        </Tab.Navigator>
    );
}