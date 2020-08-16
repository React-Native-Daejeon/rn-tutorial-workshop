import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';

class NotePreview extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TouchableOpacity
        onPress={() => {
          this.props.onSelect();
        }}
        style={[styles.preview_container]}>
        <View style={[styles.preview_title_container]}>
          <Text style={[styles.preview_title_txt]}>
            {this.props.note.title}
          </Text>
        </View>
        <View style={[styles.preview_body_container]}>
          <Text>{this.props.note.body}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  preview_container: {
    width: '100%',
    height: 100,
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
    padding: 10,
    overflow: 'hidden',
  },
  preview_title_container: {
    overflow: 'hidden',
    height: 25,
    justifyContent: 'center',
  },
  preview_title_txt: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  preview_body_container: {
    overflow: 'hidden',
    height: 70,
    paddingBottom: 10,
    justifyContent: 'center',
  },
});

export default NotePreview;
