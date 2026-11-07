import { Pressable, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function FeaturedCard({
    name,
    category,
    description,
    price,
    emoji,
    color
}) {
    const navigation = useNavigation();

    return (
        <Pressable style={styles.card} onPress={() => navigation.navigate('Details', { item: { name, category, description, price, emoji, color } })}>
            <View style={[styles.dishImage, { backgroundColor: color }]}>
                <Text accessible={false} style={styles.dishEmoji}>{emoji}</Text>
            </View>
            <View style={styles.dishDetails}>
                <Text style={styles.dishCategory}>{category}</Text>
                <Text style={styles.dishName}>{name}</Text>
                <Text style={styles.dishDescription}>{description}</Text>
                <Text style={styles.price}>${price.toFixed(2)}</Text>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    card: {
        width: 220,
        backgroundColor: "#FFFFFF",
        borderRadius: 16,
        padding: 12
    },
    dishImage: {
        minHeight: 120,
        borderRadius: 12,
        alignItems: "center",
        justifyContent: "center"
    },
    dishEmoji: {
        fontSize: 42
    },
    dishDetails: {
        flex: 1,
        paddingTop: 12
    },
    dishCategory: {
        color: "#E96B37",
        fontSize: 12,
        fontWeight: "700"
    },
    dishName: {
        color: "#27211E",
        fontSize: 17,
        fontWeight: "700",
        marginTop: 4
    },
    dishDescription: {
        color: "#77706A",
        fontSize: 13,
        marginTop: 4
    },
    price: {
        color: "#27211E",
        fontSize: 15,
        fontWeight: "700",
        marginTop: 8
    }
});