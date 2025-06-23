
import React from 'react';
import { motion } from 'framer-motion';
import './Problem.css';

const Problem = () => {
  const problems = [
    {
      icon: "⚡",
      title: "Moving Too Fast to Test",
      description: "Sprint cycles are accelerating, but QA is still stuck in waterfall thinking. Manual testing becomes the bottleneck."
    },
    {
      icon: "💸",
      title: "Budget Constraints",
      description: "You need quality without the enterprise price tag. Traditional QA is too heavy for lean startups."
    },
    {
      icon: "🔥",
      title: "Technical Debt Crisis",
      description: "Bugs are piling up. What started as 'we’ll fix it later' is now threatening stability and team morale."
    },
    {
      icon: "📊",
      title: "Scaling Challenges",
      description: "Your QA processes don’t scale from 5 to 25+ engineers. You need quality ops that evolve with growth."
    }
  ];

  return (
    <motion.section
      id="problem"
      className="problem section dark-theme"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="container">
        <h2 className="section-title">Common Challenges We Solve</h2>
        <div className="problem-grid">
          {problems.map((item, index) => (
            <motion.div
              key={index}
              className="problem-card"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="problem-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Problem;
