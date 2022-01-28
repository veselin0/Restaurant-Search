import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';

const SearchScreen = ({ navigation }) => {
	const [term, setTerm] = useState('');
	const [searchApi, results, errorMessage] = useResults();

	return (
		<View>
			<SearchBar
				term={term}
				onTermChange={setTerm}
				onTermSubmit={searchApi}
			/>
			{errorMessage ? <Text>{errorMessage}</Text> : null}
			<Text>We have found {results.length} results</Text>
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
