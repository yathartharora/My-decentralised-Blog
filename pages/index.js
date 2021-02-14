import React, {Component} from 'react';
import HeadText from '../Components/Heading';
import {Header, Segment, Button, Image, Icon, Message, Grid} from 'semantic-ui-react';
import Layout from '../Components/Layout';
import {Link} from '../routes';
import blog from '../Ethereum/blog';
import Display from '../Components/Display';
import RequestBlog from '../Components/Display';

const List =[]

const square = { width: 150, height: 150 }


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
                        <p>This Blog is a way to organise all my threads/articles that I write on different platforms - Twitter, LinkedIn, GFG, Medium and put them at one place.
                            The Blog - 'THE PASSION PAD' is decentralised and all the files are uploaded on the Inter Planetary File System. I am 
                            an avid reader and you will often find me summarising a Book in a long Twitter thread - Yes that's who I am, have fun experiencing Yatharthism!
                            I have also added a list of the Books I have read and the goal is to assimilate as much knowledge as I can while I exist to suffer!
                            The topics include - Blockchain, Decentralisation, Money and sometimes Philosophical!(Yup.. No Love Stories sadly!) DM's are always open for the suggestions.
                        </p>

                        <p style={{fontStyle:'italic'}}>Faaar from Social media yet so close to Twitter! Cheers</p>
                        <p style={{fontStyle:'italic'}}> ~ Yatharth Arora</p>
                    </Message>
    
                    <Grid columns={2}>
                        <Grid.Column width={6} floated="left">
                        <div style={{fontSize:30, fontWeight:'bold', fontSmooth:10, marginTop: 10}}>Threads/Articles:</div>
                        <p>(Hover over any link and start reading) </p>
                            <Segment color="red">
                        {this.renderRow()}
                        </Segment>
                        </Grid.Column>

                        <Grid.Column width={6}>

                            <Segment color="purple">
                            <Link route={'/books'}>
                            <Button primary icon labelPosition="left" size="big">
                            <Icon name="book" size="large"/>
                                My Library
                            </Button>
                            </Link>

                            <Message warning>
                                <Message.Header>For Admin Only!</Message.Header>
                                <br></br>
                                <Link route={'/newblog'}>
                                    <Button icon labelPosition="left" size="big">
                                        <Icon size="big" name="cloud upload"/>
                                        Upload
                                    </Button>
                                </Link>
                            </Message>
                            </Segment>
                            <br></br>
                            <div>
                                <p style={{fontWeight:'bold', fontSize:30}}>CONTACT</p>
                            <Segment circular style={square} inverted color="olive" >
                                <Icon name="pencil" size="huge" color="blue"></Icon>
                            </Segment>
                            <Segment circular inverted style={square} inverted color="grey">
                                <a href={`https://twitter.com/YatharthArora8`}><Icon name="twitter" size="huge" color="blue"></Icon></a>
                            </Segment>
                            </div>
                            <div>
                            <Segment circular inverted style={square} inverted color="grey">
                            <a href={`https://twitter.com/YatharthArora8`}><Icon name="mail" size="huge" color="blue"></Icon></a>
                            </Segment>
                            <Segment circular style={square} inverted color="olive" >
                            <Icon name="pencil" size="huge" color="blue"></Icon>
                            </Segment>
                            </div>
                        </Grid.Column>
                    </Grid>
                    
            </Layout>
        )
    }
    
}

export default Blog;
