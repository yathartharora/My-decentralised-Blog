import web3 from './web3';
import Mail from './newsbuild/newsletter.json';

const instance = new web3.eth.Contract(JSON.parse(Mail.interface),'0x8b292CEC9d45b26C7e89E79516cDb69F8AB096d1');


export default instance;
