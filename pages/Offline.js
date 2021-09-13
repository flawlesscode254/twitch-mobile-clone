import React from "react";
import { StyleSheet, Text, View } from "react-native";

import OfflineChannels from "../components/OfflineChannels";

const Offline = () => {
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
        Your Offline Channels
      </Text>

        <OfflineChannels />
        <OfflineChannels />
        <OfflineChannels />
        <OfflineChannels />
        <OfflineChannels />
        
    </View>
  );
};

export default Offline;

const styles = StyleSheet.create({});
