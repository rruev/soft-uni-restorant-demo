import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import RootNavigator from './navigators/RootNavigator';
import { CartProvider } from './context/CartContext';

export default function App() {
	return (
		<CartProvider>
			<StatusBar style="auto" />
			<NavigationContainer>
				<RootNavigator />
			</NavigationContainer>
		</CartProvider>
	);
}
