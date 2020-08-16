import React from 'react';
import {SafeAreaView, Text} from 'react-native';

/**
 * Note(Memo) 화면을 담당할 NoteScreen 입니다.
 */
class NoteScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SafeAreaView>
        <Text>NoteScreen</Text>
        <Button
          onPress={() => {
            this.props.navigation.goBack();
          }}
          title="Back to Main"
        />
      </SafeAreaView>
    );
  }
}

export default NoteScreen;
