import React from "react";
import { StyleSheet, Text, View } from "react-native";

import RecommendedChannels from "../components/RecommendedChannels";

const Recommended = () => {
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
        Channels Recommended For You
      </Text>
      <RecommendedChannels />
      <RecommendedChannels />
      <RecommendedChannels />
      <RecommendedChannels />
      <RecommendedChannels />
    </View>
  );
};

export default Recommended;

const styles = StyleSheet.create({});
