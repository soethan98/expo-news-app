import { StyleSheet, View, Image, Text } from "react-native";
import { GlobalStyles } from "../constants/colors";

function NewsSource({sourceIcon,sourceName }) {
    return <View style={styles.itemSourceInfo}>
        <Image source={{ uri: sourceIcon }} style={styles.itemSourceImg} />
        <Text style={styles.itemSourceName}>{sourceName}</Text>
    </View>
}

const styles = StyleSheet.create({
    itemSourceInfo: {
        flexDirection: 'row',
        gap: 8,
        alignItems: 'center'
    },
    itemSourceName: {
        fontSize: 10,
        fontWeight: '400',
        color: GlobalStyles.colors.darkGrey
    },
    itemSourceImg: {
        width: 20,
        height: 20,
        borderRadius: 10
    }
});

export default NewsSource;