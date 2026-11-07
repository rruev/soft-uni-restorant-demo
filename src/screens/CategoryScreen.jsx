import { FlatList, StyleSheet, Text, View } from "react-native";
import ItemCard from "../components/ItemCard";
import { useCart } from "../context/CartContext";
import { categories, dishes } from "../data/menu";

export default function CategoryScreen({ navigation, route }) {
    const { addItem, items: cartItems } = useCart();
    const category = route.params?.category;
    const validCategory = categories.includes(category);
    const items = validCategory
        ? dishes.filter((dish) => category === "All" || dish.category === category)
        : [];
    const cartQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

    navigation.setOptions({ title: category });

    return (
        <FlatList
            style={styles.container}
            contentContainerStyle={styles.content}
            data={items}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <ItemCard item={item} onAdd={addItem} />}
            ListHeaderComponent={
                <View style={styles.header}>
                    <Text style={styles.title}>{validCategory ? category : "Category unavailable"}</Text>
                    <Text style={styles.subtitle}>
                        {validCategory ? "Explore our menu and add your favorites." : "Choose a category from the home screen."}
                    </Text>
                    {cartQuantity > 0 && (
                        <Text style={styles.cartCount} accessibilityLiveRegion="polite">
                            {cartQuantity} {cartQuantity === 1 ? "item" : "items"} in cart
                        </Text>
                    )}
                </View>
            }
            ListEmptyComponent={
                validCategory ? <Text style={styles.subtitle}>No items in this category yet.</Text> : null
            }
        />
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#FAF8F5" },
    content: { padding: 20, paddingBottom: 32 },
    header: { marginBottom: 20 },
    title: { color: "#27211E", fontSize: 26, fontWeight: "800" },
    subtitle: { color: "#77706A", fontSize: 14, marginTop: 6 },
    cartCount: { color: "#A13C16", fontSize: 14, fontWeight: "700", marginTop: 10 }
});
