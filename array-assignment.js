//  Define an array where each element is an object representing a project

let projects = [
    // 1st project
    {
        name: "SocialHub",
        description: "A social media app for sharing posts.",
        technologyUsed: "Flutter, Firebase",
        year: 2024,
    },
    // 2nd project
    {
        name: "E-Commerce Platform",
        description: "An online shopping website.",
        technologyUsed: "React, Node.js, MongoDB",
        year: 2023,
    },
    // 3rd project
    {
        name: "Portfolio Website",
        description: "A personal portfolio website.",
        technologyUsed: "HTML, CSS, JavaScript",
        year: 2022,
    },
]

  // Use map method to display each project's details
  projects.map((project) => {
    console.log(`\nProject Name: ${project.name}\n`);
    console.log(`Description: ${project.description}\n`);
    console.log(`Technology Used: ${project.technologyUsed}\n`);
    console.log(`Year: ${project.year}\n`);
    console.log("-------------------------------------------------------------------------------------------------");
    
  });
