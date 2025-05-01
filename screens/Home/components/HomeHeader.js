import { StyleSheet, View, Image, Text } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { GlobalStyles } from "../../../constants/colors";


function HomeHeader() {
    return (
        <View style={styles.container}>
            <Image source={{ uri: 'https://randomuser.me/api/portraits/men/62.jpg' }} style={styles.userImg} />
            <View style={styles.userInfo}>
                <Text style={styles.welcomeLabel}>Welcome!</Text>
                <Text style={styles.username}>John Doe</Text>
            </View>

            <Ionicons name="notifications-outline" size={24} />

        </View>
    );
}

export default HomeHeader;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingHorizontal: 24,
        alignItems: 'center'

    },
    userImg: {
        borderRadius: 25,
        width: 50,
        height: 50
    },
    userInfo: {
        flexDirection: 'column',
        marginLeft: 10,
        flex: 1,
    },
    welcomeLabel: {
        fontSize: 12,
        color: GlobalStyles.colors.darkGrey


    },
    username: {
        fontSize: 14,
        fontWeight: '700',
    }
});