import React from 'react';
import { View } from 'react-native';

export default function App() {
  return (
    <View style={{flex: 1, flexDirection:"row"}}>
      <View style={{flex:1, backgroundColor:"tomato"}}></View>
      <View style={{flex:1, backgroundColor:"teal"}}></View>
      <View style={{flex:1, backgroundColor:"orange"}}></View>
    </View>
  );
}

/*
기본적으로 모든 View는 flex container임 → 그래서 따로 display:flex 설정 X
  - flexDirection 기본값은 모두 Column (웹 기본 = row / 앱 기본 = column)
*/

/*
넓이와 높이에 의존해 레이아웃을 만들지 X
  - 디바이스 크기에 따라 넓이와 높이는 매우 상대적인 크기이기 때문
  - 수 많은 스크린에서 동일한 방식으로 보이는 반응형 레이아웃을 만들어야 함
  - 이미지나 아바타에는 width랑 height를 쓸 수 있지만, 레이아웃에는 절대 X
*/

/*
React-Native에서 레이아웃 설정하는 방법
  - 모든 View는 flex이기 때문에 얘네들한테 flex Size를 줌
  - flex 부모에 사이즈를 주고, 자식에도 flex size를 주면 비율로 분배됨
*/