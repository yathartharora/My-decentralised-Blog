import web3 from './web3';
import Mail from './build/Blog.json';

const instance = new web3.eth.Contract(JSON.parse(Mail.interface),'0x91B5d935875F85F3450Cd1113424d7BDBd254240');


export default instance;
