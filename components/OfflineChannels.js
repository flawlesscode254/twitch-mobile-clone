import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const OfflineChannels = () => {
    return (
        <View style={{
            paddingHorizontal: 20,
            flexDirection: "row",
            paddingVertical: 10
        }}>
            <Image 
                source={{ uri: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/a4bf14109185029.5fce5f81c4b8f.jpg" }}
                style={{
                    width: 50,
                    height: 50,
                    borderRadius: 999,
                    marginRight: 20
                }}
            />
            <View>
                <Text style={{
                    fontWeight: "bold",
                    fontSize: 15
                }}>Kitboga</Text>
                <Text style={{
                    color: "gray"
                }}>14 new videos</Text>
            </View>
        </View>
    )
}

export default OfflineChannels

const styles = StyleSheet.create({})
