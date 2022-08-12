import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    rootStyle: {
        flex: 1,
        backgroundColor: '#FFF',
        padding: 10
    },
    centerAlign: {
        alignItems: "center",
        justifyContent: "center"
    },
    flexRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    flexColumn: {
        flexDirection: "column"
    },
    flexGrow: {
        flexGrow: 1
    },
    buttonStyle: {
        borderRadius: 5,
        padding: 10,
        alignItems: "center",
        margin: 5
    },
    buttonContainedStyle: {
        backgroundColor: "#808000",
    },
    buttonOutlinedStyle: {
        borderColor: "#808000",
        borderWidth: 1
    },
    buttonOutlinedTextColor: {
        color: "#808000"
    },
    buttonContainedTextColor: {
        color: "#FFF"
    },
    dogDetailStyle: {
        borderWidth: 1,
        marginVertical: 5,
        borderRadius: 5,
        borderColor: "#808000",
        padding: 5
    },
    inputStyle: {
        height: 40,
        margin: 8,
        borderWidth: 1,
        padding: 10,
        borderRadius: 5
    }
})