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
                            <div>
                            <Segment circular style={square} inverted color="olive" >
                            <Link route={'/newblog'}>
                                <a><Icon size="huge" name="cloud upload"/><p>Upload</p></a>
                                
                            </Link>
                            </Segment>
                            <Segment circular inverted style={square} inverted color="olive">
                            <Link route={'/books'}>
                                <a><Icon name="book" size="huge"/><p >My Library</p></a>
                            </Link>
                            </Segment>
                            </div>
                            <div>
                            <Segment circular inverted style={square} inverted color="olive">

                                <a href="https://yathartharora.substack.com"><Icon name="book" size="huge"/><p >Newsletter</p></a>
                            
                            </Segment>
                            <Segment circular style={square} inverted color="olive" >
                            <a><Icon name="product hunt" size="huge"/><p>My Projects</p></a>
                            
                            </Segment>

                            <br></br>

                            <Segment color="purple">
                            
                            <Message warning>
                                <Message.Header>Write to me at:</Message.Header>
                                <br></br>
                                <a href={`https://twitter.com/YatharthArora8`}><Icon name="twitter" size="huge" /></a>
                                <a><Icon name="mail" size="huge" /></a>
                                <a href={`https://github.com/yathartharora`}><Icon name="github" size="huge" /></a>
                                <a href={`https://www.linkedin.com/in/yathartharora/`}><Icon name="linkedin" size="huge" /></a>
                            </Message>
                            </Segment>
                            </div>
                        </Grid.Column>
                    </Grid>
                    
            </Layout>
        )
    }
    
}

export default Blog;
