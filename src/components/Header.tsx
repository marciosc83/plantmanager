import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
//import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import colors from '../styles/colors';
import userImg from '../assets/marcio.png';
import fonts from '../styles/fonts';
export function Header() {
    return (
        <View
            style={style.container}
        >
            <View>
                <Text 
                    style={style.greeting}
                >
                    Olá,
                </Text>
                <Text 
                    style={style.username}
                >
                    Marcio!
                </Text>
            </View>

            <Image 
                style={style.image} 
                source={ userImg } 
            />
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width * 0.9,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 20,
        paddingHorizontal: 20,
        //marginTop: getStatusBarHeight(),
        marginTop: 10,
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 40,
    },
    greeting: {
        fontSize: 32,
        color: colors.heading,
        fontFamily: fonts.text,
    },
    username: {
         fontSize: 32,
         fontFamily: fonts.heading,
         lineHeight: 40,
    }
});