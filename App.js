import React, { useEffect, useState } from "react";
import {
    NativeBaseProvider,
    Center,
    Container,
    Heading,
    Button,
    Modal,
    StatusBar,
} from "native-base";
import SignIn from "./src/pages/SignIn";

const App = () => {
    const [isAuth, setIsAuth] = useState(false);
    const [isSignInLoading, setIsSignInLoading] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);

    const handleSignInOnPress = () => {
        setModalVisible(!modalVisible);
        setIsSignInLoading(true);
    };
    const handleSignInConfirmOnPress = () => {
        setModalVisible(false);
    };
    const handleCancelOnPress = () => {
        setModalVisible(false);
        setIsSignInLoading(false);
    };

    useEffect(() => {
        setIsAuth(false);
        setIsSignInLoading(false);
    }, []);

    return (
        <>
            <NativeBaseProvider>
                <StatusBar animated />
                <Center flex={1} bg="#0f172a">
                    <Heading color="#cbd5e1" size="3xl">
                        My Password Manager
                    </Heading>
                    <Button
                        isLoading={isSignInLoading}
                        size="sm"
                        variant="outline"
                        onPress={handleSignInOnPress}
                        colorScheme="primary"
                        marginTop={10}
                        width={200}
                    >
                        Sign In
                    </Button>
                </Center>
                <Modal
                    isOpen={modalVisible}
                    onClose={setModalVisible}
                    size="lg"
                >
                    <Modal.Content>
                        <Modal.Header>Sign In</Modal.Header>
                        <Modal.Body>Account Service Not Available</Modal.Body>
                        <Modal.Footer>
                            <Button.Group variant="ghost" space={2}>
                                <Button onPress={handleSignInConfirmOnPress}>
                                    SIGN IN
                                </Button>
                                <Button
                                    onPress={handleCancelOnPress}
                                    colorScheme="muted"
                                >
                                    CLOSE
                                </Button>
                            </Button.Group>
                        </Modal.Footer>
                    </Modal.Content>
                </Modal>
            </NativeBaseProvider>
        </>
    );
};

export default App;
