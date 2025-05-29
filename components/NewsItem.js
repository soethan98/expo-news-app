import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import { GlobalStyles } from "../constants/colors";
import NewsSource from "./NewsSource";

function NewsItem({data,onNewsItemClick}) {
    return (
        <TouchableOpacity onPress={() => onNewsItemClick(data.articleId)}>
            <View style={styles.itemContainer} key={data.articleId}>
            <Image source={{ uri: data.imageUrl }} style={styles.itemImg} />
            <View style={styles.itemInfo}>
                <Text style={styles.itemCategory}>{data.category}</Text>
                <Text style={styles.itemTitle}>{data.title}</Text>
                <NewsSource sourceIcon={data.sourceIcon} sourceName={data.source} />
            </View>
        </View>
        </TouchableOpacity>
        
    )
}

export default NewsItem;


const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    itemImg: {
        width: 90,
        height: 100,
        borderRadius: 20,
        marginRight: 10
    },
    itemInfo: {
        flex: 1,
        gap: 10,
        justifyContent: 'space-between'
    },
    itemCategory: {
        fontSize: 12,
        textTransform: 'capitalize',
        color: GlobalStyles.colors.lightGrey
    },
    itemTitle: {
        fontSize: 12,
        color: GlobalStyles.colors.black,
        fontWeight: '600',
    },
});