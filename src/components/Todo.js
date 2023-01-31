import React from 'react';
import { TextInput, Text, View, TouchableOpacity, Alert } from 'react-native';

import styles from './todo.style';

const Todo = (props) => {
    var [isPress, setIsPress] = React.useState(false);

    var touchProps = {                   // <-- "backgroundColor" will be always overwritten by "underlayColor"
        style: isPress ? styles.btnPress : styles.btnNormal, // <-- but you can still apply other style changes
        onPress: () => setIsPress(true),                 // <-- "onPress" is apparently required
    };
    var textProps={
        style: isPress ? styles.LineText : styles.card_text
    }
    return (
        <TouchableOpacity  {...touchProps} >
            <Text {...textProps}>{props.titles}</Text>
        </TouchableOpacity >
    );
}

export default Todo;