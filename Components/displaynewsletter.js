import React, {Component} from 'react';
import {Message} from 'semantic-ui-react';


class RequestLetter extends Component{

    render(){
        const {List, Item} = Message;
        return(
            <List ordered >
                    <Item ><a href={this.props.i.link}><p style={{fontSize: 20, fontWeight: "bold"}}>{this.props.i.name} - {this.props.i.month}</p></a></Item>
            </List>

        )
    }
}

export default RequestLetter;
