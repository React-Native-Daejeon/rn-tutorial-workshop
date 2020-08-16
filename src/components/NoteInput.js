import React from 'react';
import {ScrollView, TextInput, StyleSheet} from 'react-native';

class NoteInput extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ScrollView bounces={false} style={styles.note_conatiner}>
        <TextInput
          style={styles.note_title}
          editable={this.props.edit}
          placeholder="제목을 입력하세요"
          multiline={true}
          value={this.props.title}
          onChangeText={(text) => {
            this.props.changeTitle(text);
          }}
        />
        <TextInput
          style={styles.note_body}
          editable={this.props.edit}
          placeholder="내용을 입력하세요"
          multiline={true}
          value={this.props.body}
          onChangeText={(text) => {
            this.props.changeBody(text);
          }}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  note_conatiner: {width: '100%', padding: 10, paddingTop: 20},
  note_title: {fontSize: 20, fontWeight: 'bold', marginBottom: 10},
  note_body: {fontSize: 16},
});

export default NoteInput;
