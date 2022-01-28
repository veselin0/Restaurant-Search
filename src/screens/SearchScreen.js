import React, { useState } from 'react';
import { Text, StyleSheet, View, Button, ScrollView } from 'react-native';

import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = ({ navigation }) => {
	const [term, setTerm] = useState('');
	const [searchApi, results, errorMessage] = useResults();

	const filterResultsByPrice =  price => {
		return results.filter(result => {
			return result.price === price;
		});
	};

	return (
		<>
			<SearchBar
				term={term}
				onTermChange={setTerm}
				onTermSubmit={searchApi}
			/>
			{errorMessage ? <Text>{errorMessage}</Text> : null}
			<ScrollView>
				<ResultsList
					results={filterResultsByPrice('$')}
					title="Cost Effective"
                    navigation={navigation}
				/>
				<ResultsList
					results={filterResultsByPrice('$$')}
					title="Bit Pricier"
                    navigation={navigation}
				/>
				<ResultsList
					results={filterResultsByPrice('$$$')}
					title="Big Spender"
                    navigation={navigation}
				/>
				<ResultsList
					results={filterResultsByPrice('$$$$')}
					title="Rockefeller"
                    navigation={navigation}
				/>
			</ScrollView>
		</>
	);
};

const styles = StyleSheet.create({
	text: {
		fontSize: 30,
	},
});

export default SearchScreen;
