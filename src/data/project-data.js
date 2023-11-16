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
    title: "Personal Portfolio",
    image: "./assets/project-images/portfolio.png",
    techStack: ["React", "React-Router-Dom", "Parcel"],
    description:
      "This personal portfolio is built with React and bundled using parcel offering a showcase of my skills, experiences, and projects. The portfolio includes three main pages: Home, About, and Projects, providing visitors with a comprehensive view of my work.",
    liveLink: "https://fam-portfolio.netlify.app/",
    githubLink: "https://github.com/syedfaheem27/personal-portfolio",
  },
  {
    id: 6,
    title: "Bankist Marketing",
    image: "./assets/project-images/bankist-marketing.png",
    techStack: ["HTML5", "CSS3", "vanilla JS", "Intersection Observer API"],
    description:
      "It is a marketing website designed for the Bankist app. It showcases various features and functionalities of the app in an engaging manner. Notably, this project utilizes the Intersection Observer API along with vanilla JavaScript to implement several key features, including lazy loading of images, revealing elements on scroll, and enhancing user experience with smooth scrolling.",
    liveLink:
      "https://vercel.com/syedfaheem27/bankist-marketting-website/EhVDWR1Vm6C6YrEauLAfnhkSL9Wu",
    githubLink: "https://github.com/syedfaheem27/bankist-app",
  },
];

export { mockData };
