import React from 'react';
import {SafeAreaView, Text, Button} from 'react-native';
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
          return <Text key={`${note}::${index}`}>{note.title}</Text>;
        })}
      </SafeAreaView>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
