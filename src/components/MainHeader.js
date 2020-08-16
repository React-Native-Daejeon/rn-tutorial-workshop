import React from 'react';
import {View, Image, Text, TouchableOpacity, StyleSheet} from 'react-native';

class MainHeader extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={[styles.header_container]}>
        <Image
          style={[styles.header_profile]}
          source={require('../../assets/images/redwit.png')}
        />
        <Text style={[styles.header_text]}>RND의 간단한 노트</Text>
        <View style={[styles.header_add_container]}>
          <TouchableOpacity
            onPress={() => {
              this.props.onAddPress();
            }}
            style={[styles.header_add_btn]}>
            <Text>추가</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header_container: {
    width: '100%',
    height: 60,
    backgroundColor: '#6fa0bf50',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  header_profile: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    borderRadius: 20,
    marginRight: 10,
  },
  header_text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  header_add_container: {
    position: 'absolute',
    right: 0,
  },
  header_add_btn: {
    height: 60,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MainHeader;
