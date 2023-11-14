const mockData = [
  {
    id: 1,
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
    id: 2,
    title: "Weather App",
    image: "./assets/project-images/weather.png",
    techStack: ["React", "Geocoding API", "Open Meteo weather API"],
    description:
      "A weather forecasting application that is built using the class based React components and makes use of the geocoding API and the open meteo weather API to get you the forcast that you need.",
    liveLink: "https://weather-forecast-3wwtdni63-syedfaheem27.vercel.app/",
    githubLink: "https://github.com/syedfaheem27/weather-forecast",
  },
  {
    id: 3,
    title: "Pizza-Loader",
    image: "./assets/project-images/react-pizza.png",
    techStack: ["React", "Vite", "Redux", "React-Router-Dom"],
    description:
      "React Pizza App is a web application developed with React and bundled using Vite. The app integrates with React Redux and React Router DOM for state management and routing. It utilizes a reverse geocoding API for location-based services and interacts with a third-party API to load menus, create orders, retrieve orders, and update orders. Additionally, it leverages the navigator Web API for fetching current user coordinates.",
    liveLink: "https://pizza-loader.vercel.app/",
    githubLink: "https://github.com/syedfaheem27/pizza-loader",
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
    title: "Project-5",
    image:
      "https://images.unsplash.com/photo-1459802071246-377c0346da93?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3BsYXNofGVufDB8fDB8fHww",
    techStack: ["React", "Redux", "React-Query", "Supabase"],
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque dolorum doloremque ipsam tempore quibusdam omnis laboriosam expedita fuga explicabo laudantium?",
    liveLink: "#",
    githubLink: "#",
  },
  {
    id: 6,
    title: "Project-6",
    image:
      "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c3BsYXNofGVufDB8fDB8fHww",
    techStack: ["React", "Redux", "React-Query", "Supabase"],
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque dolorum doloremque ipsam tempore quibusdam omnis laboriosam expedita fuga explicabo laudantium?",
    liveLink: "#",
    githubLink: "#",
  },
];

export { mockData };
