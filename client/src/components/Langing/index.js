import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {compose} from 'recompose';
//Decorator to use scrollTop and width of the browser
import appDesign from '../../decorators/scroll_resize_decorator';
import {connect} from 'react-redux';

//Landing Components
import BlockOne from './BlockOne/BlockOne';
//End of landing components

class Landing extends Component {
  render() {
    const config = this.props.initialConfiguration;
    //Render the component when the configuration is fetched
    if (config.fetched) {
      const IMAGES = config.data.BASIC_IMAGES;
      const {width, scroll} = this.props;
      return (
        <div id="landing">
          <BlockOne
            width={width}
            image={IMAGES.FIRST_IPAD}
          />
        </div>
      );
    }
    return null;
  }
}

export default compose(
  withRouter,
  appDesign,
  connect(({initialConfiguration}) => ({initialConfiguration}))
)(Landing);
