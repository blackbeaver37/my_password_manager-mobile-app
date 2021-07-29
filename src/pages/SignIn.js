import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Center } from "native-base";

const SignIn = () => {
    return (
        <Center
            bg="primary.400"
            _text={{
                color: "white",
                fontWeight: "bold",
            }}
            height={200}
            width={{
                base: 200,
                lg: 400,
            }}
        >
            This is the Center
        </Center>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black",
    },
    text: {
        color: "#efefef",
    },
});

export default SignIn;
