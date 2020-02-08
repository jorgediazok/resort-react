import React, { Component } from 'react';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';
import Title from '../components/Title';

class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: 'Free Cocktails',
        info:
          'We offer you free drinks whenever you need something cold to refresh yourself!.'
      },
      {
        icon: <FaHiking />,
        title: 'Endless Hiking',
        info:
          'If you are really into hiking we take you to the mountains to take some fresh air.'
      },
      {
        icon: <FaShuttleVan />,
        title: 'Free Shuttle',
        info:
          'Do not worry about the transport, we give you a free ride wherever you wanna go.'
      },
      {
        icon: <FaBeer />,
        title: 'Strongest Beer',
        info:
          'If you really want to get drunk, then you need to try our beer, the world strongest beer.'
      }
    ]
  };

  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}

export default Services;
