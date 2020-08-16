import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MainScreen from './MainScreen';
import NoteScreen from './NoteScreen';
const Stack = createStackNavigator();

/**
 * react-navigation@5.x 버전의 stackNavigation을 사용합니다
 * header는 커스터마이징해서 사용할 예정이기 때문에 headerMode는 none으로 설정해줍니다
 */
export default function ScreenStack() {
  return (
    <Stack.Navigator headerMode={'none'}>
      <Stack.Screen name="Main" component={MainScreen} />
      <Stack.Screen name="Note" component={NoteScreen} />
    </Stack.Navigator>
  );
}
