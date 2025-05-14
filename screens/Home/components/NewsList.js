import { StyleSheet,View,Image,Text } from "react-native";
import { GlobalStyles } from "../../../constants/colors";

const NewsList = () => {
    return (
        <View style={styles.container}>
            <View style={styles.itemContainer}> 
                <Image source={{uri:'https://media.assettype.com/freepressjournal/2025-05-05/l2wvkbzf/GujratBoardResult2025.jpg'}} style={styles.itemImg} />
               <View style={styles.itemInfo}>
                <Text style={styles.itemCategory}>politics</Text>
                <Text style={styles.itemTitle}>Gopi Sundar files cyber complaint over obsence Facebook comments</Text>
                <View style={styles.itemSourceInfo}>
                    <Image source={{uri:'https://i.bytvi.com/domain_icons/freepressjournal.png'}}  style={styles.itemSourceImg}/>
                    <Text style={styles.itemSourceName}>freepressjournal</Text>
                </View>
               </View>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container:{
        marginHorizontal:20
    },
    itemContainer:{
        flexDirection:'row',
        alignItems:'center',
        marginBottom:20,
    },
    itemImg:{
        width:90,
        height:100,
        borderRadius:20,
        marginRight:10
    },
    itemInfo:{
        flex:1,
        gap:10,
        justifyContent:'space-between'
    },
    itemCategory:{
        fontSize:12,
        textTransform:'capitalize',
        color:GlobalStyles.colors.lightGrey
    },
    itemTitle:{
        fontSize:12,
        color:GlobalStyles.colors.black,
        fontWeight:'600',
    },
    itemSourceInfo:{
        flexDirection:'row',
        gap:8,
        alignItems:'center'
    },
    itemSourceName:{
        fontSize:10,
        fontWeight:'400',
        color:GlobalStyles.colors.darkGrey
    },
    itemSourceImg:{
        width:20,
        height:20,
        borderRadius:10
    }
})

export default NewsList;