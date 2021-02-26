import React, {Component} from 'react';
import HeadText from '../Components/Heading';
import {Card, Image} from 'semantic-ui-react';
import blog from '../Ethereum/books';
import web3 from '../Ethereum/web3';


class RequestBlog extends Component{

    render(){
        const {Header, Meta, Content, Description} = Card;
        return(
            <Card>
                <Image src={`https://ipfs.io/ipfs/${this.props.request.author}`} size="large"/>
            <Content>
                <Header>{this.props.request.Book_name}</Header>
                <Description>{this.props.request.summary}</Description>
            </Content>
            </Card>

        )
    }
}

export default RequestBlog;