import React, { useState } from 'react';
import { Text, StyleSheet, View, Button, ScrollView } from 'react-native';

import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = ({ navigation }) => {
	const [term, setTerm] = useState('');
	const [searchApi, results, errorMessage] = useResults();

	const filterResultsByPrice = price => {
		return results.filter(result => {
			return result.price === price;
		});
	};

	return (
		<View>
			<SearchBar
				term={term}
				onTermChange={setTerm}
				onTermSubmit={searchApi}
			/>
			{errorMessage ? <Text>{errorMessage}</Text> : null}
			<Text>We have found {results.length} results</Text>
			<ScrollView>
				<ResultsList
					results={filterResultsByPrice('$')}
					title="Cost Effective"
				/>
				<ResultsList
					results={filterResultsByPrice('$$')}
					title="Bit Pricier"
				/>
				<ResultsList
					results={filterResultsByPrice('$$$')}
					title="Big Spender"
				/>
				<ResultsList
					results={filterResultsByPrice('$$$$')}
					title="Rockefeller"
				/>
				<Button
					title="Go to Details Screen"
					onPress={() => navigation.navigate('Details')}
				/>
			</ScrollView>
		</View>
	);
};

const styles = StyleSheet.create({
	text: {
		fontSize: 30,
	},
});

export default SearchScreen;
