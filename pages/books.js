import React, {Component} from 'react';
import blog from '../Ethereum/blog';
import HeadText from '../Components/Heading';
import Layout from '../Components/Layout';
import RequestBook from '../Components/DisplayBook';
import {Card} from 'semantic-ui-react';

class Books extends Component{

    static async getInitialProps(props){
        const output = await blog.methods.Bookdisplay().call();

        const requestCount = output.length;
        const requests = await Promise.all(
            Array(parseInt(requestCount)).fill().map((element,index) => {
                return blog.methods.book(index).call()
            }) 
        );

        return {requests, requestCount};
    }

    renderRow() {
        return this.props.requests.map((request, index) => {
            return ( 
            <RequestBook
                request = {request}
            />
            );
        });
    }
    render(){
        return(
            <Layout>
                <HeadText />
                <Card.Group itemsPerRow={3}>
                {this.renderRow()}
                </Card.Group>

            </Layout>
        )
    }
}

export default Books;