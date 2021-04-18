import React, {Component} from 'react';
import blog from '../Ethereum/blog';
import Layout from '../Components/Layout';
import {Form, Button, Input, Header, Icon, Image, Grid} from 'semantic-ui-react';
import ipfs from '../ipfs';
import web3 from '../Ethereum/web3';
import HeadText from '../Components/Heading';
import book from '../Ethereum/books';
import newsletter from '../Ethereum/newsletter';

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
            link: '',
            title: '',
            letterlink: '',
            edition: '',
            letterloading: false,
            visible: true
        }
        this.onsubmit = this.onsubmit.bind(this);
        this.bookSubmit = this.bookSubmit.bind(this);
        this.captureFile = this.captureFile.bind(this);
        this.generate = this.generate.bind(this);
        this.newslettersubmit = this.newslettersubmit.bind(this);
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
            await book.methods.BookUpload(this.state.bookname, this.state.ipfsHash, this.state.summary).send({
                from: accounts[0],
                gas: '1000000'
            })
        } catch (error) {
            
        }
        this.setState({load: false});
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
        this.setState({active: false, visible: false});
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

    newslettersubmit = async(event) => {
        event.preventDefault();
        this.setState({letterloading: true})

        try {
            const accounts = await web3.eth.getAccounts();
            await newsletter.methods.Newsletterupload(this.state.title,this.state.letterlink,this.state.edition).send({
                from: accounts[0],
                gas: '1000000'
            })
        } catch (error) {
            
        }
        this.setState({letterloading: false})
    }


    render(){
        return(
            <Layout>

                <HeadText />
                <Grid column={3}  divided>
                <Grid.Column width={5}>
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
                </Form>
                </Grid.Column>
                <Grid.Column width={5}>
                    <p style={{fontWeight: "bold", fontSize: 20}}>Upload Book Details</p>
                    <Form onSubmit={this.bookSubmit}>
                        <Form.Field>
                        <label>Book Name</label>
                        <Input
                         value = {this.state.bookname}
                         onChange= {event => this.setState({bookname: event.target.value})}
                        />

                        <label>Upload Image</label>
                        <Input
                        type='file'
                        onChange = {this.captureFile}
                        />
                        </Form.Field>
                        <label>Summary</label>
                        <Form.TextArea
                         value={this.state.summary}
                         onChange = {event => this.setState({summary: event.target.value})}
                        />
                        <Button primary loading={this.state.load} disabled={this.state.visible}>Submit</Button>
                        <Button secondary onClick={this.generate}>Generate</Button> 
                    </Form> 

                </Grid.Column>
                    
                <Grid.Column width={4}>
                    <p style={{fontWeight: "bold", fontSize: 20}}>Upload Newsletter</p>
                    <Form onSubmit={this.newslettersubmit}>
                        <Form.Field>
                            <label>Title</label>
                            <Input 
                             value = {this.state.title}
                             onChange = {event => this.setState({title: event.target.value})}
                              />
                            <label>Link</label>
                            <Input 
                             value = {this.state.letterlink}
                             onChange = {event => this.setState({letterlink: event.target.value})}
                            />
                            <label>Edition</label>
                            <Input 
                             value = {this.state.edition}
                             onChange = {event => this.setState({edition: event.target.value})}
                            />
                        </Form.Field>
                        <Button secondary loading={this.state.letterloading}>Submit</Button>
                    </Form>
                </Grid.Column>
                </Grid>

            </Layout>
        )
    }
}

export default NewBlog;