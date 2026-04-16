/* 

Created by: Alex Marques 
Student #: 0742983
Assginment: Portfolio Project
Date: 2026-04-03
Due Date: 2026-04-03 11:59pm

*/

import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  name = 'Alex';
  program = 'Computer Programming';
  school = 'St. Clair College';
  email = 'w0742983@myscc.ca';
  linkedin = 'https://www.linkedin.com/in/alex-marques-586835288/';
  github = 'https://github.com/MI7-Bot';

  bio = 'Computer Programming student at St. Clair College with a passion for building clean, functional web applications. Currently developing my skills in both frontend and backend development and looking to grow through real-world experience.';

  skills = [
    'HTML / CSS', 'JavaScript', 'TypeScript', 'Angular', 'Node.js', 'MySQL', 'Git / GitHub', 'Responsive Design', 'Java', 'XML' 
  ];

  schoolProjects = [
    {
      title: 'Portfolio Website',
      course: 'MIT207',
      description: 'A personal portfolio built using Angular, Show cases projects, skills, and contact information in a responsive layout.',
      tags: ['Angular', 'TypeScript', 'CSS'],

    },
    
    {
      title: 'Resume',
      course: 'MIT207',
      description: 'A resume new nad improved resume built with Microsoft Word to allow our work to pop.',
      tags: ['MicrosftWord'],
      
    },

    {
      title: 'PowerPoint Presentation',
      course: 'MIT207',
      description: 'A PowerPoint Presentation built to teach the students how to build a Presentation for real world scenarios.',
      tags: ['MicrosoftPowerPoint'],

    },

    {
      title: 'Elevator Pitch',
      course: 'MIT207',
      description: 'A Task that was designed to teach us the importance of knowing who you are and how to convey it alongside your value within 30 seconds.',
      tags: ['Communication'],

    },

    {
      title: 'Mock Interview',
      course: 'MIT207',
      description: 'A assignment designed to simulate attending a real world interview preparing us for when we truly have a interview for a position.',
      tags: ['Communication', 'Punctuality'],

    },

    {
      title: 'Group Project',
      course: 'MIT207',
      description: 'A task completed in a small group to simulate the real-world working environment.',
      tags: ['Communication', 'Collaboration'],

    },

    {
      title: 'Verbal Presentation',
      course: 'MIT207',
      description: 'A task done as individuals to improve ones ability to perform a presentation to peers or management in the workplace.',
      tags: ['Communication'],

    },

    {
      title: 'Favourite Movie or TV show HTML/CSS Project', //3
      course: 'WEB110',
      description: 'A HTML/CSS project showcasing our favourite Movie or TV show.',
      tags: ['HTML', 'CSS'],

    },

    {
      title: 'Favourite Musician HTML/CSS Project', //4
      course: 'WEB110',
      description: 'A HTML/CSS project showcasing our favourite musician.',
      tags: ['HTML', 'CSS'],

    },

    {
      title: 'Learning Averages', //2
      course: 'MAD107',
      description: 'A lab meant to teach us how to teach us how to obtain the average.',
      tags: ['Java'],

    },

    {
      title: 'Dice roll & Coin Flip Simulator', //9
      course: 'MAD107',
      description: 'A lab where we were tasked to create a dice roll simulator and coin flip simulator.',
      tags: ['Java'],

    },

    {
      title: 'Wonders Webpage with PHP', //1
      course: 'WEB205',
      description: 'A simple webpage using php uploaded to a school web server some of the world\'s wonders.',
      tags: ['PHP', 'HTML'],

    },

    {
      title: 'Yatzy Score Tracker Project', //10
      course: 'WEB205',
      description: 'A webpage uploaded to a school web server using MySQL databases and PHP to create a yatzy score tracker.',
      tags: ['PHP', 'HTML', 'MySQL'],

    },

  ]

  experience = [
    {
      role: 'Bakery Associate',
      org: 'Walmart',
      period: 'Nov 2018 - Jun 2022',
      description: 'Used to Zebra TC5X Series Mobile Computer to keep track of inventory, and stack shelves. Also baked fresh products and kept the work area hygenic.',

    },

    {
      role: 'General Laborer',
      org: 'Gillet Roofing',
      period: 'Sept 2022 - Mar 2023',
      description: 'Used basic tools and machinery, assisted in the removal, and replacing of roofing systems. Also assisted in fixing or patching roofing systems.',

    },

    {
      role: 'General Laborer',
      org: 'Grossi Plumbing, Heating & HVAC Services',
      period: 'Mar 2023 - Jul 2023',
      description: 'Learned plumbing specific tools and assisted the journeyman plumber in their different types of projects each day.',

    },

    {
      role: 'Forklift Driver',
      org: 'Golden Acre Farms',
      period: 'Jan 2024 - Dec 2024',
      description: 'Loaded and offloaded product on to trucks. Kept inventory and the workplace organized.',

    },

    {
      role: 'Warehouse Supervisor',
      org: 'Golden Acre Farms',
      period: 'Dec 2024 - Sept 2025',
      description: 'Lead my team through production, ensured the tasks of the day were completed, and ensured all robots and machinery were running efficently.',

    },
  ]
}
