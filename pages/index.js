import React, {Component} from 'react';
import HeadText from '../Components/Heading';
import {Header, Segment, Button, Image, Icon, Message, Grid} from 'semantic-ui-react';
import Layout from '../Components/Layout';
import {Link} from '../routes';
import blog from '../Ethereum/blog';
import Display from '../Components/Display';
import RequestBlog from '../Components/Display';

const List =[]



class Blog extends Component{

    static async getInitialProps(props){
        const output = await blog.methods.display().call();

        const requestCount = output.length;
        const requests = await Promise.all(
            Array(parseInt(requestCount)).fill().map((element,index) => {
                return blog.methods.f(index).call()
            }) 
        );

        return {requests, requestCount};
    }

    renderRow() {
        return this.props.requests.map((request, index) => {
            return ( <RequestBlog 
                request = {request}
            />
            );
        });
    }

    render(){
        return(
            <Layout>
                    <HeadText />
                    <Message positive size="big">
                        <Message.Header>WELCOME!</Message.Header>
                        <p>I write Twitter Threads on a variety of a topics - Decentralisation, Money, Psychology. You will find notes of many books that I have read and the projects that I have made </p>
                    </Message>
    
                    <Grid>
                        <Grid.Column width={6} floated="left">
                        {this.renderRow()}
                        </Grid.Column>
                    </Grid>
                    
            </Layout>
        )
    }
    
}

export default Blog;
