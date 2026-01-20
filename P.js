const portfolioProjects = [
    {
      title: "SyntherX",
      frontImage: "/Assets/images/projects/syntherx.png",
      backImage: "Assets/images/projects/syntherx.png", // Same image or another if you want
      description: "A cutting-edge website design project for SyntherX's new product line.",
      link: "https://syntherx.netlify.app/",
      skills: ["HTML", "CSS", "JavaScript", "Bootstrap", "Web Design"]
    },
    {
      title: "Typing Speed Test",
      frontImage: "./Assets/images/projects/Typing-speed-checker.png",
      backImage: "./Assets/images/projects/Typing-speed-checker.png",
      description: "Typing speed test application to measure and improve typing skills.",
      link: "https://typing-master-65.vercel.app/",
      skills: ["React", "Tailwind CSS", "Local Storage"]
    },
    {
      title: "AI-Grammer Checker",
      frontImage: "./Assets/images/projects/ai-grammer.png",
      backImage: "./Assets/images/projects/ai-grammer.png",
      description: "AI-powered grammar checking tool for enhancing writing quality.",
      link: "https://ai-grammer-gamma.vercel.app/",
      skills: ["React", "OpenAI LLM", "Tailwind CSS", "Express", "Node.js", "Local Storage"] 
    },
    {
      title: "Deen Tales",
      frontImage: "./Assets/images/projects/deentales-homepage.png",
      backImage: "./Assets/images/projects/deentales-homepage.png",
      description: "World first Islamic AI chatbot capable of storytelling and visual interaction.(Still in Development)",
      link: "https://github.com/Arhum19/DeenTales.git",
      skills: ["React", "Tailwind CSS", "OpenAI LLM", "Python", "RAG", "VectorDB", "Langchain", "MongoDB"]
    },
    {
      title: "AI Chatbot",
      frontImage: "./Assets/images/projects/ai-chatbot.png",
      backImage: "./Assets/images/projects/ai-chatbot.png",
      description: "Ai-powered chatbot application for interactive conversations and assistance having memory feature.",
      link: "https://chatbott-project.vercel.app/",
      skills: ["HTML", "CSS", "JavaScript", "OpenAI LLM", "Tailwind CSS", "Express", "Node.js", "Local Storage"]
    },
    {
      title: "Ai Finance Tracker",
      frontImage: "./Assets/images/projects/finance.png",
      backImage: "./Assets/images/projects/finance.png",
      description: "A web application that helps users track their finances using AI technology with voice logging features.(Yet to be deployed)",
      link: "https://github.com/Arhum19/Personal_Ai_Finance_Companion.git",
      skills: ["C#", ".NET", "SQL Server", "Visual Studio"]
    }
  ];

  

  // Select all portfolio cards
const portfolioCards = document.querySelectorAll(".projects-card");

// Attach click events to each card
portfolioCards.forEach((card, index) => {
  card.addEventListener("click", () => {
    showPortfolioModal(index);
  });
});

// Function to show modal for portfolio projects
function showPortfolioModal(index) {
  const project = portfolioProjects[index];

  document.getElementById("modal-title").textContent = project.title;
  document.getElementById("modal-image").src = project.backImage;
  document.getElementById("modal-description").textContent = project.description;
  document.getElementById("modal-link").href = project.link;
  document.getElementById("modal-link").textContent = project.title;

  // Render skills
  const skillsContainer = document.getElementById("modal-skills");
  skillsContainer.innerHTML = project.skills.map(skill => `
    <span class="skill-badge">${skill}</span>
  `).join("");

  // Show modal
  document.getElementById("myModal").style.display = "block";
  document.body.style.overflow = "hidden";
}

// Function to close the modal (already exists)
function closeModal() {
  document.getElementById("myModal").style.display = "none";
  document.body.style.overflow = "auto";
}

// Close modal when clicking outside of it (already exists)
window.onclick = function(event) {
  if (event.target == document.getElementById("myModal")) {
    closeModal();
  }
}

const sliderContainer = document.getElementById("sliderContainer");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

// Amount to scroll per click (adjust based on card width + gap)
const scrollAmount = 500;

prevBtn.addEventListener("click", () => {
  sliderContainer.scrollBy({
    left: -scrollAmount,
    behavior: "smooth"
  });
});

nextBtn.addEventListener("click", () => {
  sliderContainer.scrollBy({
    left: scrollAmount,
    behavior: "smooth"
  });
});
