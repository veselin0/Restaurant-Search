import { useState, useEffect } from 'react';
import yelp from '../api/yelp';

export default () => {
    const [results, setResults] = useState([]);
	const [errorMessage, setErrorMessage] = useState('');

	const searchApi = async searchTerm => {
		try {
            console.log({ searchTerm });
			const response = await yelp.get('/search', {
				params: {
					limit: 50,
					term: searchTerm,
					location: 'Boston',
				},
			});
			setResults(response.data.businesses);
            // setErrorMessage('');
		} catch (err) {
            console.error(err);
			setErrorMessage('Something went wrong');
		}
	};

	useEffect(() => {
		searchApi('pasta');
	}, []);

    return [searchApi, results, errorMessage];
};
