import React from 'react';
import './myservices.css';

const MyServices = () => {
  const services = [
    {
      img: '/images/graphic design.png',
      title: 'Graphic Design',
      description: 'We provide creative and visually appealing graphic design solutions for your business needs.',
    },
    {
      img: '/images/animation.png',
      title: 'Animation',
      description: 'Create engaging animations and bring your ideas to life with our animation services.',
    },
    {
      img: '/images/videography.png',
      title: 'Videography',
      description: 'Capture moments and tell your story through high-quality videography services.',
    },
    {
      img: '/images/ux-ui.png',
      title: 'UX/UI Design',
      description: 'Enhance user experience and interface design to make your digital products user-friendly.',
    },
    {
      img: '/images/photography.png',
      title: 'Photography',
      description: 'Capture stunning photographs that showcase your products or tell your brand\'s story.',
    },
    {
      img: '/images/marketing.png',
      title: 'Marketing',
      description: 'Strategize and execute effective marketing campaigns to promote your brand and services.',
    },
  ];

  return (
    <div className="content">
      <div className="services">
        {services.map((service, index) => (
          <div key={index} className="service">
            <img src={service.img} alt={`${service.title} Icon`} />
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyServices;
