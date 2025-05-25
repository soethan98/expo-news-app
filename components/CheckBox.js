import { StyleSheet, View, Text } from "react-native";
import { GlobalStyles } from "../constants/colors";
import { AntDesign } from '@expo/vector-icons';


const CheckBox = ({ label, checked, onPress }) => {
    return (
        <View style={[styles.container,checked && styles.containerSelected]} onTouchEnd={onPress}>
            <Text style={[styles.label]}>{label}</Text>
            {checked && ( // Only show the check icon if checked is true
                <View style={styles.iconWrapper}>
                    <AntDesign name="checkcircle" size={14} color={GlobalStyles.colors.tint} />
                </View>
            )}
        </View>
    )
}


export default CheckBox;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        gap: 8,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: GlobalStyles.colors.black,
        borderRadius: 32,
        paddingVertical: 8,
        paddingHorizontal: 16
    },
    containerSelected: {

        backgroundColor: 'rgba(228, 96, 15, 0.1)',
        borderColor: GlobalStyles.colors.tabIconSelected,
    },
    label: {
        fontSize: 14,
    },
    iconWrapper: {
        height: 14,
        width: 14,
        marginLeft: 8
    },

    chipText: {
        fontSize: 14,
        letterSpacing: 0.5,
        color: GlobalStyles.colors.darkGrey
    },

})