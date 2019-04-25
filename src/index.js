import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PropTypes from 'prop-types';

function Envelope({envInfo}) {
  return(
    <div className="envelope">
      <Sender sender={envInfo.sender}/>
    
     <div className="receiver-container">
     <Receiver receiver={envInfo.receiver}/>
   </div>
   </div>
      
    
  )
}

var addressInfo = {
    sender:{
      senderName: "Mr. Sam",
      senderAddress: "456 Lane",
      senderState: "Denver, CO 80202"
      },
    receiver: {
      receiverName:"Mr.Bob",
      receiverAddress:"902 Pembrook Loop",
      receiverState:"San Jose, CA 90210"
    }
  
  
}

function Sender({sender}){
  const {senderName, senderAddress, senderState} = sender;
  return (
    <div className="send">
      <span>
      {senderName}
      </span> <br></br>
      <span>
      {senderAddress}
      </span><br></br>
      <span>
      {senderState}
      </span><br></br>
  </div>  
  )
}

function Receiver({receiver}){
  const { receiverName, receiverAddress,receiverState} = receiver; 
  return(
  
      <div className="receiver">
          <span>
          {receiverName}
          </span> <br></br>
          <span>
          {receiverAddress}
          </span><br></br>
          <span>
          {receiverState}
          </span><br></br>
      </div>

  );
}

ReactDOM.render(<Envelope envInfo={addressInfo}/>, document.getElementById('root'));


