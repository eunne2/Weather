import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native';

const {width:SCREEN_WIDTH} = Dimensions.get('window');


export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.city}>
        <Text style={styles.cityName}>Seoul</Text>
      </View>
      <ScrollView 
      pagingEnabled 
      horizontal 
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.weather}>
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.description}>Sunny</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.description}>Sunny</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.description}>Sunny</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
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
[Component]
ScrollView : 스크롤을 할 수 있음
  * 일반 style은 적용X, contentContainerStyle로 사용
  * ScrollView에는 flex가 없음(flex 적용X)
→ Props
  - horizontal : 가로 스크롤
  - pagingEnabled : 스크롤을 자유롭게 하지 못하게끔, 대신 페이지가 생성됨
  - showsHorizontalScrollIndicator={false} : 가로 스크롤바 숨기기
  - indicatorStyle : 스크롤바 스타일 변경 (★only iOS)
*/

/*
[API]
- Dimensions : 사용자 화면 크기를 얻을 수 있음
  * const {height, width} = Dimensions.get('window');
  * height 또는 width 둘 중 하나만 가져올 수 있음
  * width:SCREEN_WIDTH 와 같이 변수 이름을 설정할 수 있음
  * styles로 가져와서 사용할 칸에 width: SCREEN_WIDTH 적어주면 적용됨
  * === const SCREEN_WIDTH = Dimensions.get('window').width;
*/