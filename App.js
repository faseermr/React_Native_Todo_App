import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import SingleTodo from "./components/SingleTodo";

export default function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const AddTodo = () => {
    if (!todo) return;
    setTodos([...todos, { id: Date.now(), text: todo }]);
    setTodo("");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>React Native Todo App</Text>
      <View style={styles.inputContainer}>
        <TextInput
          value={todo}
          style={styles.input}
          placeholder="Enter todo"
          onChangeText={(text) => setTodo(text)}
        />
        <TouchableOpacity onPress={AddTodo}>
          <Text style={styles.button}>Go</Text>
        </TouchableOpacity>
      </View>
      <View>
        <FlatList
          data={todos}
          renderItem={({ item }) => <SingleTodo item={item} />}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    backgroundColor: "#F7DAD9",
    // justifyContent: "center",
  },
  heading: {
    fontSize: 25,
    color: "red",
  },
  input: {
    elevation: 10,
    shadowColor: "black",
    backgroundColor: "white",
    flex: 1,
    marginRight: 5,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 50,
  },
  inputContainer: {
    flexDirection: "row",
    marginHorizontal: 10,
    alignItems: "center",
  },
  button: {
    padding: 13,
    backgroundColor: "white",
    borderRadius: 50,
    elevation: 10,
  },
});
