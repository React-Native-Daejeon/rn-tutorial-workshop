import React from 'react';
import {SafeAreaView, Text, Button, TextInput} from 'react-native';
import {connect} from 'react-redux';
import {newNote, unselectNote} from '../actions/actions';
import {TouchableOpacity} from 'react-native-gesture-handler';

/**
 * Note(Memo) 화면을 담당할 NoteScreen 입니다.
 */

const mapStateToProps = (state) => {
  return {
    notes: state.app_reducer.notes,
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
      edit: false, // 편집 모드를 알려줄 state 입니다. 기본적으로는 편집이 불가능합니다.
      title: '',
      body: '',
    };
  }

  componentDidMount() {
    /**
     * screen component로 진입할 때 만약 선택된 노트가 있다면,
     * 이 노트에 대한 정보를 미리 채워줍니다 (편집 가능하게)
     * 반대로 선택된 노트가 없이 노트를 추가할 예정이면, edit 모드를
     * true로 바꿔줍니다
     */
    if (this.props.select_note !== undefined) {
      const note = this.props.notes[this.props.select_note];
      this.setState({
        title: note.title,
        body: note.body,
      });
    } else {
      this.setState({edit: true});
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

  onEditChange() {
    this.setState({edit: true});
  }

  onSubmitNote() {
    this.props.makeNewNote({title: this.state.title, body: this.state.body});
    this.setState({edit: false});
  }

  buttonMode(editable) {
    if (editable === true) {
      return (
        <TouchableOpacity
          onPress={() => {
            this.onSubmitNote();
          }}>
          <Text>완료</Text>
        </TouchableOpacity>
      );
    } else {
      return (
        <TouchableOpacity
          onPress={() => {
            this.onEditChange();
          }}>
          <Text>편집</Text>
        </TouchableOpacity>
      );
    }
  }

  render() {
    return (
      <SafeAreaView>
        <Text>NoteScreen</Text>
        <Text>title</Text>
        <TextInput
          value={this.state.title}
          editable={this.state.edit} // text input의 편집을 제어합니다
          onChangeText={(text) => {
            this.onChangeTitle(text);
          }}
        />
        <Text>body</Text>
        <TextInput
          value={this.state.body}
          editable={this.state.edit} // text input의 편집을 제어합니다
          onChangeText={(text) => {
            this.onChangeBody(text);
          }}
        />
        {this.buttonMode(this.state.edit)}
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
