import { Pressable, Text, StyleSheet } from "react-native";

export default function CategoriesCard({
    category
}) {
    return (
        <Pressable
            onPress={() => console.log(`Selected category: ${category}`)}
            accessibilityRole="button"
            style={styles.category}
        >
            <Text style={styles.categoryText}>
                {category}
            </Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    category: {
        backgroundColor: "#FFFFFF",
        borderColor: "#EAE4DE",
        borderWidth: 1,
        borderRadius: 12,
        paddingHorizontal: 16,
        paddingVertical: 14
    },
    categoryText: {
        color: "#514A44",
        fontWeight: "600"
    },
    featuredItems: {
        gap: 12,
        paddingRight: 20
    },
});