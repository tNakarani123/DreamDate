import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Height, Width } from './responsive';
const width = 100;
function LabelBase(props) {
    const { position, value } = props;
    return (React.createElement(View, {
        style: [
            styles.sliderLabel,
            {
                left: position,
            },
        ]
    },
        React.createElement(Text, { style: styles.sliderLabelText }, value)));
}
export default function SliderCustomLabel(textTransformer) {
    return function (props) {
        const { oneMarkerValue, twoMarkerValue, oneMarkerLeftPosition, twoMarkerLeftPosition, } = props;
        console.log({ props, oneMarkerLeftPosition, twoMarkerLeftPosition });
        return (React.createElement(View, null,
            React.createElement(LabelBase, { position: oneMarkerLeftPosition, value: textTransformer(oneMarkerValue) }),
            twoMarkerValue ?
                React.createElement(LabelBase, { position: twoMarkerLeftPosition, value: textTransformer(twoMarkerValue) }) : null));
    };
}
const styles = StyleSheet.create({
    sliderLabel: {
        position: 'absolute',
        justifyContent: 'center',
        width: width,
        height: width,
    },
    sliderLabelText: {
        textAlign: 'center',
        lineHeight: width,
        flex: 1,
        marginLeft: Width(30),
        fontSize: Height(12),
        fontFamily: 'Gilroy-SemiBold'
    },
});