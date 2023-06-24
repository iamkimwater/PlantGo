import React from 'react';
import {Text, View} from 'react-native';
import {HomeProps} from '../navigations/Types';

function Home(props: HomeProps) {
  return (
    <View>
      <Text style={{fontSize: 100, color: 'black'}}>Home</Text>
    </View>
  );
}

export default Home;
