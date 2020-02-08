import React, { Component } from 'react';
import { RoomContext } from '../context';

class FeaturedRooms extends Component {
  static contextType = RoomContext;
  render() {
    const value = this.context;
    return <div>Featured Rooms</div>;
  }
}

export default FeaturedRooms;
