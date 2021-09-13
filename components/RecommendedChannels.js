import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const RecommendedChannels = () => {
  return (
    <View>
      <View
        style={{
          marginTop: 20,
          width: 150,
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
              uri: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/a4bf14109185029.5fce5f81c4b8f.jpg",
            }}
            style={{
              width: 160,
              height: 90,
              marginRight: 20,
            }}
          />
          <View
            style={{
              flexDirection: "row",
              position: "absolute",
              bottom: -10,
              left: 20,
            }}
          >
            <Ionicons
              style={{
                marginTop: 5,
                marginRight: 4,
              }}
              name="radio-button-on"
              color="red"
              size={12}
            />
            <Text
              style={{
                marginBottom: 10,
                color: "#FFFFFF",
                fontWeight: "bold",
              }}
            >
              123K
            </Text>
          </View>
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
          <View>
            <Ionicons name="ellipsis-vertical" color="black" size={25} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default RecommendedChannels;

const styles = StyleSheet.create({});
