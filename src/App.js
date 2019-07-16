import React from 'react';
import './App.css';

import CustomMap from './components/CustomMap';
import User from './User';

//                          lng     - lat
const BOSA_USER_LOCATION = [4.356331, 50.860699]; 
const HERMAN_USER_LOCATION = [4.350018, 50.865685];

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.onDragEnd = this.onDragEnd.bind(this);

    this.state = {
      mapCenter: BOSA_USER_LOCATION,
      participants: [
        new User('User 1', 15, ['walking'], BOSA_USER_LOCATION),
        new User('User 2', 30, ['driving'], HERMAN_USER_LOCATION)
      ]
    };
  }

  onDragEnd = ({lngLat}, guid) => {
    const {participants} = this.state;
    const index = participants.indexOf(participants.find(p => p.guid === guid));
    if (index !== -1) {
      participants[index].location = [lngLat.lng, lngLat.lat];
      this.setState({participants});
    }
  }

  render = () => {
    const { participants, mapCenter } = this.state;
    return (
      <div>
        <CustomMap mapCenter={mapCenter} onDragEnd={this.onDragEnd} participants={participants} />
      </div>
    );
  } 
}
