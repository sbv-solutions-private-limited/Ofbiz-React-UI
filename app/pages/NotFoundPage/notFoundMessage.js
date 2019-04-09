import React from 'react';
import UnderCon from '../../images/underConstruction.png';

class NotFoundMessage extends React.Component {
  render() {
    return (
      <div>
        <img
          src={UnderCon}
          style={{ paddingLeft: '420px', marginTop: '220px' }}
        />
      </div>
    );
  }
}

export default NotFoundMessage;
