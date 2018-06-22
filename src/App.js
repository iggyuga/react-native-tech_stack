import React from 'react';
import { View } from 'react-native';

// This provider is the JSX communicator for the createStore functionality that comes from redux to react
import { Provider } from 'react-redux';

// This is a specific function from the redux library which initializes the store which holds the application state
import { createStore } from 'redux';

// This is the library of reducers in our reducers folder, /index is not needed because it is implied
import reducers from './reducers'

import { Header } from './components/common'

import LibraryList from './components/LibraryList';

const App = () => {
	return (
		// The Provider can only have 1 child component
		<Provider store={createStore(reducers)}> 
			<View style={{flex : 1}}>
				<Header headerText="Tech Stack" />
				<LibraryList />
			</View>
		</Provider>
	);
};

export default App;
