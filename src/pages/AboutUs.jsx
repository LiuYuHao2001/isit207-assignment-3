const AboutUs = () => {
  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "0 auto",
        padding: "2rem",
        lineHeight: "1.6",
        color: "var(--text-primary)",
      }}
    >
      <h1 style={{ color: "var(--text-primary)" }}>About Pet Heaven</h1>

      <div
        style={{
          background: "var(--bg-secondary)",
          padding: "2rem",
          borderRadius: "12px",
          margin: "2rem 0",
          border: "1px solid var(--border-color)",
        }}
      >
        <h2 style={{ color: "var(--text-primary)" }}>Our Vision</h2>
        <p style={{ color: "var(--text-secondary)", margin: 0 }}>
          At Pet Heaven, we're not just rehoming animals—we're architecting
          synergistic human-animal convergence ecosystems. Through our
          proprietary{" "}
          <strong>P.A.W.S.™ (Proactive Animal Wellness Synergy)</strong> 
          framework, we're disrupting the traditional pet adoption paradigm and
          creating value-added companionship experiences.
        </p>
      </div>

      <div style={{ margin: "2rem 0" }}>
        <h2 style={{ color: "var(--text-primary)" }}>Our Mission</h2>
        <p style={{ color: "var(--text-secondary)" }}>
          We leverage cross-functional stakeholder engagement to optimize
          feline-canine placement outcomes while maintaining robust purr-to-bork
          ratios. Our holistic approach ensures maximum tail-wag ROI for all
          parties involved.
        </p>
      </div>

      <div
        style={{
          background: "var(--bg-secondary)",
          padding: "2rem",
          borderRadius: "12px",
          margin: "2rem 0",
          border: "1px solid var(--border-color)",
        }}
      >
        <h2 style={{ color: "var(--text-primary)" }}>Core Values</h2>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li
            style={{
              margin: "1rem 0",
              paddingLeft: "1rem",
              borderLeft: "4px solid var(--accent-color)",
              color: "var(--text-secondary)",
            }}
          >
            <strong style={{ color: "var(--text-primary)" }}>
              Synergistic Snuggling:
            </strong>{" "}
            We believe in leveraging cuddle-based KPIs to drive mutual
            purr-formance.
          </li>
          <li
            style={{
              margin: "1rem 0",
              paddingLeft: "1rem",
              borderLeft: "4px solid #28a745",
              color: "var(--text-secondary)",
            }}
          >
            <strong style={{ color: "var(--text-primary)" }}>
              Disruptive Napping:
            </strong>{" "}
            Innovating rest cycles to maximize human-feline productivity
            alignment.
          </li>
          <li
            style={{
              margin: "1rem 0",
              paddingLeft: "1rem",
              borderLeft: "4px solid #ffc107",
              color: "var(--text-secondary)",
            }}
          >
            <strong style={{ color: "var(--text-primary)" }}>
              Vertical Integration:
            </strong>{" "}
            From whisker to forever home, we own the entire belly-rub value
            chain.
          </li>
        </ul>
      </div>

      <div style={{ margin: "2rem 0" }}>
        <h2 style={{ color: "var(--text-primary)" }}>Our Story</h2>
        <p style={{ color: "var(--text-secondary)" }}>
          Founded in 2024 after a paradigm-shifting whiteboarding session, Pet
          Heaven emerged from a simple insight: traditional pet adoption was
          ripe for disruption. We asked ourselves: "What if we could leverage
          blockchain-enabled treat distribution while maintaining agile
          scratching-post deployment?"
        </p>
        <p style={{ color: "var(--text-secondary)" }}>
          Today, we're proud to be the industry leader in cloud-based
          ear-scratching solutions and AI-powered ball-chasing optimization. Our
          patent-pending{" "}
          <strong style={{ color: "var(--text-primary)" }}>
            Bork-to-Business™
          </strong>{" "}
          model ensures sustainable growth while maintaining purr-fect
          operational excellence.
        </p>
      </div>

      <div
        style={{
          background: "var(--bg-secondary)",
          padding: "2rem",
          borderRadius: "12px",
          margin: "2rem 0",
          border: "1px solid var(--border-color)",
        }}
      >
        <h2 style={{ color: "var(--text-primary)" }}>Metrics That Matter</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "1rem",
          }}
        >
          <div style={{ textAlign: "center" }}>
            <h3
              style={{
                color: "var(--accent-color)",
                fontSize: "2rem",
                margin: "0",
              }}
            >
              15K+
            </h3>
            <p style={{ margin: "0", color: "var(--text-secondary)" }}>
              Synergized Tail Wags
            </p>
          </div>
          <div style={{ textAlign: "center" }}>
            <h3 style={{ color: "#28a745", fontSize: "2rem", margin: "0" }}>
              99.7%
            </h3>
            <p style={{ margin: "0", color: "var(--text-secondary)" }}>
              Purr-fection Rate
            </p>
          </div>
          <div style={{ textAlign: "center" }}>
            <h3 style={{ color: "#ffc107", fontSize: "2rem", margin: "0" }}>
              42x
            </h3>
            <p style={{ margin: "0", color: "var(--text-secondary)" }}>
              ROI on Snack Investments
            </p>
          </div>
        </div>
      </div>

      <div style={{ margin: "2rem 0" }}>
        <h2 style={{ color: "var(--text-primary)" }}>Join Our Pack</h2>
        <p style={{ color: "var(--text-secondary)" }}>
          Ready to leverage your human potential in our dynamic, treat-driven
          ecosystem? Our doors are always open for paradigm-shifting
          collaborators who want to disrupt the status quo one belly rub at a
          time.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
