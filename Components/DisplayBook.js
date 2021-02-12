import React, {Component} from 'react';
import HeadText from '../Components/Heading';
import {Card, Image} from 'semantic-ui-react';
import blog from '../Ethereum/blog';
import web3 from '../Ethereum/web3';


class RequestBlog extends Component{

    render(){
        const {Header, Meta, Content, Description} = Card;
        return(
            <Card>
                <Image src='/book.jpg' wrapped ui={false} />
            <Content>
                <Header>{this.props.request.Book_name}</Header>
                <Meta>{this.props.request.author}</Meta>
                <Description>{this.props.request.summary}</Description>
            </Content>
            </Card>

        )
    }
}

export default RequestBlog;