import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

class NoteHeaderButton extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TouchableOpacity
        onPress={() => {
          this.props.onPress();
        }}
        style={styles.button_contanier}>
        <Text>{this.props.title}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button_contanier: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 40,
  },
});

export default NoteHeaderButton;
