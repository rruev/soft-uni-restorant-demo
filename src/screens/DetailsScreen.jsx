import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

export default function DetailsScreen({ route }) {
    const item = route.params?.item;

    if (!item || typeof item.price !== "number" || !Number.isFinite(item.price)) {
        return (
            <View style={styles.unavailable}>
                <Text style={styles.unavailableText}>Item details are unavailable.</Text>
            </View>
        );
    }

    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.content}>
            <View style={[styles.image, { backgroundColor: item.color }]}>
                <Text accessible={false} style={styles.emoji}>{item.emoji}</Text>
            </View>

            <View style={styles.details}>
                <Text style={styles.category}>{item.category}</Text>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.price}>${item.price.toFixed(2)}</Text>

                <Text style={styles.sectionTitle}>About this item</Text>
                <Text style={styles.description}>{item.description}</Text>

                <View style={styles.quantityRow}>
                    <Text style={styles.sectionTitle}>Quantity</Text>
                    <View style={styles.quantityControl}>
                        <Pressable disabled accessibilityRole="button" accessibilityLabel="Decrease quantity" style={styles.quantityButton}>
                            <Text style={styles.quantityButtonText}>−</Text>
                        </Pressable>
                        <Text style={styles.quantity}>1</Text>
                        <Pressable disabled accessibilityRole="button" accessibilityLabel="Increase quantity" style={styles.quantityButton}>
                            <Text style={styles.quantityButtonText}>+</Text>
                        </Pressable>
                    </View>
                </View>

                <View style={styles.totalRow}>
                    <Text style={styles.totalLabel}>Total</Text>
                    <Text style={styles.total}>${item.price.toFixed(2)}</Text>
                </View>

                <Pressable disabled accessibilityRole="button" style={styles.addButton}>
                    <Text style={styles.addButtonText}>Add to cart</Text>
                </Pressable>
                <Pressable disabled accessibilityRole="button" style={styles.viewButton}>
                    <Text style={styles.viewButtonText}>View cart</Text>
                </Pressable>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#FAF8F5" },
    content: { padding: 20, paddingBottom: 32 },
    image: {
        height: 220,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center"
    },
    emoji: { fontSize: 88 },
    details: { paddingTop: 24 },
    category: { color: "#A13C16", fontSize: 13, fontWeight: "700" },
    name: { color: "#27211E", fontSize: 28, fontWeight: "800", marginTop: 6 },
    price: { color: "#A13C16", fontSize: 20, fontWeight: "700", marginTop: 8 },
    sectionTitle: { color: "#27211E", fontSize: 17, fontWeight: "700", marginTop: 24 },
    description: { color: "#77706A", fontSize: 15, lineHeight: 22, marginTop: 8 },
    quantityRow: { flexDirection: "row", alignItems: "center", justifyContent: "space-between" },
    quantityControl: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#FFFFFF",
        borderRadius: 12,
        marginTop: 24
    },
    quantityButton: { width: 44, height: 44, alignItems: "center", justifyContent: "center" },
    quantityButtonText: { color: "#514A44", fontSize: 22, fontWeight: "600" },
    quantity: { color: "#27211E", fontSize: 16, fontWeight: "700", minWidth: 32, textAlign: "center" },
    totalRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 28,
        marginBottom: 20
    },
    totalLabel: { color: "#514A44", fontSize: 16, fontWeight: "600" },
    total: { color: "#27211E", fontSize: 20, fontWeight: "800" },
    addButton: {
        backgroundColor: "#E96B37",
        borderRadius: 12,
        padding: 16,
        alignItems: "center"
    },
    addButtonText: { color: "#FFFFFF", fontSize: 16, fontWeight: "700" },
    viewButton: {
        borderColor: "#E96B37",
        borderWidth: 1,
        borderRadius: 12,
        padding: 16,
        marginTop: 12,
        alignItems: "center"
    },
    viewButtonText: { color: "#A13C16", fontSize: 16, fontWeight: "700" },
    unavailable: { flex: 1, backgroundColor: "#FAF8F5", padding: 20 },
    unavailableText: { color: "#514A44", fontSize: 16 }
});