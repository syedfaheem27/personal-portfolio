const mockData = [
   {
    id: 1,
    title: "Natours",
    image: "./assets/project-images/nirvana.png",
    techStack: [
      "Node",
      "Express",
      "MongoDB",
      "Mongoose",
      "Pug",
      "Parcel"
    ],
    description:
      `An awesome tour booking site built on top of NodeJS. The users are presented with a server side rendered
website with a beautiful tour map and much more about the tours. Some of the key features of the webiste
include authentication, authorization, tour booking, user info. updation and credit card payments`,
    liveLink: "https://natours-fam.onrender.com/",
    githubLink: "https://github.com/syedfaheem27/natours-faheem",
  },
  {
    id: 2,
    title: "Wild Oasis | Nirvana",
    image: "./assets/project-images/nirvana.png",
    techStack: [
      "React",
      "React-Router",
      "React-Query",
      "Supabase",
      "Recharts",
      "React-Hook-Form",
      "React-Hot-Toast",
      "React-Error-Boundary",
      "React-Icons",
      "Styled-Components",
    ],
    description:
      "A web application for a small boutique hotel with beautiful wooden cabins. The application allows a signed-in user to create and edit a cabin,confirm and delete a booking and change the hotel settings. It has a descriptive dashboard that represents the sales,bookings, check-ins and the occupancy rate and also displays beautiful charts denoting the sales and the stay duration summary",
    liveLink: "https://wild-oasis-nirvana.netlify.app/",
    githubLink: "https://github.com/syedfaheem27/nirvana",
  },
  {
    id: 3,
    title: "Admin Dashboard",
    image: "./assets/project-images/admin-dash.png",
    techStack: [
      "React",
      "React_DOM",
      "Vite",
      "React-Icons",
      "Styled-Components",
    ],
    description:
      "This is an admin Dashboard as part of the Geek Trust Front-end challenge where you can manage users by editing their information and deleting them. The modals added in the dashboard have been built using a known React pattern called the Compound Component Pattern which provides a flexible interface to work with, thus avoiding prop explosion.",
    liveLink: "https://fam-dashboard.netlify.app/",
    githubLink: "https://github.com/syedfaheem27/Admin-Dashboard",
  },
  {
    id: 4,
    title: "Forkify",
    image: "./assets/project-images/forkify-png.png",
    techStack: ["Vanilla JS", "Fracty", "Parcel", "Sass"],
    description:
      "Forkify is a recipe search application that allows users to search for various recipes. It's built following the Model-View-Controller (MVC) architecture for better organization and maintainability of code. To improve the efficiency of the application, the createContextualFragment() web API has been used to create a Document fragment, thus enhancing DOM manipulation.",
    liveLink: "https://faheem-forkify.netlify.app/",
    githubLink: "https://github.com/syedfaheem27/forkify-faheem",
  },
  {
    id: 5,
    title: "Pizza-Loader",
    image: "./assets/project-images/react-pizza.png",
    techStack: ["React", "Vite", "Redux", "React-Router-Dom"],
    description:
      "React Pizza App is a web application developed with React and bundled using Vite. The app integrates with React Redux and React Router DOM for state management and routing. It utilizes a reverse geocoding API for location-based services and interacts with a third-party API to load menus, create orders, retrieve orders, and update orders. Additionally, it leverages the navigator Web API for fetching current user coordinates.",
    liveLink: "https://pizza-loader.vercel.app/",
    githubLink: "https://github.com/syedfaheem27/pizza-loader",
  }
];

export { mockData };
