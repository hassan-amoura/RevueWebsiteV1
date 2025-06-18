import React from 'react';
import './Problem.css';

const Problem = () => {
  const problems = [
    {
      icon: "⚡",
      title: "Moving Too Fast to Test",
      description: "Sprint cycles are accelerating, but QA is still stuck in waterfall thinking. Manual testing becomes the bottleneck that slows your entire pipeline."
    },
    {
      icon: "💸",
      title: "Budget Constraints",
      description: "Traditional QA solutions are enterprise-priced for startup budgets. You need quality without the premium price tag that scales with your growth."
    },
    {
      icon: "🔥",
      title: "Technical Debt Crisis",
      description: "Bugs are piling up faster than you can fix them. What started as 'we'll fix it later' is now threatening your product stability and team morale."
    },
    {
      icon: "📊",
      title: "Scaling Challenges",
      description: "Your testing approach worked with 5 engineers, but now you have 25. You need processes that scale without becoming bureaucratic overhead."
    }
  ];

  return (
    <section className="problem section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">The Challenge</span>
          <h2 className="section-title">
            Why Series B Startups Struggle With 
            <span className="gradient-text"> Quality Engineering</span>
          </h2>
          <p className="section-subtitle">
            You've proven product-market fit and secured Series B funding. Now you're scaling fast, 
            but your QA strategy is holding you back from the growth you need to achieve.
          </p>
        </div>
        
        <div className="problems-grid">
          {problems.map((problem, index) => (
            <div key={index} className="problem-card">
              <div className="problem-icon">{problem.icon}</div>
              <h3 className="problem-title">{problem.title}</h3>
              <p className="problem-description">{problem.description}</p>
            </div>
          ))}
        </div>
        
        <div className="problem-highlight">
          <div className="highlight-content">
            <h3>The Real Cost of Poor QA Strategy</h3>
            <p>
              Series B startups lose an average of <strong>$2.4M annually</strong> due to poor quality practices. 
              That's not just revenue—it's customer trust, team productivity, and your path to Series C.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;