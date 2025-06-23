
import React from 'react';
import { motion } from 'framer-motion';
import './Solution.css';

const Solution = () => {
  const solutions = [
    {
      title: "Bootstrap-First QA Strategy",
      description: "Our approach prioritizes high-impact testing that delivers maximum ROI with minimal overhead.",
      features: ["Cost-effective tooling", "Rapid implementation", "Scalable processes"]
    },
    {
      title: "Early-Stage Integration",
      description: "We embed quality practices into your development workflow from day one.",
      features: ["Shift-left testing", "Developer enablement", "Continuous feedback"]
    },
    {
      title: "Growth-Ready Architecture",
      description: "Build testing infrastructure that grows with you.",
      features: ["Modular frameworks", "Team training", "Process optimization"]
    }
  ];

  return (
    <motion.section
      id="solution"
      className="solution section dark-theme"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="container">
        <h2 className="section-title">How We Help</h2>
        <div className="solution-grid">
          {solutions.map((item, index) => (
            <motion.div
              key={index}
              className="solution-card"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 250 }}
            >
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <ul>
                {item.features.map((feat, i) => (
                  <li key={i}>{feat}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Solution;
