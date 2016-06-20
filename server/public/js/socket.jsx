import store from './store.jsx'
import { newOffer } from './actions.jsx';

//TODO Port must be defined from server so a template is required probably.
const url = 'ws://127.0.0.1' + socketPort + '/ws';
let socket = new WebSocket(url);

socket.onclose = () => { console.log("Socket closed..."); };

socket.onmessage = msg => {
  let json = JSON.parse(msg.data);
  json.timestamp = Date.now();
  store.dispatch(newOffer(json))
}

export default socket;
