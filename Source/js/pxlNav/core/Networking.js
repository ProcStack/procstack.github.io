
export default class Networking{
  constructor( socketio ){
    this.status=false;
    // AccessToken is grabbed from OAuth2 authentication of the account.
    this.accessToken = "";
    this.jwtToken ="";


    this.socket = io('https://www.www.com', {
      transports: ['websocket']
    });
  }

  init(){
    // Socket connected
    socket.on('connect', onConnect);
    // Socket got disconnected
    socket.on('disconnect', onDisconnect);
    // Socket is authenticated
    socket.on('authenticated', onAuthenticated);
    socket.on('unauthorized', console.error);
    /*
    socket.on('event:test', (data) => {
    console.log(data);
    // Structure as on https://github.com/StreamElements/widgets/blob/master/CustomCode.md#on-event
    });
    */
    socket.on('event', (data) => {
    console.log(data);
    // Structure as on https://github.com/StreamElements/widgets/blob/master/CustomCode.md#on-event
    });
    /*
    socket.on('event:update', (data) => {
    console.log(data);
    // Structure as on https://github.com/StreamElements/widgets/blob/master/CustomCode.md#on-session-update
    });
    socket.on('event:reset', (data) => {
    console.log(data);
    // Structure as on https://github.com/StreamElements/widgets/blob/master/CustomCode.md#on-session-update
    });
    */
  }

  onConnect() {
    console.log('Successfully connected to the websocket');
    //socket.emit('authenticate', {method: 'oauth2', token: this.accessToken});
    socket.emit('authenticate', {method: 'jwt', token: this.jwtToken});
  }

  onDisconnect() {
    console.log('Disconnected from websocket');
    this.status = false;
    onConnect()
  }

  onAuthenticated(data) {
    const {
      channelId
    } = data;
    console.log(`Successfully connected to channel ${channelId}`);
    this.status = true;
  }
}