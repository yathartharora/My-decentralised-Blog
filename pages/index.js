import React, {Component} from 'react';
import HeadText from '../Components/Heading';
import {Header, Segment, Button, Image, Icon} from 'semantic-ui-react';
import Layout from '../Components/Layout';
import {Link} from '../routes';


class Blog extends Component{

    render(){
        return(
            <Layout>
                
                    <Header as='h1' color='black' textAlign='center' dividing>
                        <Image circular src='/myself.jpg' floated='left' />
                        CURIOUS MINDS
                        <Link route={`/newblog`}>
                        <Icon name='upload' corner='top right' size='tiny' />
                        </Link>
                        <Header.Subheader>
                            Don't Let Your Passion Die As A Quotation
                        </Header.Subheader>
                    </Header>
            </Layout>
        )
    }
    
}

export default Blog;
