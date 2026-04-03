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
    'HTML / CSS', 'JavaScript', 'TypeScript', 'Angular', 'Node.js', 'SQL', 'Git / GitHub', 'Responsive Design', 'Java'
  ];

  schoolProjects = [
    {
      title: 'Portfolio Website',
      course: 'MIT207',
      description: 'A personal portfolio built using Angular, Show cases projects, skills, and contact information in a responsive layout.',
      tags: ['Angular', 'TypeScript', 'CSS'],

    }
    
    {
      title: 'Resume',
      course: 'MIT207',
      description: 'A resume new nad improved resume built with Microsoft Word to allow our work to pop.',
      tags: ['MicrosftWord']
    }

    {
      title: 'PowerPoint Presentation',
      course: 'MIT207',
      description: 'A PowerPoint Presentation'
    }
  ]

  experience = [
    {
      role: 'Bakery Associate',
      org: 'Walmart',
      period: 'Nov 2018 - Jun 2022',
      description: 'Used to Zebra TC5X Series Mobile Computer to keep track of inventory, and stack shelves. Also baked fresh products and kept the work area hygenic.',

    }

    {
      role: 'General Laborer',
      org: 'Gillet Roofing',
      period: 'Sept 2022 - Mar 2023',
      description: 'Used basic tools and machinery, assisted in the removal, and replacing of roofing systems. Also assisted in fixing or patching roofing systems.',

    }

    {
      role: 'General Laborer',
      org: 'Grossi Plumbing, Heating & HVAC Services',
      period: 'Mar 2023 - Jul 2023',
      description: 'Learned plumbing specific tools and assisted the journeyman plumber in their different types of projects each day.',

    }

    {
      role: 'Forklift Driver',
      org: 'Golden Acre Farms',
      period: 'Jan 2024 - Dec 2024',
      description: 'Loaded and offloaded product on to trucks. Kept inventory and the workplace organized.',

    }

    {
      role: 'Warehouse Supervisor',
      org: 'Golden Acre Farms',
      period: 'Dec 2024 - Sept 2025',
      description: 'Lead my team through production, ensured the tasks of the day were completed, and ensured all robots and machinery were running efficently.',

    }
  ]
}
