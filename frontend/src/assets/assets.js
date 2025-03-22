import amazon from "./amazon.svg"
import experience from "./experience.svg"
import filterIcon from "./filterIcon.svg";
import jobtype from "./jobType.svg";
import logo from "./logo.svg";
import lpa from "./lpa.svg";
import onsite from "./onsite.svg";
import search from "./search.svg";
import swigy from "./swigy.svg";
import tesla from "./tesla.svg";
import location from "./location.svg";


export const assests = {
  amazon,
  experience,
  filterIcon,
  jobtype,
  logo,
  lpa,
  onsite,
  search,
  swigy,
  tesla,
  location,
};


export const jobLocations = [
    "Banglore",
    "Washington",
    "Mumbai",
    "Chennai",
    "New York"
]

export const jobType = [
     "Full-Time",
     "Part-Time",
     "Contract",
     "Intership"
]


export const jobsData = [
  {
    _id: 1,
    title: "Full Stack Developer",
    location: "onsite",
    level: "1-3 yr Exp",
    image: amazon,
    salary: "12LPA",
    jobtype: "full-time",
    description: `
        <ol>
         <li>A user-friendly interface lets you browse stunning photos and videos</li>
         <li>Filter destinations based on interests and travel style, and create personalized</li>
        </o/>`,
  },
  {
    _id: 2,
    title: "Node JS Developer",
    location: "onsite",
    level: "1-3 yr Exp",
    image: tesla,
    salary: "12LPA",
    jobtype: "part-time",
    description: `
        <ol>
         <li>A user-friendly interface lets you browse stunning photos and videos</li>
         <li>Filter destinations based on interests and travel style, and create personalized</li>
        </o/>`,
  },
  {
    _id: 3,
    title: "UX/UI Intern",
    location: "chennai",
    level: "1-3 yr Exp",
    image: swigy,
    salary: "12LPA",
    jobtype: "contract",
    description: `
        <ol>
         <li>A user-friendly interface lets you browse stunning photos and videos</li>
         <li>Filter destinations based on interests and travel style, and create personalized</li>
        </o/>`,
  },
  {
    _id: 1,
    title: "Full Stack Developer",
    location: "onsite",
    level: "1-3 yr Exp",
    image: amazon,
    salary: "12LPA",
    jobtype: "internship",
    description: `
        <ol>
         <li>A user-friendly interface lets you browse stunning photos and videos</li>
         <li>Filter destinations based on interests and travel style, and create personalized</li>
        </o/>`,
  },
  {
    _id: 1,
    title: "Full Stack Developer",
    location: "onsite",
    level: "1-3 yr Exp",
    image: amazon,
    salary: "12LPA",
    jobtype: "part-time",
    description: `
        <ol>
         <li>A user-friendly interface lets you browse stunning photos and videos</li>
         <li>Filter destinations based on interests and travel style, and create personalized</li>
        </o/>`,
  },
];