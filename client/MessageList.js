import React from 'react';
import ReactDOM from 'react-dom';

import styles from './MessageList.css';

const Message = props => (
  <div className={styles.Message}>
    <strong>{props.from} :</strong>
    <span className = {styles.SingleMessage}>{props.text}</span>
  </div>
);

const MessageList = props => (
  <div className={styles.MessageList}>
    {
      props.messages.map((message, i) => {
        return (
          <Message
            key={i}
            from={message.from}
            text={message.text}
          />
        );
      })
    }
  </div>
);

export default MessageList;