import { combineReducers } from 'redux';

// We must explicitly wire up our reducers
import LibraryReducer from './LibraryReducer';
import SelectionReducer from './SelectionReducer';


export default combineReducers({
	// libraries: () => []
	libraries: LibraryReducer,
	selectedLibraryID: SelectionReducer
});


// console.log(store.getState());
// { libraries: [] }

