import { createStackNavigator } from '@react-navigation/stack';
import CartScreen from "../screens/CartScreen";
import CheckOutScreen from "../screens/CheckOutScreen";

const Stack = createStackNavigator();

export default function CartNavigator() {
    return(
        <Stack.Navigator initialRouteName="Cart">
            <Stack.Screen
                name="Cart"
                component={CartScreen}
            />
            <Stack.Screen
                name="CheckOut"
                component={CheckOutScreen}
            />
        </Stack.Navigator>
    );
}