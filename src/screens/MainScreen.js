import React from 'react';
import {SafeAreaView, Text, Button} from 'react-native';

/**
 * Main 화면을 담당할 MainScreen 입니다.
 */
class MainScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SafeAreaView>
        <Text>MainScreen</Text>
        <Button
          onPress={() => {
            this.props.navigation.navigate('Note');
          }}
          title="Go to Note"
        />
      </SafeAreaView>
    );
  }
}

export default MainScreen;
