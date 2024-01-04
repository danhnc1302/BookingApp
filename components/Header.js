import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    Pressable,
    ScrollView
} from 'react-native'

import { FontAwesome5, Ionicons } from "@expo/vector-icons"
const Header = () => {
    return (
        <ScrollView
            horizontal
        >
            <View
                style={{
                    width: "100%",
                    backgroundColor: "#003580",
                    height: 65,
                    flexDirection: "row",
                    gap: 20,
                    paddingHorizontal: 10,
                    alignItems: "center",
                    justifyContent: "space-around",
                }}
            >
                <Pressable
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        borderColor: "white",
                        borderWidth: 1,
                        borderRadius: 25,
                        padding: 8,
                    }}
                >
                    <Ionicons name="bed-outline" size={24} color="white" />
                    <Text
                        style={{
                            marginLeft: 8,
                            fontWeight: "bold",
                            color: "white",
                            fontSize: 15,
                        }}
                    >
                        Stays
                    </Text>
                </Pressable>

                <Pressable
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                    }}
                >
                    <Ionicons name="ios-airplane-outline" size={26} color="white" />
                    <Text
                        style={{
                            marginLeft: 8,
                            fontWeight: "bold",
                            color: "white",
                            fontSize: 15,
                        }}
                    >
                        Flights
                    </Text>
                </Pressable>

                <Pressable
                    style={{
                        flexDirection: "row",
                        alignItems: "center",

                    }}
                >
                    <Ionicons name="car-outline" size={26} color="white" />
                    <Text
                        style={{
                            marginLeft: 8,
                            fontWeight: "bold",
                            color: "white",
                            fontSize: 15,
                        }}
                    >
                        Car Rental
                    </Text>
                </Pressable>

                <Pressable
                    style={{
                        flexDirection: "row",
                        alignItems: "center",


                    }}
                >
                    <FontAwesome5 name="uber" size={26} color="white" />
                    <Text
                        style={{
                            marginLeft: 8,
                            fontWeight: "bold",
                            color: "white",
                            fontSize: 15,
                        }}
                    >
                        Taxi
                    </Text>
                </Pressable>
            </View>
        </ScrollView>
    )
}

export default Header

const styles = StyleSheet.create({})