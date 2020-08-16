import React from 'react';
import {SafeAreaView, Text, Button, TouchableOpacity, View} from 'react-native';
import {connect} from 'react-redux';

/**
 * Main 화면을 담당할 MainScreen 입니다.
 */

const mapStateToProps = (state) => {
  return {
    notes: state.app_reducer.notes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

class MainScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  renderNoteItem(note) {
    return (
      <TouchableOpacity onPress={() => {}}>
        <Text>{note.title}</Text>
        <Text>{note.body}</Text>
      </TouchableOpacity>
    );
  }

  render() {
    const notes = this.props.notes;
    return (
      <SafeAreaView>
        <Text>MainScreen</Text>
        <Button
          onPress={() => {
            this.props.navigation.navigate('Note');
          }}
          title="Go to Note"
        />
        {notes.map((note, index) => {
          return (
            <View key={`${note.title}::${index}`}>
              {this.renderNoteItem(note)}
            </View>
          );
        })}
      </SafeAreaView>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
