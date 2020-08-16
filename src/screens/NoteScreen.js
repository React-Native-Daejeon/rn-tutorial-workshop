import React from 'react';
import {SafeAreaView, Text, Button, TextInput} from 'react-native';
import {connect} from 'react-redux';
import {newNote, unselectNote} from '../actions/actions';

/**
 * Note(Memo) 화면을 담당할 NoteScreen 입니다.
 */

const mapStateToProps = (state) => {
  return {
    select_note: state.app_reducer.select_note,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    makeNewNote: (note) => dispatch(newNote(note)),
    unselectNote: () => dispatch(unselectNote()),
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

  componentDidMount() {
    /**
     * screen component로 진입할 때 만약 선택된 노트가 있다면,
     * 이 노트에 대한 정보를 미리 채워줍니다 (편집 가능하게)
     */
    if (this.props.select_note !== undefined) {
      this.setState({
        title: this.props.select_note.title,
        body: this.props.select_note.body,
      });
    }
  }

  componentWillUnmount() {
    /**
     * screen을 떠나면서 선택되어있던 note가 있으면 할당 해제 해줍니다
     */
    this.props.unselectNote();
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
