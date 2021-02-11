import web3 from './web3';
import Mail from './build/Blog.json';

const instance = new web3.eth.Contract(JSON.parse(Mail.interface),'0xd5AE95A8cA038223a9Fc491b44C721917fF92587');


export default instance;