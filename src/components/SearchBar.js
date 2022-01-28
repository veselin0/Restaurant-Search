import React from 'react';
import { View, TextInput, StyleSheet, Image } from 'react-native';

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
	return (
		<View style={styles.background}>
			<Image
				style={styles.icon}
				source={require('../../assets/search-line.png')}
			/>
			<TextInput
				style={styles.input}
				placeholder="Search"
				autoCorrect={false}
				autoCapitalize="none"
				value={term}
				onChangeText={onTermChange}
				onEndEditing={onTermSubmit}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	background: {
		backgroundColor: '#9aa69d',
		height: 50,
		borderRadius: 5,
		marginHorizontal: 15,
		flexDirection: 'row',
        marginBottom: 10,
	},
	icon: {
		height: 30,
		alignSelf: 'center',
		marginHorizontal: 15,
	},
	input: {
		flex: 1,
		fontSize: 18,
	},
});

export default SearchBar;
