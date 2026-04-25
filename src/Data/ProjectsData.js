// You MUST import the image here too! 
import portfolioprojectimg from '../assets/portfolioprojectimg.jpg';
import datingprojectimg from '../assets/datingprojectimg.avif';
import wheatherprojectimg from '../assets/wheatherprojectimg.jpg';
import rishstoreimg from '../assets/rishstoreimg.avif';

const projectsData = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "Personal portfolio built with React and Tailwind.",
    image: portfolioprojectimg, // Now proj1 is defined!
    tech: ["React", "Tailwind Css", "Framer Motion"],
    demoLink: "https://rishabhportfolio-five.vercel.app", // Add your link here
    codeLink: "#"
  },
  {
    id: 2,
    title: "Dating Site",
    description: "Dynamic website with user authentication, profile management, post creation, Integrated MYSQL database for data storage.",
    image: datingprojectimg,
    tech: ["HTML/CSS", "JAVASCRIPT", "BOOTSTRAP", "PHP", "SQL"],
    demoLink: "#", // Add your link here
    codeLink: "#"
  },
  {
    id: 3,
    title: "Wheather forecasting site",
    description: "Dynamic and Responsive site capable of retrieving real-time wheather data.",
    image: wheatherprojectimg,
    tech: ["HTML/CSS", "JAVASCRIPT", "BOOTSTRAP"],
     demoLink: "https://wheather-forcasting-webpage2k25.vercel.app", // Add your link here
    codeLink: "#"
  },
   {
    id: 4,
    title: "E-commerce Website",
    description: "Personal portfolio built with React and Tailwind.",
    image: rishstoreimg, 
    tech: ["HTML/CSS", "JAVASCRIP", "BOOTSTRAP"]
  }
];

export default projectsData;