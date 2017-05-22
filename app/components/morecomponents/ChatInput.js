import React from 'react';

class ChatInput extends React.Component {
    constructor(props) {
        super(props);
        this.state={message:""}
    }


 sendMessage(){


 }
 k(){
   console.log(this,"this")

 }

savemessage(e){
  console.log("e.target.value",e.target.value)
  this.setState({message:e.target.value})

}
    render() {
      console.log("this.state.message",this.state.message)
      console.log("this.props.pubnub",this.props)
        return (
      <div style={{height:"165px",borderBottom: '1px solid #cccccc'}}>
       <input type="text" value ={this.state.message} onChange={this.savemessage.bind(this)}/> <button onSubmit={this.sendMessage.bind(this)}>Submit</button>
      <button onClick={this.props.k()}  value="second">k button</button>
      </div>
    );
    }
}
export default ChatInput;
