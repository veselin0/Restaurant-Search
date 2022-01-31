import React, { useState } from 'react';
import { Text, StyleSheet, View, Button, ScrollView } from 'react-native';

import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
	const [term, setTerm] = useState('');
	const [searchApi, results, errorMessage] = useResults();

    const submit = () => searchApi(term);

	const filterResultsByPrice = price => {
		return results.filter(result => {
			return result.price === price;
		});
	};

	return (
		<>
			<SearchBar
				term={term}
				onTermChange={setTerm}
				onTermSubmit={submit}
			/>
			{errorMessage ? <Text>{errorMessage}</Text> : null}
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
