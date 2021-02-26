import React, {Component} from 'react';
import blog from '../Ethereum/blog';
import Layout from '../Components/Layout';
import {Form, Button, Input, Header, Icon, Image, Grid} from 'semantic-ui-react';
import ipfs from '../ipfs';
import web3 from '../Ethereum/web3';
import HeadText from '../Components/Heading';

class NewBlog extends Component{


    constructor(){
        super();
        this.state={
            ipfsHash: '',
            loading: false,
            name: '',
            buffer: null,
            bookname: '',
            author: '',
            summary: '',
            load: false,
            link: ''
        }
        this.onsubmit = this.onsubmit.bind(this);
        this.bookSubmit = this.bookSubmit.bind(this);
    }
    

    onsubmit = async(event) => {
        event.preventDefault();
        this.setState({loading: true});
        try {
            const accounts = await web3.eth.getAccounts();
            console.log(accounts[0]);
            await blog.methods.Upload(this.state.name,this.state.link).send({
                from: accounts[0],
                gas: '1000000'
            });
        } catch (error) {
            
        }
        this.setState({loading: false});
    }

    bookSubmit = async(event) => {
        event.preventDefault();
        this.setState({load: true});
        try {
            const accounts = await web3.eth.getAccounts();
            console.log(accounts[0]);
            await blog.methods.BookUpload(this.state.bookname, this.state.author, this.state.summary).send({
                from: accounts[0],
                gas: '1000000'
            })
        } catch (error) {
            
        }

        this.setState({load: false});

    }

    render(){
        return(
            <Layout>

                <HeadText />
                <Grid column={2}  padded="horizontally">
                <Grid.Column width={6} floated="left">
                <p style={{fontWeight: "bold", fontSize: 20}}>Upload Thread</p>
                <Form onSubmit={this.onsubmit}>
                    <Form.Field>
                        <label> Name</label>
                        <Input 
                         value = {this.state.name}
                         onChange = {event => this.setState({name: event.target.value})}
                        />

                        <label>Link</label>
                        <Input 
                            value = {this.state.link}
                            onChange = {event => this.setState({link: event.target.value})}
                        />
                    </Form.Field>
                    <Button secondary loading={this.state.loading}>Submit</Button> 
                    <Button primary onClick={this.generate}>Generate</Button> 
                </Form>
                </Grid.Column >
                <Grid.Column width={4}>
                    <p style={{fontWeight: "bold", fontSize: 20}}>Upload Book Details</p>
                    <Form onSubmit={this.bookSubmit}>
                        <Form.Field>
                        <label>Book Name</label>
                        <Input
                         value = {this.state.bookname}
                         onChange= {event => this.setState({bookname: event.target.value})}
                        />

                        <label>Author Name</label>
                        <Input
                        value = {this.state.author}
                        onChange = {event => this.setState({author: event.target.value})}
                        />
                        </Form.Field>
                        <label>Summary</label>
                        <Form.TextArea
                         value={this.state.summary}
                         onChange = {event => this.setState({summary: event.target.value})}
                        />
                        <Button loading={this.state.load}>Submit</Button>
                    </Form> 

                </Grid.Column>
                </Grid>

            </Layout>
        )
    }
}

export default NewBlog;