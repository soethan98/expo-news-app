import { StyleSheet,View,Text, ScrollView, TouchableOpacity } from "react-native";
import newCategoryList from "../../../constants/categories";
import { GlobalStyles } from "../../../constants/colors";
const Categories = () => {
    return (<View>
        <Text style={styles.title}>Trending Right Now</Text>
       <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.itemsWrapper}>
        {newCategoryList.map((category)=> (
            <TouchableOpacity key={category.id} style={styles.chip}>
                <Text style={styles.chipText}>{category.title}</Text>
            </TouchableOpacity>
        ))}
       </ScrollView>
    </View>);
}


export default Categories;


const styles = StyleSheet.create({
    title:{
        fontSize:18,
        marginHorizontal:16,
        marginVertical:24,
        fontWeight:'600',
    },
    itemsWrapper:{
        paddingVertical:10,
        paddingHorizontal:20,
        gap:8

    
    },
    chip:{
        borderWidth:1,
        borderColor:GlobalStyles.colors.darkGrey,
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 12,
    },
    chipSelected:{},
    chipText:{},
    chipTextSelected:{}
})