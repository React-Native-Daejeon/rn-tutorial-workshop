import React from 'react';
import {SafeAreaView, Text, Button, TouchableOpacity, View} from 'react-native';
import {connect} from 'react-redux';
import {selectNote} from '../actions/actions';

/**
 * Main 화면을 담당할 MainScreen 입니다.
 */

const mapStateToProps = (state) => {
  return {
    notes: state.app_reducer.notes,
    select_note: state.app_reducer.select_note,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    selectNote: (index) => dispatch(selectNote(index)),
  };
};

class MainScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.select_note === undefined &&
      this.props.select_note !== undefined
    ) {
      // 만약, 노트 하나를 선택하게 되면 note screen으로 보내줍니다
      this.props.navigation.navigate('Note');
    }
  }

  renderNoteItem(note, index) {
    return (
      <TouchableOpacity
        onPress={() => {
          this.props.selectNote(index);
        }}>
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
              {this.renderNoteItem(note, index)}
            </View>
          );
        })}
      </SafeAreaView>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
