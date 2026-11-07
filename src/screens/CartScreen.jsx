import { FlatList, StyleSheet, Text, View } from "react-native";
import { useCart } from "../context/CartContext";

export default function CartScreen() {
    const { items } = useCart();
    const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <FlatList
            style={styles.container}
            contentContainerStyle={styles.content}
            data={items}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <View style={styles.item}>
                    <View style={styles.details}>
                        <Text style={styles.name}>{item.name}</Text>
                        <Text style={styles.quantity}>Quantity: {item.quantity}</Text>
                    </View>
                    <Text style={styles.price}>${(item.price * item.quantity).toFixed(2)}</Text>
                </View>
            )}
            ListEmptyComponent={<Text style={styles.empty}>Your cart is empty.</Text>}
            ListFooterComponent={items.length > 0 ? (
                <Text style={styles.total}>Total: ${total.toFixed(2)}</Text>
            ) : null}
        />
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#FAF8F5" },
    content: { padding: 20, paddingBottom: 32 },
    item: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#FFFFFF",
        borderRadius: 12,
        padding: 16,
        marginBottom: 12
    },
    details: { flex: 1, marginRight: 12 },
    name: { color: "#27211E", fontSize: 16, fontWeight: "700" },
    quantity: { color: "#77706A", marginTop: 4 },
    price: { color: "#27211E", fontWeight: "700" },
    empty: { color: "#77706A", fontSize: 16 },
    total: { color: "#27211E", fontSize: 18, fontWeight: "700", marginTop: 8, textAlign: "right" }
});
