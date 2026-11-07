import { useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import FeaturedCard from "../components/FeaturedCard";
import CategoriesCard from "../components/CategoriesCard";

const categories = ["All", "Burgers", "Pizza", "Salads", "Desserts"];

const dishes = [
    {
        id: "1",
        name: "Classic Burger",
        category: "Burgers",
        description: "Beef, cheddar, lettuce and our house sauce",
        price: 12.90,
        emoji: "🍔",
        color: "#FFE9D6"
    },
    {
        id: "2",
        name: "Margherita Pizza",
        category: "Pizza",
        description: "Tomato, mozzarella and fresh basil",
        price: 14.50,
        emoji: "🍕",
        color: "#FFEBE3"
    },
    {
        id: "3",
        name: "Garden Salad",
        category: "Salads",
        description: "Fresh greens, tomatoes and cucumber",
        price: 9.90,
        emoji: "🥗",
        color: "#E8F4DE"
    },
    {
        id: "4",
        name: "Chocolate Cake",
        category: "Desserts",
        description: "Rich chocolate cake with a creamy finish",
        price: 7.50,
        emoji: "🍰",
        color: "#F5E5EF"
    }
];

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
                <Text style={styles.sectionSubtitle}>Select a category to filter featured items.</Text>
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
