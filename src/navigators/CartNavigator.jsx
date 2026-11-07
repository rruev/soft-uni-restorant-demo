import { createStackNavigator } from '@react-navigation/stack';
import CartScreen from "../screens/CartScreen";
import CheckOutScreen from "../screens/CheckOutScreen";

const Stack = createStackNavigator();

export default function CartNavigator() {
    return(
        <Stack.Navigator initialRouteName="GlobalCart">
            <Stack.Screen
                name="GlobalCart"
                component={CartScreen}
                options={{
                    title: "Cart"
                }}
            />
            <Stack.Screen
                name="CheckOut"
                component={CheckOutScreen}
                options={{
                    title: "Check Out"
                }}
            />
        </Stack.Navigator>
    );
}