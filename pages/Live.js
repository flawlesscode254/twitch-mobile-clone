import React from "react";
import { StyleSheet, Text, View } from "react-native";

import LiveChannels from "../components/LiveChannels";

const Live = () => {
  return (
    <View>
      <Text
        style={{
          marginTop: 10,
          fontWeight: "bold",
          fontSize: 18,
          letterSpacing: 2,
        }}
      >
        Your Live Channels
      </Text>
      <LiveChannels />
      <LiveChannels />
      <LiveChannels />
      <LiveChannels />
    </View>
  );
};

export default Live;

const styles = StyleSheet.create({});
