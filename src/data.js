// src/data.js
import Panel1 from './components/Pannel1';
import Panel2 from './components/Pannel2';
import Panel3 from './components/Pannel3';
import Panel4 from './components/Pannel4';

const panelData = [
  {
    id: 1,
    title: 'First Impression',
    bgImage: '',
    hoverImage: '/path/to/hover/image1.jpg',
    content: <Panel1 /> // Replace with 'Panel1' or 'Panel2', etc., depending on your import names
  },
  {
    id: 2,
    title: 'Skills',
    bgImage: '',
    hoverImage: '/path/to/hover/image2.jpg',
    content: <Panel2 />
  },
  {
    id: 3,
    title: 'Project Gallery',
    bgImage: '',
    hoverImage: '/path/to/hover/image3.jpg',
    content: <Panel3 />
  },
  {
    id: 4,
    title: 'Contact',
    bgImage: '',
    hoverImage: '/path/to/hover/image4.jpg',
    content: <Panel4 />
  }
];

export default panelData;
