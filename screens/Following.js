import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

import Followed from "../pages/Followed";
import Live from "../pages/Live";
import Recommended from "../pages/Recommended";
import Continue from "../pages/Continue";
import Offline from "../pages/Offline";

const Following = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View
        style={{
          paddingHorizontal: 10,
          paddingVertical: 10,
          backgroundColor: "white",
        }}
      >
        <Text
          style={{
            fontSize: 30,
            fontWeight: "bold",
            letterSpacing: 2,
          }}
        >
          Following
        </Text>

        <Text
          style={{
            marginTop: 20,
            fontSize: 15,
            fontWeight: "bold",
            letterSpacing: 2,
          }}
        >
          Followed Categories
        </Text>

        <Followed />

        <Live />

        <Recommended />

        <Continue />

        <Offline />
      </View>
    </ScrollView>
  );
};

export default Following;

const styles = StyleSheet.create({});
