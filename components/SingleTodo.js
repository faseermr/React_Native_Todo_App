import { View, Text } from "react-native";
import React from "react";

export default function SingleTodo({ item }) {
  return (
    <View>
      <Text>{item.text}</Text>
    </View>
  );
}
