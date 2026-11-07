import { ScrollView, StyleSheet, Text, View } from "react-native";
import FeaturedCard from "../components/FeaturedCard";
import CategoriesCard from "../components/CategoriesCard";
import { categories, dishes } from "../data/menu";

export default function HomeScreen() {

    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.content}>
            <View style={styles.header}>
                <Text style={styles.eyebrow}>WELCOME TO</Text>
                <Text style={styles.title}>Tasty Bites</Text>
                <Text style={styles.subtitle}>Fresh food, made with love.</Text>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Featured items</Text>
                <Text style={styles.sectionSubtitle}></Text>

                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.featuredItems}
                >
                    {dishes.map((dish) => (
                        <FeaturedCard
                            key={dish.id}
                            {...dish} 
                        />
                    ))}
                </ScrollView>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Categories</Text>
                <Text style={styles.sectionSubtitle}>Select a category to explore the menu.</Text>
                <View style={styles.categories}>
                    {categories.map((category) => {

                        return (
                            <CategoriesCard
                                key={category}
                                category={category}
                            />
                        );
                    })}
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FAF8F5"
    },
    content: {
        padding: 20,
        paddingBottom: 32
    },
    header: {
        backgroundColor: "#E96B37",
        borderRadius: 20,
        padding: 24,
        marginBottom: 28
    },
    eyebrow: {
        color: "#FFE3D2",
        fontSize: 12,
        fontWeight: "700",
        letterSpacing: 1.5,
        marginBottom: 8
    },
    title: {
        color: "#FFFFFF",
        fontSize: 32,
        fontWeight: "800"
    },
    subtitle: {
        color: "#FFF2EB",
        fontSize: 15,
        marginTop: 6
    },
    section: {
        marginBottom: 28
    },
    sectionTitle: {
        color: "#27211E",
        fontSize: 21,
        fontWeight: "700"
    },
    sectionSubtitle: {
        color: "#77706A",
        fontSize: 14,
        marginTop: 4,
        marginBottom: 16
    },
    categories: {
        gap: 8
    },
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
