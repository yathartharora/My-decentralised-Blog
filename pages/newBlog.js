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
            load: false
        }
        this.captureFile = this.captureFile.bind(this);
        this.onsubmit = this.onsubmit.bind(this);
        this.generate = this.generate.bind(this);
        this.bookSubmit = this.bookSubmit.bind(this);
    }
    

    onsubmit = async(event) => {
        event.preventDefault();
        this.setState({loading: true});
        try {
            const accounts = await web3.eth.getAccounts();
            console.log(accounts[0]);
            await blog.methods.Upload(this.state.name,this.state.ipfsHash).send({
                from: accounts[0],
                gas: '1000000'
            });
        } catch (error) {
            
        }
        this.setState({loading: false});
    }


    generate(event) {
        event.preventDefault();
        ipfs.files.add(this.state.buffer, (err, res) => {
            if(err){
                console.log(err)
                return
            }
            this.setState({ipfsHash: res[0].hash})
            console.log('ipfsHash: ', this.state.ipfsHash);
        })
        this.setState({active: false});
    }

    captureFile(event) {
        event.preventDefault();
        console.log('Capture File...')

        const file = event.target.files[0];
        const reader = new window.FileReader();
        reader.readAsArrayBuffer(file);

        reader.onloadend = () => {
            this.setState({buffer: Buffer(reader.result)})
            console.log('buffer ',this.state.buffer);
        }
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

                        <label>Upload File</label>
                        <Input 
                            type='file'
                            onChange = {this.captureFile}
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