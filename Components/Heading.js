import React from 'react';
import { Header, Image, Icon, Segment } from 'semantic-ui-react';
import {Link} from '../routes';

const HeaderExampleTextAlignment = () => (
    
  <Header as='h1' color='black' textAlign='center' dividing>
        <Image circular src='/myself.jpg' floated='left' />
            CURIOUS MINDS
        <Link route={`/newblog`}>
        <Icon name='upload' />
        </Link>
        <Header.Subheader>
            Don't Let Your Passion Die As A Quotation
        </Header.Subheader>
    </Header>
)

export default HeaderExampleTextAlignment
