import React from 'react';
import './Solution.css';

const Solution = () => {
  const solutions = [
    {
      title: "Bootstrap-First QA Strategy",
      description: "We understand startup constraints. Our approach prioritizes high-impact testing that delivers maximum ROI with minimal overhead.",
      features: ["Cost-effective tooling", "Rapid implementation", "Scalable processes"]
    },
    {
      title: "Early-Stage Integration",
      description: "Stop treating QA as an afterthought. We embed quality practices into your development workflow from day one.",
      features: ["Shift-left testing", "Developer enablement", "Continuous feedback"]
    },
    {
      title: "Growth-Ready Architecture",
      description: "Build testing infrastructure that grows with you. From 5 to 50 engineers, your QA strategy stays ahead of your scaling challenges.",
      features: ["Modular frameworks", "Team training", "Process optimization"]
    }
  ];

  const comparison = {
    traditional: [
      "Expensive enterprise tools",
      "Lengthy implementation cycles",
      "Heavy process overhead",
      "Separate QA department",
      "End-of-cycle testing"
    ],
    ours: [
      "Cost-effective, startup-friendly tools",
      "Rapid deployment and iteration",
      "Lean, agile-compatible processes",
      "Embedded quality culture",
      "Continuous quality assurance"
    ]
  };

  return (
    <section className="solution section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Our Approach</span>
          <h2 className="section-title">
            Quality Engineering That 
            <span className="gradient-text"> Understands Startups</span>
          </h2>
          <p className="section-subtitle">
            We're not just another enterprise QA consultancy.
            We specialize in helping startups build quality practices that scale with bootstrap 
            efficiency and enterprise-grade reliability. Our founding engineers have spent years implementing test automation and quality systems for high-growth startups. 
            We don't just understand startups, we've been in them, we believe in them, and we're built for them.
           
          </p>
        </div>

        <div className="solutions-grid">
          {solutions.map((solution, index) => (
            <div key={index} className="solution-card">
              <h3 className="solution-title">{solution.title}</h3>
              <p className="solution-description">{solution.description}</p>
              <ul className="solution-features">
                {solution.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="comparison-section">
          <h3 className="comparison-title">Traditional QA vs. Our Bootstrap Approach</h3>
          <div className="comparison-grid">
            <div className="comparison-column">
              <h4 className="comparison-header traditional">Traditional QA Consulting</h4>
              <ul className="comparison-list">
                {comparison.traditional.map((item, index) => (
                  <li key={index} className="comparison-item negative">
                    <span className="comparison-icon">❌</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="comparison-column">
              <h4 className="comparison-header ours">QualityScale Approach</h4>
              <ul className="comparison-list">
                {comparison.ours.map((item, index) => (
                  <li key={index} className="comparison-item positive">
                    <span className="comparison-icon">✅</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="cta-section">
          <h3>Ready to Transform Your QA Strategy?</h3>
          <p>Let's discuss how we can help you build quality practices that scale with your growth.</p>
          <button className="btn-primary" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
            Schedule a Strategy Call
          </button>
        </div>
      </div>
    </section>
  );
};

export default Solution;