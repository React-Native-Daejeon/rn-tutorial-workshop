import React from 'react';
import {SafeAreaView, Text, Button, TextInput} from 'react-native';
import {connect} from 'react-redux';
import {newNote} from '../actions/actions';

/**
 * Note(Memo) 화면을 담당할 NoteScreen 입니다.
 */

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    makeNewNote: (note) => dispatch(newNote(note)),
  };
};

class NoteScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
    };
  }

  onChangeTitle(text) {
    this.setState({title: text});
  }

  onChangeBody(text) {
    this.setState({body: text});
  }

  onSubmitNote() {
    this.props.makeNewNote({title: this.state.title, body: this.state.body});
  }

  render() {
    return (
      <SafeAreaView>
        <Text>NoteScreen</Text>
        <Text>title</Text>
        <TextInput
          value={this.state.title}
          onChangeText={(text) => {
            this.onChangeTitle(text);
          }}
        />
        <Text>body</Text>
        <TextInput
          value={this.state.body}
          onChangeText={(text) => {
            this.onChangeBody(text);
          }}
        />
        <Button
          onPress={() => {
            this.onSubmitNote();
          }}
          title="Submit"
        />
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

export default connect(mapStateToProps, mapDispatchToProps)(NoteScreen);
