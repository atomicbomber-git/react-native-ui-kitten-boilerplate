import { Platform, StatusBar, StyleSheet } from "react-native";

export default StyleSheet.create({
    body: {
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    }
})