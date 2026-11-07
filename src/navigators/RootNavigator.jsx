import { createStackNavigator } from '@react-navigation/stack';
import GlobalNavigator from './GlobalNavigator';
import DetailsScreen from '../screens/DetailsScreen';
import CartNavigator from './CartNavigator';

export default function RootNavigator() {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Global"
                component={GlobalNavigator}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Details"
                component={DetailsScreen}
            />
            <Stack.Screen
                name="Cart"
                component={CartNavigator}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
}