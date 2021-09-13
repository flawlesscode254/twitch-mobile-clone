import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

const FollowedCategories = ({ logo, name, viewers }) => {
    return (
        <View>
            <Image 
                source={{ uri: logo }}
                style={{
                    height: 160,
                    width: 120,
                    marginTop: 20,
                    marginRight: 10
                }}
            />
            <Text style={{
                fontWeight: "bold",
                marginTop: 5
            }}>{name}</Text>
            <View style={{
                flexDirection: "row"
            }}>
            <Ionicons style={{
                marginTop: 5,
                marginRight: 4
            }} name="radio-button-on" color="red" size={12} />
            <Text style={{
                marginBottom: 10,
                color: "black"
            }}>{viewers}</Text>
            </View>

        </View>
    )
}

export default FollowedCategories

const styles = StyleSheet.create({})
