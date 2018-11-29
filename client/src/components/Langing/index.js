import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {compose} from 'recompose';
//Decorator to use scrollTop and width of the browser
import appDesign from '../../decorators/scroll_resize_decorator';
import {connect} from 'react-redux';

//Landing Components
import BlockOne from './BlockOne/BlockOne';
import BlockTwo from './BlockTwo/BlockTwo';
import BlockThree from './BlockThree/BlockThree';
import BlockFour from './BlockFour/BlockFour';
import BlockFive from './BlockFive/BlockFive';
import BlockSix from "./BlockSix/BlockSix";
import BlockSeven from "./BlockSeven/BlockSeven";
import BlockEight from "./BlockEight/BlockEight";
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
          <BlockTwo
            width={width}
          />
          <BlockThree
            width={width}
            first_image={IMAGES.MACBOOK_FRONT}
            second_image={IMAGES.MACBOOK_ROTATED}
          />
          <BlockFour
            width={width}
            first_image={IMAGES.IPAD_FRONT}
            second_image={IMAGES.IPAD_ROTATED}
          />
          <BlockFive
            width={width}
            scroll={scroll}
          />
          <BlockSix
            width={width}
            image={IMAGES.SAMSUNG}
          />
          <BlockSeven
            width={width}
          />
          <BlockEight
            width={width}
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
