import React from 'react';
import {
  SafeAreaView,
  Text,
  Button,
  TextInput,
  View,
  StyleSheet,
} from 'react-native';
import {connect} from 'react-redux';
import {newNote, unselectNote, deleteNote} from '../actions/actions';
import NoteCompleteButton from '../components/NoteCompleteButton';
import NoteHeaderButton from '../components/NoteHeaderButton';
import NoteInput from '../components/NoteInput';

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
    deleteNote: () => dispatch(deleteNote()),
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

  componentDidUpdate(prevProps) {
    if (
      prevProps.select_note !== undefined &&
      this.props.select_note === undefined
    ) {
      // 노트가 삭제되어 선택된 노트가 없어지면 다시 Main 화면으로 보내줍니다
      this.onBackPress();
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

  onDeleteNote() {
    this.props.deleteNote();
  }

  onBackPress() {
    this.props.navigation.goBack();
  }

  renderEditButton() {
    return (
      <NoteHeaderButton
        title="완료"
        onPress={() => {
          this.onSubmitNote();
        }}
      />
    );
  }

  renderCompleteButton() {
    return (
      <NoteCompleteButton
        onModeChange={() => {
          this.onEditChange();
        }}
        onDelete={() => {
          this.onDeleteNote();
        }}
      />
    );
  }

  headerRightButton() {
    if (this.state.edit === true) {
      return this.renderEditButton();
    } else {
      return this.renderCompleteButton();
    }
  }

  render() {
    return (
      <SafeAreaView>
        <View style={styles.header_container}>
          <NoteHeaderButton
            title="이전"
            onPress={() => {
              this.onBackPress();
            }}
          />
          <View style={styles.header_right_container}>
            {this.headerRightButton()}
          </View>
        </View>
        <NoteInput
          {...this.state}
          changeTitle={(text) => {
            this.onChangeTitle(text);
          }}
          changeBody={(text) => {
            this.onChangeBody(text);
          }}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  header_container: {
    height: 40,
    borderBottomWidth: 0.5,
    borderBottomColor: '#cccccc',
    flexDirection: 'row',
    alignItems: 'center',
  },
  header_right_container: {position: 'absolute', right: 0},
});

export default connect(mapStateToProps, mapDispatchToProps)(NoteScreen);
