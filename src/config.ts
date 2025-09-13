export const siteConfig = {
  name: "Aash Shah",
  title: "(wannabe) Embedded Engineer",
  description: "Portfolio website",
  accentColor: "#72DCDC",
  social: {
    email: "aashwork11@gmail.com",
    linkedin: "https://linkedin.com/in/aash-shah20",
    // twitter: "https://x.com/rfitzio",
    github: "https://github.com/aash205",
  },
  aboutMe:
    "Embedded Engineer with 2+ years of hands-on experience in designing, developing, and debugging firmware for a wide range of microcontrollers, including STM32, Raspberry Pi, NRF, Arduino and ESP platforms. Skilled at programming, problem-solving, collaborating across teams, and delivering solutions from concept to deployment.",
  skills: ["C", "C++", "Python", "Linux"],
  projects: [
    {
      name: "Scalp Cooling System",
      description:
        "Developed a medical cooling device to reduce chemotherapy-induced hair loss by maintaining scalp temperature and flow control for two patients.",
      // link: "https://aidevroundup.com/?ref=devportfolio",
      skills: ["STM32", "ADC", "RTOS" , "UART"],
      photos: []
    },
    {
      name: "Modular Recording System",
      description:
        "Built a low-power system for wireless treatment recording and streaming with efficient battery monitoring and power control.",
      link: "https://fullstackextensions.com/?ref=devportfolio",
      skills: ["STM32", "LOW-POWER", "ADC"],
    },
    {
      name: "Keto Breath Analyzer",
      description:
        "Created a portable breath analyzer mapping sensor voltages to CO₂ and acetone levels with real-time OLED display.",
      link: "https://extensionkit.io/?ref=devportfolio",
      skills: ["ATMEGA328p", "VOC Sensors", "I2C"],
    },
     {
      name: "Smart Spray Scheduler",
      description:
        "Designed a programmable system for controlled gas spraying with cycle automation and Bluetooth-based remote access.",
      link: "https://extensionkit.io/?ref=devportfolio",
      skills: ["nRF5840", "Bluetooth", "SPI"],
    },
      {
      name: "Uroflowmetry and Urodynamics",
      description:
        "Prototyped a non-invasive diagnostic system using acoustic sensing for accurate uroflowmetry and urodynamic measurements.",
      link: "https://extensionkit.io/?ref=devportfolio",
      skills: ["ATMEGA328p", "Signal Acquisition", "I2C"],
    },
    {
      name: "Wireless Surveillance Rover using DTMF Technology",
      description:
        "Built a rover for remote data collection with live-video streaming, GPS, and autonomous obstacle detection for autonomous navigation.",
      link: "https://extensionkit.io/?ref=devportfolio",
      skills: ["ATMEGA328p", "Rpi", "DTMF"],
    },
    {
      name: "Automated Smart Trolley",
      description:
        "Developed an RFID-based smart cart that identifies products and generates automated billing in real time.",
      link: "https://extensionkit.io/?ref=devportfolio",
      skills: ["ATMEGA328p", "RFID", "LCD"],
    },
  ],
  experience: [
    {
      company: "IIT Bombay - BETIC Labs",
      title: "Embedded Engineer",
      dateRange: "June 2023 - Present",
      bullets: [
        "Contributed to various medical and embedded projects, taking them from concept design to functional prototype",
        "Applied STM32, Arduino, NRF, Bluetooth, RTOS, and various sensor technologies to build prototypes with real-world clinical and IoT applications.",
        "Collaborated with clients and cross-functional teams (mechanical, industrial, and software) to define timelines and workflow architecture",
      ],
    },
    {
      company: "One Accord",
      title: "Embedded Intern",
      dateRange: "January 2023 – April 2023",
      bullets: [
        "Designed a digital pregnancy test kit using STM32, a photosensor for light intensity detection, and an OLED display for result visualization.",
        "Focused on accurate sensing, seamless hardware integration, and compact, user-friendly design.",
      ],
    },
    {
      company: "Embedos Engineering LPP",
      title: "Embedded Intern",
      dateRange: "June 2022 – July 2022",
      bullets: [
        "Worked on developing the ESP8266 Bluetooth NimBLE stack to enhance wireless communication features.",
        "Gained experience in integrating and modifying third-party libraries for embedded applications.",
      ],
    },
    {
      company: "Emertex",
      title: "Embedded Intern",
      dateRange: "Sep 2021 – Nov 2021",
      bullets: [
        "Implemented embedded C concepts by simulating a washing machine program on PIC16F877A.",
        "Used CLCD, tactile keys, and timers on MPLAB for functional prototyping and testing",
      ],
    },
  ],
  education: [
    {
      school: "KJ Somaiya College of Engineering",
      degree: "Bachelor of Technology in Electronics and Telecommunication",
      dateRange: "2019 - 2023",
      achievements: [
        "Graduated with a CGPA of 8.6",
        "Presented LY Paper ar ICAETIS - 2023",
        "Student Co-ordinator | TPO KJSCE",
        "Creative Head, Joint Treasurer | IETE KJSCE",
        "Networking and PR Team Member | Alumini Cell KJSCE"
      ],
    },
  ],
};
