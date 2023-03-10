import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import * as Location from 'expo-location';
import { StyleSheet, Text, View, ScrollView, Dimensions, Image } from 'react-native';
// import axios from 'axios';

// const {height:SCREEN_HEIGHT} = Dimensions.get('window');
const {width:SCREEN_WIDTH} = Dimensions.get('window');
export default function App() {
  // const [imageSrc, setImageSrc] = useState("");

  // useEffect(() => {
  //   axios.get("https://dog.ceo/api/breeds/image/random")
  //     .then((response) => {
  //       setImageSrc(response.data.message);
  //       console.log("imageSrc : " + imageSrc);
  //     })
  //     .catch((error) => {
  //       console.log(error)
  //     });
  // }, [])
  const [city, setCity] = useState("Loading...");
  const [location, setLocation] = useState();
  const [ok, setOk] = useState(true);
  const ask = async() => {
    const {granted} = await Location.requestForegroundPermissionsAsync();
    if(!granted){
      setOk(false);
    }
    const {
      coords: {latitude, longitude}, 
    } = await Location.getCurrentPositionAsync({accuracy:5});
    const location = await Location.reverseGeocodeAsync(
      {latitude, longitude}, 
      {useGoogleMaps: false }
      );
      setCity(location[0].city)
  }
  useEffect(() => {
    ask();
  })

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.city}>
        <Text style={styles.cityName}>{city}</Text>
      </View>
      <ScrollView 
      pagingEnabled 
      horizontal 
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.weather}>
        {/* <View>
          <Image
          source={{ uri: imageSrc }}
          style={styles.dayDog}
          />
        </View> */}
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.description}>Sunny</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>28</Text>
          <Text style={styles.description}>Sunny</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>29</Text>
          <Text style={styles.description}>Sunny</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>30</Text>
          <Text style={styles.description}>Sunny</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#248a47"
  },
  city: {
    flex: 1.15,
    justifyContent: "center",
    alignItems: "center",
  },
  cityName: {
    color: "white",
    fontSize: 68,
    fontWeight: "500",
  },
  weather: {},
  // dayDog: {
  //   width: SCREEN_WIDTH,
  //   alignItems: "center",
  //   height: SCREEN_HEIGHT,
  // },
  day: {
    width: SCREEN_WIDTH,
    alignItems: "center",
  },
  temp :{
    marginTop: 50,
    fontSize: 178,
    color: "white",
  },
  description: {
    marginTop: -30,
    fontSize: 60,
    color: "white",
  },
});

/*
[API]
Location : ?????? ?????? ??????
  * npx expo install expo-location
??? Methods
  - .requestPermissionsAsync() : ?????? ??????(??????)
  - .requestForegroundPermissionsAsync() : ?????? ??? ??? ?????? ?????????
  - .getLastKnownPositionAsync() : ????????? ????????? ??????
  - .getCurrentPositionAsync() : ????????? ?????? ??????
  - .watchPositionAsync() : ?????? ??????(???????????? ???????????? ??????o)
  - .geocodeAsync() : ????????? ????????? ??????/????????? ??????
  - .reverseGeocodeAsync() : ??????/????????? ??? function??? ?????? ??????, ?????? ??????
  - Geofencing Method = ????????? ?????? ????????? ???????????? ??? ?????????
    ??? ????????? leave or enter ?????? ??? ?????????
*/