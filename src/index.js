import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PropTypes from 'prop-types';

function Envelope({envInfo}) {
  return(
    <div className="envelope">
      <Sender sender={envInfo.sender}/>
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

ReactDOM.render(<Envelope envInfo={addressInfo}/>, document.getElementById('root'));


