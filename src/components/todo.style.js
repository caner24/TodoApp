import React from 'react';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    card: {
        padding: 10,
        borderRadius: 5,
        backgroundColor: "green"
    },
    card_body: {
        padding: 4,
        backgroundColor: "green"
    },
    card_header: {
        display: "flex",
        flexDirection: "row"
    },
    card_header_left: {
        flex: 1,
        fontSize: 30,
        fontWeight: "bold",
        color: "orange"
    }
    , card_header_right: {
        fontSize: 30,
        fontWeight: "bold",
        color: "orange"
    },
    btnNormal: {
        padding:10,
        display: "flex",
        backgroundColor:"green",
        borderWidth: 1,
        borderRadius: 10
    },
    btnPress: {
        padding:10,
        display: "flex",
        backgroundColor: "gray",
        borderWidth: 1,
        borderRadius: 10
    },
    card_text: {
        
        color: "white", fontWeight: "bold", fontSize: 20
    },
    LineText: {
        color: "white", fontWeight: "bold", fontSize: 20, textDecorationLine: "line-through",
    }
})
