import React from 'react';
import {View, StyleSheet} from 'react-native';
import NoteHeaderButton from './NoteHeaderButton';

class NoteCompleteButton extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.header_container}>
        <NoteHeaderButton
          title="삭제"
          onPress={() => {
            this.props.onDelete();
          }}
        />
        <NoteHeaderButton
          title="편집"
          onPress={() => {
            this.props.onModeChange();
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header_container: {flexDirection: 'row'},
});

export default NoteCompleteButton;
