import React from 'react';
import {Text, StyleSheet, View, Button, TouchableOpacity} from 'react-native';

const SearchScreen = ({navigation}) => {
  return (
    <View>
      <Text style={styles.text}>Hi, Gocho!</Text>
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
