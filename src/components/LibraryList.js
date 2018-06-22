import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';

class LibraryList extends Component {
	//lifecycle method, we can tell the view where to get its data from
	componentWillMount() {
		const ds = new ListView.DataSource({
			// object with property
			rowHasChanged: (r1, r2) => r1 !== r2
		});

		// we have a data source, take list of libraries
		this.dataSource = ds.cloneWithRows(this.props.libraries);
	}
	//element in the list that it is trying to render
	renderRow(library) {
		return <ListItem library={library} />
	}

	render() {
		return (
			<ListView
				dataSource={this.dataSource}
				renderRow={this.renderRow}
			/>
		);
	}
}

// grabs the application state and maps attributes to Props to our library list
const mapStateToProps = state => {
	return { libraries: state.libraries };
};

// connect gets invoked which returns another function which calls upon LibraryList 2 step
export default connect(mapStateToProps)(LibraryList);