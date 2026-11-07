import { createStackNavigator } from '@react-navigation/stack';
import CartScreen from "../screens/CartScreen";

const Stack = createStackNavigator();

export default function CartNavigator() {
    return(
        <Stack.Navigator initialRouteName="Cart">
            <Stack.Screen
                name="Cart"
                component={CartScreen}
            />
        </Stack.Navigator>
    );
}