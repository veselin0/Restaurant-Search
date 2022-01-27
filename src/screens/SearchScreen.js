import React from 'react';
import {Text, StyleSheet, View, Button, TouchableOpacity} from 'react-native';

import SearchBar from '../components/SearchBar';

const SearchScreen = ({navigation}) => {
  return (
    <View>
      <SearchBar />
      <Button
        title="Go to Details Screen"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default SearchScreen;
