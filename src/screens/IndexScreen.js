import React, { useContext } from "react";
import { View, Text, StyleSheet, FlatList, Button } from "react-native";
import { Context as BlogContext } from "../context/BlogContext";

const IndexScreen = () => {
  const { state, actions } = useContext(BlogContext);

  return (
    <View>
      <Text>Index Screen</Text>
      <FlatList
        data={state}
        keyExtractor={post => post.id || post.title}
        renderItem={({ item }) => <Text>{item.title}</Text>}
      />
      <Button title="Add Blog Post" onPress={actions.addBlogPost} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default IndexScreen;
