import React, {Component} from 'react';
import blog from '../Ethereum/blog';
import Layout from '../Components/Layout';
import {Form, Button, Input, Header, Icon, Image} from 'semantic-ui-react';
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
        }
        this.captureFile = this.captureFile.bind(this);
        this.onsubmit = this.onsubmit.bind(this);
        this.generate = this.generate.bind(this);
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


    render(){
        return(
            <Layout>

                <HeadText />
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
            </Layout>
        )
    }
}

export default NewBlog;