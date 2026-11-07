import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "../screens/HomeScreen";
import Ionicons from '@expo/vector-icons/Ionicons';
import { Pressable } from 'react-native';
import CartScreen from '../screens/CartScreen';

export default function HomeNavigator({ navigation }) {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator initialRouteName="Home" screenOptions={{
            headerRight: () => (
                <Pressable onPress={() => navigation.navigate('CartTab')}>
                    <Ionicons name="cart" size={24} color="black" style={{ marginRight: 16 }} />
                </Pressable>
            )
        }}>
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    title: "Menu"
                }}
            />
            <Stack.Screen
                name="Cart"
                component={CartScreen}
                options={{
                    title: "Cart"
                }}
            />
        </Stack.Navigator>
    );
}