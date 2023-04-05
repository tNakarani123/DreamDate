import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { COLORS } from './constants';
// import { COLORS } from '../utils/constants';

// import { styles } from './styles';

export default function Choice({ type }) {
    const color = COLORS[type];

    return (
        <View style={[styles.container, { borderColor: color }]}>
            <Text style={[styles.text, { color }]}>{type}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 7,
        paddingHorizontal: 15,
        borderRadius: 15,
        backgroundColor: 'rgba(0,0,0,0.2)',
    },
    text: {
        fontSize: 48,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        letterSpacing: 4,
    },
});