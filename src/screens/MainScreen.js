import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import {connect} from 'react-redux';
import {selectNote} from '../actions/actions';
import MainHeader from '../components/MainHeader';
import NotePreview from '../components/NotePreview';

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
      this.onGoNote();
    }
  }

  onGoNote() {
    this.props.navigation.navigate('Note');
  }

  render() {
    const notes = this.props.notes;
    return (
      <SafeAreaView>
        <MainHeader
          onAddPress={() => {
            this.onGoNote();
          }}
        />
        <ScrollView bounces={false}>
          {notes.map((note, index) => {
            return (
              <NotePreview
                key={`${note.title}::${index}`}
                onSelect={() => {
                  this.props.selectNote(index);
                }}
                note={note}
              />
            );
          })}
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
