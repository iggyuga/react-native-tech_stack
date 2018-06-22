import React, { Component } from 'react';
import { Text, TouchableOpacity, View, LayoutAnimation } from 'react-native';
import { CardSection } from './common';
import { connect } from 'react-redux';
import * as actions from '../actions';

class ListItem extends Component {

	componentWillUpdate() {
		LayoutAnimation.spring();
	}

	renderDescription() {
		const { library, expanded } = this.props;

		if (expanded) {
			return (
				<CardSection>
					<Text style={{ flex: 1 }}>
						{library.description}
					</Text>
				</CardSection>
			);
		}
	}
	render() {
		const { titleStyle } = styles;
		const { id, title } = this.props.library;

		return (
			<TouchableOpacity onPress={() => this.props.selectLibrary(id)}>
				<View>
					<CardSection>
						<Text style={titleStyle}>
							{title}
						</Text>
					</CardSection>
					{this.renderDescription()}
				</View>
			</TouchableOpacity>
		);
	}
}

const styles = {
	titleStyle :{
		fontSize: 18,
		paddingLeft: 15
	},
	descriptionStyle: {
		paddingLeft: 10,
		paddingRight: 10
	}
};

//want to consume application level state add mapStateToProps
const mapStateToProps = (state, ownProps) => {
	const expanded = state.selectedLibraryID === ownProps.library.id;

	return { expanded };
};

// the purpose of the first set of parents is the mapStateToProps function
//bind action creators to this
export default connect(mapStateToProps, actions)(ListItem);
