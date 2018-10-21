import React, { Component } from 'react';
import {
  Text,
  TouchableWithoutFeedback,
  View,
  LayoutAnimation
} from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

class ListItem extends Component {
  componentWillUpdate() {
    LayoutAnimation.linear();
  }

  renderHeader() {
    const { titleStyle, titleStyleExpanded } = styles;
    const { expanded } = this.props;
    const { title } = this.props.library;
      return (
        <CardSection>
          <Text style={expanded ? titleStyleExpanded : titleStyle}>
            {title}
          </Text>
        </CardSection>
      );
  }

  renderDescription() {
    const { library, expanded } = this.props;
    const { contentStyle } = styles;

    if (expanded) {
      return (
        <CardSection>
          <Text style={ contentStyle }>
            {library.description}
          </Text>
        </CardSection>
      );
    }
  }

  render() {
    const { id } = this.props.library;

    return (
      <TouchableWithoutFeedback
        onPress={() => this.props.selectLibrary(id)}
      >
        <View>
          {this.renderHeader()}
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    textAlign: 'center',
  },
  titleStyleExpanded: {
    fontSize: 18,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: '#457924',
    textAlign: 'center',
  },
  descriptionStyle: {
    paddingLeft: 10,
    paddingRight: 10
  },
  contentStyle: {
    flex: 1,
    flexDirection: 'row',
    padding: 20,
  }
};

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedLibraryId === ownProps.library.id;

  return { expanded };
};

export default connect(mapStateToProps, actions)(ListItem);
