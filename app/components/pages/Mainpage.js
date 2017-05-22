import React from 'react';
import {bgblue}  from '../../styles/bgblue.scss';
import {toplogo}  from '../../styles/bgblue.scss';
import Projectview from '../morecomponents/Projectview';
import Projectheading from '../morecomponents/Projectheading';
import ChatInput from '../morecomponents/ChatInput';
import Chathistory from  '../morecomponents/Chathistory';
// import {menuitemmargin} from '../../styles/bgblue.scss';
class Mainpage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          userID: Math.round(Math.random() * 1000000).toString(),
          history: [],
  };
    }

    componentDidMount(){
      this.PubNub = PUBNUB.init({
    publish_key: 'pub-c-8dbbba2a-bb3e-49a4-bb60-9197bf042003',
    subscribe_key: 'sub-c-0a13b8e4-3e55-11e7-86e2-02ee2ddab7fe',
    ssl: (location.protocol.toLowerCase() === 'https:'),
  });

  this.PubNub.subscribe({
    channel: 'ReactChat',
    message: (message) =>{
    console.log("messages from server",message)
    this.setState({
    history: this.state.history.concat(message)
  })

}

  });
    }

    sendMessage = (message) => {
  // for now this will let us know things work.  `console` will give us a
  // warning though
  console.log('sendMessage', message);

  this.PubNub.publish({
     channel: 'ReactChat',
     message: this.state.message,
   });
   this.setState({message:""})
}
    render() {
      console.log("this in main page",this)
        let cssClasses = `${bgblue} col-md-2`;
        return (
      <div className="container-fluid">
        <div className="row">
          <div className={cssClasses}>

          <a href="https://www.w3schools.com">
            <img className={toplogo} border="0" alt="W3Schools" src="https://www.moxtra.com/service3/themes/images/logo.3e30711f.svg" width="100" height="100"/>
            </a>

          <a href="https://www.w3schools.com">
            <i style= {{ color: 'white' }} className="fa fa-comment fa-2x" aria-hidden="true"></i>
            </a>&nbsp;&nbsp;TimeLine<br/>
          <a href="https://www.w3schools.com">
            <i style= {{ color: 'white', marginTop: '15px' }} className="fa fa-snowflake-o fa-2x" aria-hidden="true"></i>
            </a>&nbsp;&nbsp;Meet<br/>
          <a href="https://www.w3schools.com">
            <i style= {{ color: 'white', marginTop: '15px' }} className="fa fa-puzzle-piece fa-2x" aria-hidden="true"></i>
            </a>&nbsp;&nbsp;Integrations<br/>
          <a href="https://www.w3schools.com">
            <i style= {{ color: 'white', marginTop: '15px' }} className="fa fa-users fa-2x" aria-hidden="true"></i>
            </a>&nbsp;&nbsp;Contacts<br/>
          <a href="https://www.w3schools.com">
            <i style= {{ color: 'white', marginTop: '15px' }} className="fa fa-list fa-2x" aria-hidden="true"></i>
            </a>&nbsp;&nbsp;Categories<br/>
          <a href="https://www.w3schools.com">
            <i style= {{ color: 'white', marginTop: '15px' }} className="fa fa-user fa-2x" aria-hidden="true"></i>
            </a>&nbsp;&nbsp;Ankur<br/>
          <a href="https://www.w3schools.com">
            <i style= {{ color: 'white', marginTop: '15px' }} className="fa fa-check fa-2x" aria-hidden="true"></i>
            </a>&nbsp;&nbsp;My Todo<br/>
          <a href="https://www.w3schools.com">
            <i style= {{ color: 'white', marginTop: '15px' }} className="fa fa-star-o fa-2x" aria-hidden="true"></i>
            </a>&nbsp;&nbsp;Favorites<br/>
          <a href="https://www.w3schools.com">
            <i style= {{ color: 'white', marginTop: '15px' }} className="fa fa-at fa-2x" aria-hidden="true"></i>
            </a>&nbsp;&nbsp;Mentions<br/>
          <a href="https://www.w3schools.com">
            <i style= {{ color: 'white', marginTop: '15px' }} className="fa fa-question fa-2x" aria-hidden="true"></i>
            </a>&nbsp;&nbsp;Help & support<br/>
          </div>
          <div style={{top:"0px",bottom:"0px",borderRight: '1px solid #cccccc'}} className="col-md-3">
            <Projectheading/>
            <Projectview/>

          </div>
          <div className="col-md-7">
            <ChatInput  pubnub={this.PubNub} k={this.sendMessage.bind(this)} /><br/>
            <Chathistory />
          </div>

        </div>

      </div>
    );
    }
}
export default Mainpage;
