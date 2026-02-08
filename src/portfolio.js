/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Reem",
  logo: "reemlogo.png",
  title: "Welcome! \r\nI'm Reem", //can use \r\n
  subTitle: "",
  // emoji(
  //   `Please scroll🔻 
  //       It only gets better from here`
  // ),
  resumeLink:
    "", // Set to empty to hide the button. Use a google drive or similar
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  // github: "https://github.com/Almazroa",
  linkedin: "https://www.linkedin.com/in/reem-almazroa/",
  gmail: "almazroareem@gmail.com",
  // instagram: "https://www.instagram.com/plantedreem/",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "I'm an embedded systems engineer specializing in robotics",
  skills: [
    emoji(
      "🟥  Design & Develop\n\u2003🟨 Schematics, PCBs, prototypes, APIs\n\u2003🟩 Firmware in C/C++, from RTOS to bare-metal"
      //Develop highly interactive Front end / User Interfaces for your web and mobile applications
    ),
    // emoji("🟨 Develop \n\u2003🕐 Real-time firmware in C/C++ \n\u2003🕑 Using memory and power-conscious practices"),
    //Progressive Web Applications ( PWA ) in normal and SPA Stacks
    emoji(
      "🟥  Test & Maintain\n\u2003🟨 Debugging with GDB, SWD, and lab instruments \n\u2003🟩 Version control and documentation"
      //Integration of third party services such as Firebase/ AWS / Digital Ocean
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "C/C++",
      fontAwesomeClassname: "fab fa-cuttlefish"
    },
    // {
    //   skillName: "html-5",
    //   fontAwesomeClassname: "fab fa-html5"
    // },
    {
      skillName: "ROS2",
      fontAwesomeClassname: "fas fa-robot"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-gitkraken"
    },
    {
      skillName: "Ubuntu",
      fontAwesomeClassname: "fab fa-ubuntu"
    },
    {
      skillName: "PCBs",
      fontAwesomeClassname: "fas fa-microchip"
    },
    {
      skillName: "3D Modeling",
      fontAwesomeClassname: "fas fa-draw-polygon"
    },
    // {
    //   skillName: "sql-database",
    //   fontAwesomeClassname: "fas fa-database"
    // },
    // {
    //   skillName: "aws",
    //   fontAwesomeClassname: "fab fa-aws"
    // },
    // {
    //   skillName: "firebase",
    //   fontAwesomeClassname: "fas fa-fire"
    // },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    }
    // {
    //   skillName: "docker",
    //   fontAwesomeClassname: "fab fa-docker"
    // }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Northeastern University",
      logo: require("./assets/images/NEUlogo.png"),
      subHeader: "Master of Science in Robotics - Concentration in Electrical and Computer Engineering",
      duration: "Jan 2025 - (expected) Dec 2026",
      desc: "Research assistant @ Silicon Synapse Lab",
      descBullets: [
        "Coursework includes: Embedded Security, Wearable Robotics, Robot Mechanics & Control, Robotic Sensing & Navigation, Mobile Robotics, Robotic Science & Systems",
        "Assisting in embedded system design and sensor integration for the bio-inspired Aerobat robot"
      ]
    },
    {
      schoolName: "University of Wisconsin-Madison",
      logo: require("./assets/images/UWlogo.png"),
      subHeader: "Bachelor of Science in Computer Engineering",
      duration: "September 2020 - May 2024",
      desc: "",
      descBullets: [
        "Coursework includes: Embedded Microprocessor System Design, Computer Architecture, Operating Systems, Circuits, Signals & Systems",
        "Capstone project: Mu-tion: a wearable motion controller",
        "KGSP '12"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience
// masters, life, countries visited, continents, conan watchthru, ace attorney playthru, 

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Master's | Expected Dec 2026", // 4*15 weeks = 60
      progressPercentage: "58.33%"

    },
    {
      Stack: "Countries | 19", //Insert stack or technology you have experience in
      progressPercentage: "10%" //Insert relative proficiency in percentage
    },
    // {
    //   Stack: "US States | 14",
    //   progressPercentage: "28%"
    // },
    // {
    //   Stack: "Detective Conan watchthrough | 176",
    //   progressPercentage: "16.18%" // 176/1168
    // },
    {
      Stack: "Fire Emblem: Awakening playthrough",
      progressPercentage: "34.29%" 
    },
    {
      Stack: "Life",
      progressPercentage: "28.18%" // life expectancy of 84 EU
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: false, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Facebook",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "June 2018 – Present",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      role: "Front-End Developer",
      company: "Quora",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "May 2017 – May 2018",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "Software Engineer Intern",
      company: "Airbnb",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Jan 2015 – Sep 2015",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Reem's Schemes",
  subtitle: "A quick look at my projects",
  projects: [
    {
      image: require("./assets/images/Jengics_robotarmwithtower02_presentation.jpg"), 
      projectName: "Jengics",
      projectDesc: "A Jenga playing robot",
      footerLink: [
        // {
        //   name: "Visit page",
        //   url: "https://almazroa.github.io/projects/"
        // }
      ]
    },
    {
      image: require("./assets/images/ECE453-hand03.PNG"),
      projectName: "Mu-tion",
      projectDesc: "A wearable motion controller",
      footerLink: [
        // {
        //   name: "Visit page",
        //   url: "https://almazroa.github.io/projects/"
        // }
      ]
    },
    {
      image: require("./assets/images/Toothless_infrontofposter03.JPG"),
      projectName: "Animatronic Toothless",
      projectDesc: "In celebration of the new live action How to Train Your Dragon",
      footerLink: [
        // {
        //   name: "Visit Page",
        //   url: "https://almazroa.github.io/projects/"
        // }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/Reemsscheme.PNG"),
      projectName: "ALL PROJECTS",
      projectDesc: "",
      footerLink: [
        {
          name: "View my portfolio",
          url: "https://reem.codes/projects/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me 📩"),
  subtitle:
    "Curious? See you in my inbox!", //"Curious? My Inbox is open",
  number: "",
  email_address: "almazroareem@gmail.com"
};


// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
