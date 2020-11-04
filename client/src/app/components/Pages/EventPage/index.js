import React from 'react';

import {EventPreview} from './EventPreview';

export const EventPage = () => {
  const events = [
    {
      title: 'Title',
      author: 'Dori',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pellentesque, nisi id consequat lacinia, risus urna facilisis quam, vitae venenatis urna velit et nisl. Morbi id nibh non augue accumsan vulputate at et mi. Etiam hendrerit, purus dignissim placerat iaculis, ligula risus ornare leo, nec vulputate lectus lectus in nisl. Aenean sodales euismod tortor sed posuere. Mauris dignissim tempus odio, a porttitor lacus efficitur ut. Cras eget auctor velit. Nullam lacinia tempus scelerisque. Donec efficitur odio a felis convallis, lacinia pretium erat molestie. Sed convallis eros a lorem eleifend, eget gravida felis porttitor. Morbi efficitur rutrum turpis.',
      location: 'Rishon Letzion',
      date: new Date('16:00 11/10/2020')
    }
  ];

  return (
    <div>
      Events
      
      {events.map((event, index) => <EventPreview key={index} event={event} />)}
    </div>
  )
};