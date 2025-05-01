import { StatusBar } from "expo-status-bar";
import { ImageBackground, StyleSheet, TouchableOpacity, View, Text } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { GlobalStyles } from "../../constants/colors";


function WelcomeScreen({ navigation }) {
    return (
        <>
            <StatusBar style="light" />
            <ImageBackground
                style={styles.imageBackground}
                resizeMode="cover"
                source={require('../../assets/images/getting-started.jpg')}>
                <View style={styles.overlay}>
                    <View style={styles.textContent}>
                        <Text style={styles.textTitle}>
                            Stay Informed
                        </Text>
                        <Text style={styles.textSubtitle}> Your daily news digest,curated just for you</Text>
                        <TouchableOpacity style={styles.button} onPress={() => navigation.replace('BottomTabs')}>
                            <Text style={styles.buttonText}>Get Started</Text>
                        </TouchableOpacity>
                    </View>

                </View>

            </ImageBackground>
        </>
    );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
    imageBackground: {
        flex: 1,
        width: '100%',
        height: '100%'
    },
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.4)',
        justifyContent: 'flex-end',
        paddingBottom: 50
    },
    textContent: {
        marginHorizontal: 24
    },
    textTitle: {
        fontSize: 24,
        fontWeight: '600',
        textAlign: 'center',
        color: 'white',
        lineHeight: 36,
        letterSpacing: 1.5
    },
    textSubtitle: {
        fontSize: 16,
        fontWeight: '500',
        textAlign: 'center',
        color: 'white',
        lineHeight: 36,
        letterSpacing: 1.5
    },
    button: {
        backgroundColor: GlobalStyles.colors.tint,
        alignItems: 'center',
        paddingVertical: 15,
        marginVertical: 20,
        borderRadius: 12

    },
    buttonText: {
        color: GlobalStyles.colors.white,
        fontSize: 18,
        fontWeight: '600',
    }

})