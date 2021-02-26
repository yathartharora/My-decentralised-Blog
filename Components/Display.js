import React, {Component} from 'react';
import HeadText from '../Components/Heading';
import {Message} from 'semantic-ui-react';
import blog from '../Ethereum/blog';
import web3 from '../Ethereum/web3';


class RequestBlog extends Component{

    render(){
        const {List, Item} = Message;
        return(
            <List>
                    <Item ><a href={this.props.request.pdf}><p style={{fontSize: 20, fontWeight: "bold"}}>{this.props.request.name}</p></a></Item>
            </List>

        )
    }
}

export default RequestBlog;
