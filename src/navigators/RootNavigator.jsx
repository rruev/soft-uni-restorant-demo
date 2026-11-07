import { createStackNavigator } from '@react-navigation/stack';
import GlobalNavigator from './GlobalNavigator';
import DetailsScreen from '../screens/DetailsScreen';

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
        </Stack.Navigator>
    );
}