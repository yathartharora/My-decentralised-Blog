import React from 'react';
import { Header, Image, Icon, Segment } from 'semantic-ui-react';
import {Link} from '../routes';
import Head from 'next/head';

const square = { width: 175, height: 175 }

const HeaderExampleTextAlignment = () => (
    
  <Header as='h1' icon textAlign='center' dividing>
            <div style={{marginLeft: 300, marginBottom:10}}>
        <Segment circular style={square}>
            <Header as='h1'>
                THE
            </Header>
        </Segment>
        <Segment circular inverted style={square}>
            <Header as='h1'>
                PASSION
            </Header>
        </Segment>
        <Segment circular style={square}>
            <Header as='h1'>
                PAD
            </Header>
        </Segment>
        </div>
        <Header.Subheader>
            "Don't Let Your Passion Die As A Quotation"
        </Header.Subheader>
    </Header>
)

export default HeaderExampleTextAlignment
