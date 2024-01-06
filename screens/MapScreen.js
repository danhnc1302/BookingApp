import React, { useEffect, useRef } from 'react'
import { StyleSheet, Text, View, Pressable } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import { useNavigation, useRoute } from '@react-navigation/native'


const MapScreen = () => {
  const route = useRoute()
  const mapView = useRef(null)
  console.log("params: ", route.params.searchResults)

  const coordinates = [];
  const details = route.params.searchResults.map((item) => item.properties?.map((prop) => {
      coordinates.push({
          latitude:Number(prop.latitude),
          longitude:Number(prop.longitude)
      })
  }));
  useEffect(() => {
    mapView.current.fitToCoordinates(coordinates,{
        edgePadding:{
            top:190,
            left:190,
            bottom:190,
            right:190,
        }
    });
  },[])

  return (
    <View>
      <MapView
        ref={mapView}
        style={{ width: "100%", height: "100%" }}
      >
        {
          route.params.searchResults.map((item) =>
            item.properties.map((property, index) => (
              <Marker
                key={index}
                coordinate={{
                  latitude: Number(property.latitude),
                  longitude: Number(property.longitude)
                }}
                title={property.name}
              >
                <Pressable
                  style={{
                    backgroundColor: "#003580",
                    paddingHorizontal: 7,
                    paddingVertical: 4,
                    borderRadius: 4,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 15,
                      color: "white",
                      textAlign: "center",
                      fontWeight: "bold",
                    }}
                  >
                    {property.newPrice}
                  </Text>
                </Pressable>
              </Marker>
            ))
          )
        }
      </MapView>
    </View>
  )
}

export default MapScreen

const styles = StyleSheet.create({})