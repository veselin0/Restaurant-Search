import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import yelp from '../api/yelp';

const ResultsShowScreen = ({ route }) => {
	const [result, setResult] = useState(null);
	const { id } = route.params;

	const getResult = async id => {
		const response = await yelp.get(`/${id}`);
		setResult(response.data);
	};

	useEffect(() => {
		getResult(id);
	}, []);

	if (!result) {
		return null;
	}

	return (
		<View style={styles.screen}>
			<>
				<Text style={styles.text}>{result.name}</Text>

				<FlatList
					data={result.photos}
					keyExtractor={photo => photo}
                    contentContainerStyle={styles.list}
					renderItem={({ item }) => {
						return (
							<Image
								style={styles.image}
								source={{ uri: item }}
							/>
						);
					}}></FlatList>
			</>
		</View>
	);
};

const styles = StyleSheet.create({
	text: {
		marginVertical: 12,
		fontSize: 18,
		fontWeight: 'bold',
        textAlign: 'center',
	},
    screen: {
        flex: 1,
    },
	list: {
		alignItems: 'center',
        paddingBottom: 12,
        paddingHorizontal: 12,
	},
	image: {
		height: 300,
		width: 300,
		marginVertical: 8,
		
	},
});

export default ResultsShowScreen;
