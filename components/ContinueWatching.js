import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const ContinueWatching = () => {
  return (
    <View>
      <View
        style={{
          marginTop: 20,
          width: 160,
        }}
      >
        <View
          style={{
            paddingHorizontal: 10,
            alignItems: "flex-start",
            flexDirection: "row",
          }}
        >
          <Image
            source={{
              uri: "https://d2n9ha3hrkss16.cloudfront.net/uploads/stage/stage_image/52418/optimized_large_thumb_stage.jpg",
            }}
            style={{
              width: 160,
              height: 90,
              marginRight: 20,
            }}
          />
          <View>
            <View
              style={{
                flexDirection: "row",
              }}
            >
              <Image
                source={{
                  uri: "https://d2n9ha3hrkss16.cloudfront.net/uploads/stage/stage_image/52418/optimized_large_thumb_stage.jpg",
                }}
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: 999,
                  marginRight: 10,
                }}
              />
              <Text
                style={{
                  fontWeight: "bold",
                }}
              >
                Lana Lux
              </Text>
            </View>
            <Text numberOfLines={2}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Blanditiis laborum cupiditate debitis obcaecati itaque perferendis
              a explicabo, error qui praesentium vero ipsa ea accusantium,
              libero repellat est, esse ratione aspernatur!
            </Text>
            <Text
              style={{
                color: "gray",
              }}
            >
              Fortnite
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ContinueWatching;

const styles = StyleSheet.create({});
