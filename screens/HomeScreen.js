import React from 'react';
import { View, Text, Button, StyleSheet, ImageBackground, Animated } from 'react-native';

const HomeScreen = ({ navigation }) => {
    const buttonAnimation = React.useRef(new Animated.Value(0)).current;

    const startButtonAnimation = () => {
        Animated.timing(buttonAnimation, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true,
        }).start();
    };

    const buttonScale = buttonAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: [1, 1.1],
    });

    return (<>

        <ImageBackground
            source={require('../assets/earth.jpg')}
            style={styles.backgroundImage}
        >
            <View style={styles.overlay}>
                <View style={styles.container}>
                    <Text style={styles.appName}>GlobeTrekker</Text>
                    <Text style={styles.introText}>"The Global Gazette: Unlock the Secrets of the World" </Text>
                    <Animated.View style={[styles.buttonContainer, { transform: [{ scale: buttonScale }] }]}>
                        <Button style={styles.buttonColor} title="Explore" onPress={() => {
                            startButtonAnimation();
                            navigation.navigate('Explore');
                        }}
                            color="gray"
                        ></Button>
                    </Animated.View>
                </View>
            </View>
        </ImageBackground>
    </>
    );
};

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,

        justifyContent: 'center',
    },
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    appName: {
        fontSize: 36,
        fontWeight: 'bold',
        marginBottom: 40,
        color: '#FFF',
        textShadowColor: 'rgba(0, 0, 0, 0.5)',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 2,
    },
    introText: {
        fontStyle: "italic",
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 60,
        color: '#FFF',
        textShadowColor: 'rgba(0, 0, 0, 0.5)',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 2,
    },
    buttonContainer: {
        width: 200,
        borderRadius: 25,
        overflow: 'hidden',
        elevation: 4,
        backgroundColor: '#2196F3',
    },
});

export default HomeScreen;
