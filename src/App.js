import React from 'react';
import { View } from 'react-native';

// This provider is the communicator for the createStore functionality that comes from redux
import { Provider } from 'react-redux';

// This is a specific function from the redux library
import { createStore } from 'redux';

// This is the library of reducers in our reducers folder, /index is not needed because it is implied
import reducers from './reducers'

const App = () => {
	return (
		<Provider store={createStore(reducers)}>
			<View />
		</Provider>
	);
};

export default App;
