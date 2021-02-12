import React from 'react';
import { Header, Image, Icon, Segment } from 'semantic-ui-react';
import {Link} from '../routes';

const HeaderExampleTextAlignment = () => (
    
  <Header as='h1' icon textAlign='center' dividing>
        <Icon name="pencil alternate" circular />
            <p style={{}}>THE PASSION PAD</p>
        {/* <Link route={`/newblog`}>
        <Icon name='upload'/>
        </Link> */}
        <Header.Subheader>
            "Don't Let Your Passion Die As A Quotation"
        </Header.Subheader>
    </Header>
)

export default HeaderExampleTextAlignment
