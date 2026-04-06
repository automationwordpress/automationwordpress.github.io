// Skills data
const skills = [
  { icon: "📐", title: "Elementor", description: "Build pixel-perfect WordPress pages with drag-and-drop. Learn responsive design, custom widgets, and pro techniques.", topics: ["Page Builder Basics", "Custom Templates", "Dynamic Content", "Performance Tips"] },
  { icon: "🧩", title: "Crocoblock", description: "Unlock dynamic WordPress with JetEngine, JetSmartFilters, and more. Create complex listings and custom post types.", topics: ["JetEngine CPT", "Dynamic Listings", "Smart Filters", "Query Builder"] },
  { icon: "🤖", title: "AI Automation", description: "Automate workflows with AI tools. Connect apps, generate content, and build intelligent systems that save hours.", topics: ["Make / Zapier", "ChatGPT Integration", "Auto Content", "Smart Workflows"] }
];

// Tutorials data
const tutorials = [
  { title: "Build a Portfolio with Elementor Pro", category: "Elementor", level: "Beginner", duration: "45 min", lessons: 8 },
  { title: "Dynamic Listings with JetEngine", category: "Crocoblock", level: "Intermediate", duration: "1h 20min", lessons: 12 },
  { title: "Automate Lead Gen with Make + ChatGPT", category: "AI Automation", level: "Advanced", duration: "55 min", lessons: 6 },
  { title: "Custom WooCommerce Product Pages", category: "Elementor", level: "Intermediate", duration: "1h", lessons: 10 },
  { title: "Smart Filters for Real Estate Sites", category: "Crocoblock", level: "Advanced", duration: "1h 15min", lessons: 9 },
  { title: "AI-Powered Blog Content Pipeline", category: "AI Automation", level: "Beginner", duration: "30 min", lessons: 5 }
];

const catClass = { "Elementor": "cat-elementor", "Crocoblock": "cat-crocoblock", "AI Automation": "cat-ai" };

// Render skills
document.getElementById("skills-grid").innerHTML = skills.map(s => `
  <div class="skill-card">
    <div class="skill-icon">${s.icon}</div>
    <h3>${s.title}</h3>
    <p>${s.description}</p>
    <div class="topics">${s.topics.map(t => `<span class="topic-tag">${t}</span>`).join("")}</div>
  </div>
`).join("");

// Render tutorials
document.getElementById("tutorials-grid").innerHTML = tutorials.map(t => `
  <div class="tutorial-card">
    <span class="category-badge ${catClass[t.category]}">${t.category}</span>
    <h3>${t.title}</h3>
    <div class="tutorial-meta">
      <span>🕐 ${t.duration}</span>
      <span>📖 ${t.lessons} lessons</span>
    </div>
    <span class="level-tag">${t.level}</span>
  </div>
`).join("");

// Hamburger menu toggle
document.getElementById("hamburger").addEventListener("click", () => {
  document.querySelector(".nav-links").classList.toggle("open");
});
