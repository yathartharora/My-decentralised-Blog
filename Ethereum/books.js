import web3 from './web3';
import Mail from './building/BooksUpload.json';

const instance = new web3.eth.Contract(JSON.parse(Mail.interface),'0x17fb625f162156Cb5baca6382d8DdCFF8712Cf41');


export default instance;
