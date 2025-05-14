import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from "react-native";
import newCategoryList from "../../../constants/categories";
import { GlobalStyles } from "../../../constants/colors";
import { useState } from "react";
const Categories = () => {
    const [selectedCategory, setSelectedCategory] = useState(null)
    return (<View>
        <Text style={styles.title}>Trending Right Now</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.itemsWrapper}>
            {newCategoryList.map((category) => (
                <TouchableOpacity key={category.id} style={[
                    styles.chip , selectedCategory === category.id && styles.chipSelected,
                ]} onPress={() => {
                    setSelectedCategory(category.id)
                }}>
                    <Text style={[
                        styles.chipText,
                        selectedCategory === category.id && styles.chipTextSelected
                    ]}>{category.title}</Text>
                </TouchableOpacity>
            ))}
        </ScrollView>
    </View>);
}


export default Categories;


const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        marginHorizontal: 16,
        marginVertical: 24,
        fontWeight: '600',
    },
    itemsWrapper: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        gap: 8
    },
    chip: {
        borderWidth: 1,
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 12,
    },
    chipSelected: {

        backgroundColor:GlobalStyles.colors.tabIconSelected,
        borderColor:GlobalStyles.colors.tabIconSelected,
    },
    chipText: {
        fontSize: 14,
        letterSpacing: 0.5,
        color: GlobalStyles.colors.darkGrey
    },
    chipTextSelected: {
        color:GlobalStyles.colors.white,
        
    }
})