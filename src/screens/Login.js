import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

const Login = ({ navigation }) => {
    return (
        <>
            <View style={styles.container}>
                <Button mode="outlined" style={{ width: "80%" }} onPress={(e) => navigation.navigate("Admin")}
                >
                    Admin
                </Button>
                <Button mode="outlined" style={{ width: "80%" }} onPress={() => navigation.navigate("User")}>
                    User
                </Button>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        rowGap: 20,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:"#C4C4E4",
    },
});


export default Login;