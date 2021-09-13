import React from "react";
import { StyleSheet, Text, View } from "react-native";

import ContinueWatching from "../components/ContinueWatching";

const Continue = () => {
  return (
    <View>
      <Text
        style={{
          marginTop: 20,
          fontWeight: "bold",
          fontSize: 18,
          letterSpacing: 2,
        }}
      >
        Continue Watching
      </Text>

        <ContinueWatching />
        <ContinueWatching />
        <ContinueWatching />
        <ContinueWatching />
        <ContinueWatching />
        <ContinueWatching />

    </View>
  );
};

export default Continue;

const styles = StyleSheet.create({});
