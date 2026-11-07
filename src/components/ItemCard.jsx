import { Pressable, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function ItemCard({ item, onAdd }) {
    const navigation = useNavigation();

    return (
        <View style={styles.card}>
            <View style={[styles.image, { backgroundColor: item.color }]}>
                <Text accessible={false} style={styles.emoji}>{item.emoji}</Text>
            </View>
            <View style={styles.details}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.description}>{item.description}</Text>
                <View style={styles.footer}>
                    <Text style={styles.price}>${item.price.toFixed(2)}</Text>
                    <Pressable
                        accessibilityRole="button"
                        accessibilityLabel={`Add ${item.name} to cart`}
                        onPress={() => navigation.navigate("Details", { item })}
                        style={styles.addButton}
                    >
                        <Text style={styles.addText}>Add +</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        flexDirection: "row",
        backgroundColor: "#FFFFFF",
        borderRadius: 16,
        padding: 12,
        marginBottom: 12
    },
    image: {
        width: 90,
        minHeight: 100,
        borderRadius: 12,
        alignItems: "center",
        justifyContent: "center"
    },
    emoji: { fontSize: 42 },
    details: { flex: 1, marginLeft: 14 },
    name: { color: "#27211E", fontSize: 17, fontWeight: "700" },
    description: { color: "#77706A", fontSize: 13, marginTop: 4 },
    footer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 8
    },
    price: { color: "#27211E", fontSize: 15, fontWeight: "700" },
    addButton: {
        backgroundColor: "#E96B37",
        borderRadius: 10,
        paddingHorizontal: 16,
        paddingVertical: 10
    },
    addText: { color: "#FFFFFF", fontWeight: "700" }
});
