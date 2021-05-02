import React from 'react';
import { TouchableOpacity, Text, StyleSheet, TouchableOpacityProps } from 'react-native';
import { useNavigation } from '@react-navigation/core';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface ButtonProps extends TouchableOpacityProps {
    title: string;
}

export function Button({ title, ...rest }: ButtonProps){
    return (
        <TouchableOpacity 
            style={style.container}
            { ...rest } 
        >
            <Text style={style.text}>
                { title }
                </Text>
        </TouchableOpacity>
    )
};

const style = StyleSheet.create({
    container: {
        backgroundColor: colors.green,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        marginTop: 25,
        marginBottom: 10,
        height: 56,
        width: '100%',
    },
    text: {
        color: colors.white,
        fontSize: 16,
        fontFamily: fonts.heading,
    },
})