import web3 from './web3';
import Mail from './build/Blog.json';

const instance = new web3.eth.Contract(JSON.parse(Mail.interface),'0x34A4355e91c64144901d02C299A76201130fc6d5');


export default instance;
