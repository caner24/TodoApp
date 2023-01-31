import React, { useEffect, useState } from 'react';
import {
  Button,
  FlatList,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import Todo from './components/Todo';
import styles from './components/todo.style';
function App(): JSX.Element {

  const myArray = [];

  const [myList, setList] = useState(myArray);

  const [textedItem, setItem] = useState([]);

  const saveItem = (item) => setItem(item);

  function saveTodo() {
    myList.push(textedItem);
    setList(myList);
  }


  function renderCard({ item }) {
    return (
      <Todo titles={item} />
    );
  }
  return (
    <SafeAreaView style={{ flex: 1, padding: 10, backgroundColor: "black" }}>
      <View style={styles.card_header}>
        <Text style={styles.card_header_left}>Yapilacaklar</Text>
        <Text style={styles.card_header_right}>{myList.length}</Text>
      </View>
      <View style={{ flex: 1, marginTop: 5 }}>
        <FlatList data={myList} renderItem={renderCard} ItemSeparatorComponent={() => <View style={{ margin: 5 }}></View>}></FlatList>
      </View>
      <View style={{ backgroundColor: "gray", padding: 5, borderRadius: 5 }}>
        <TextInput onChangeText={saveItem} placeholder='Yapılacak...' />

        <Pressable style={{padding:10, borderRadius: 15,backgroundColor:"orange" }} onPress={saveTodo}  ><Text style={{textAlign:"center"}}>Kaydet</Text></Pressable>


      </View>
    </SafeAreaView>
  );
}

export default App;
