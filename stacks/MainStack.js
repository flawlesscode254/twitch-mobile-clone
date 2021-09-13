import React from "react";
import { StyleSheet, Image, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import Following from "../screens/Following";
import Discover from "../screens/Discover";
import Browse from "../screens/Browse";
import Esports from "../screens/Esports";

const MainStack = () => {
  const Stack = createBottomTabNavigator();

  const screenOptions = ({ route }) => ({
    tabBarIcon: ({ focused }) => {
      let iconName = "heart";

      switch (route.name) {
        case "Following":
          iconName = "heart";
          break;
        case "Discover":
          iconName = "compass";
          break;
        case "Browse":
          iconName = "copy";
          break;
        case "Esports":
          iconName = "trophy";
          break;

        default:
          iconName = "heart";
      }
      return (
        <Ionicons
          name={iconName}
          size={28}
          color={focused ? "#9146FF" : "#000000"}
        />
      );
    },
  });

  return (
    <Stack.Navigator
      screenOptions={screenOptions}
    >
      <Stack.Screen options={{
          headerTitle: () => null,
          headerLeft: () => {
              return (
                <Image
                    source={{ uri: "https://www.indiewire.com/wp-content/uploads/2020/10/video-game-gift-guide.jpeg?w=780" }}
                    style={{
                        width: 50,
                        height: 50,
                        borderRadius: 999,
                        marginLeft: 10
                    }}
                />
              )
          },
          headerRight: () => {
              return (
                  <View style={{
                      flexDirection: "row"
                  }}>
                      <Ionicons style={{
                          marginRight: 20
                      }} name="videocam-outline" color="black" size={27} />
                      <Ionicons style={{
                          marginRight: 20
                      }} name="notifications-outline" color="black" size={27} />
                      <Ionicons style={{
                          marginRight: 20
                      }} name="send-outline" color="black" size={27} />
                      <Ionicons style={{
                          marginRight: 20
                      }} name="search" color="black" size={27} />
                  </View>
              )
          }
      }} name="Following" component={Following} />
      <Stack.Screen name="Discover" component={Discover} />
      <Stack.Screen name="Browse" component={Browse} />
      <Stack.Screen name="Esports" component={Esports} />
    </Stack.Navigator>
  );
};

export default MainStack;

const styles = StyleSheet.create({});