import React from "react";
import "../styles/blog1.css";
import Navbar from "../components/Navbar";
import heroImg from "../assets/images/image6.png";

function Blog6() {
  return (
    <div className="blog-wrapper">
      <Navbar />

      <main className="blog-main">
        <header className="blog-hero">
          <div className="blog-tag">Blog • AI Ethics & Future</div>
          <h1 className="blog-title">
            Responsible AI: Building Ethical and Sustainable AI Systems
          </h1>

          <div className="blog-meta">
            <span>December 2025</span>
            <span>•</span>
            <span>10 min read</span>
            <span>•</span>
            <span>AI Ethics, Sustainability, Future</span>
          </div>

          <div className="blog-hero-layout">
            <div className="blog-hero-text">
              <p>
                As AI becomes more powerful and pervasive, the responsibility to
                build ethical, fair, and sustainable AI systems grows. Explore
                the principles and practices that ensure AI benefits everyone.
              </p>
              <p>
                From bias mitigation to environmental impact, we'll examine how
                to build AI systems that are not just effective, but also
                responsible and aligned with human values.
              </p>
            </div>

            <div className="blog-hero-image">
              <img src={heroImg} alt="AI Ethics & Future" />
            </div>
          </div>
        </header>

        <section className="blog-content">
          <h2>The Imperative for Responsible AI</h2>
          <p>
            AI systems make decisions that affect real people's lives—from
            hiring and lending to healthcare and criminal justice. With this
            power comes the responsibility to ensure these systems are fair,
            transparent, and accountable.
          </p>

          <p>
            Responsible AI isn't just about avoiding harm—it's about actively
            designing systems that promote equity, respect privacy, and
            contribute positively to society while delivering business value.
          </p>

          <h2>Key Principles of Ethical AI</h2>
          <ul>
            <li>
              <strong>Fairness & Bias Mitigation:</strong> Identify and address
              biases in training data and model outputs to ensure equitable
              treatment across all user groups.
            </li>
            <li>
              <strong>Transparency & Explainability:</strong> Build systems that
              can explain their decisions in terms humans can understand and
              trust.
            </li>
            <li>
              <strong>Privacy & Security:</strong> Implement privacy-preserving
              techniques and robust security measures to protect user data and
              maintain trust.
            </li>
            <li>
              <strong>Environmental Sustainability:</strong> Optimize AI systems
              for energy efficiency and consider the environmental impact of
              training and deployment.
            </li>
          </ul>

          <h2>The Future of AI Development</h2>
          <p>
            The next generation of AI systems will be more capable, more
            integrated into daily life, and more impactful on society. This
            makes responsible development practices not just ethical
            imperatives, but business necessities.
          </p>

          <p className="blog-outro">
            At LioMonk, we believe the future of AI is bright when built
            responsibly. Let's create AI systems that not only solve problems
            but do so in ways that benefit everyone and build a better future
            for all.
          </p>
        </section>
      </main>
    </div>
  );
}

export default Blog6;
