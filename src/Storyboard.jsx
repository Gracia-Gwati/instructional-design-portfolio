import { useState } from "react";
import "./Storyboard.css";

const screens = [
  {
    number: "01",
    type: "INTRODUCTION",
    title: "The importance of document control",
    purpose:
      "Establish the context and explain why controlled documentation matters during an audit.",
    content:
      "Auditors need to establish whether personnel are using the correct, approved version of a work instruction. An outdated document may create risks for process consistency, traceability and product quality.",
    learnerAction:
      "Review the situation and identify the purpose of document control.",
    designNote:
      "Use a short workplace example before introducing technical terminology.",
  },
  {
    number: "02",
    type: "CONCEPT EXPLORATION",
    title: "What evidence should an auditor examine?",
    purpose:
      "Help learners distinguish documented requirements from observable evidence.",
    content:
      "Relevant evidence may include the approved document register, the revision identifier on the instruction, approval records and the version available at the point of use.",
    learnerAction:
      "Compare the available evidence with the applicable audit criteria.",
    designNote:
      "Present the evidence as a checklist to support scanning and reduce unnecessary cognitive load.",
  },
  {
    number: "03",
    type: "GUIDED PRACTICE",
    title: "Investigate the discrepancy",
    purpose:
      "Give learners a low-risk opportunity to apply the concept before assessment.",
    content:
      "A fictional operator is using revision 2 of a work instruction. The document register identifies revision 3 as the currently approved version. The reason for the discrepancy has not yet been established.",
    learnerAction:
      "Identify what needs to be verified before reaching a conclusion.",
    designNote:
      "Use a realistic discrepancy with enough information to begin an investigation, but not enough to justify unsupported assumptions.",
  },
  {
    number: "04",
    type: "KNOWLEDGE CHECK",
    title: "Choose your next action",
    purpose:
      "Assess whether learners can apply an evidence-based audit approach.",
    content:
      "The learner selects the most appropriate next step from three plausible actions.",
    learnerAction:
      "Choose an action and review the explanatory feedback.",
    designNote:
      "Use distractors based on common errors, such as jumping to conclusions or overlooking evidence.",
  },
  {
    number: "05",
    type: "REFLECTION",
    title: "From evidence to a defensible finding",
    purpose:
      "Consolidate learning and reinforce professional judgement.",
    content:
      "A defensible audit finding should be supported by objective evidence and assessed against applicable criteria. The appropriate conclusion depends on the facts established during the investigation.",
    learnerAction:
      "Summarise the evidence, applicable criteria and remaining questions.",
    designNote:
      "End with a practical takeaway learners can transfer to other audit situations.",
  },
];

function ScreenPreview({ index }) {
  if (index === 0) {
    return (
      <div className="story-visual intro-visual">
        <span className="visual-label">LEARNING MODULE</span>
        <div className="visual-document-icon">01</div>
        <h4>Document control</h4>
        <p>Evidence. Accuracy. Traceability.</p>
        <div className="visual-progress">
          <span style={{ width: "20%" }} />
        </div>
        <small>Screen 1 of 5</small>
      </div>
    );
  }

  if (index === 1) {
    return (
      <div className="story-visual">
        <span className="visual-label">EVIDENCE CHECKLIST</span>
        {[
          "Approved document register",
          "Revision identifier",
          "Approval record",
          "Document at point of use",
        ].map((item, i) => (
          <div className="visual-check-item" key={item}>
            <span>{String(i + 1).padStart(2, "0")}</span>
            {item}
          </div>
        ))}
        <small>Illustrative learning content</small>
      </div>
    );
  }

  if (index === 2) {
    return (
      <div className="story-visual">
        <span className="visual-label">CASE FILE 001</span>
        <div className="document-comparison">
          <div>
            <small>IN USE</small>
            <strong>REV 02</strong>
            <span>Operator copy</span>
          </div>
          <div>
            <small>REGISTER</small>
            <strong>REV 03</strong>
            <span>Approved version</span>
          </div>
        </div>
        <p className="visual-question">
          What would you verify before concluding?
        </p>
      </div>
    );
  }

  if (index === 3) {
    return (
      <div className="story-visual">
        <span className="visual-label">KNOWLEDGE CHECK</span>
        <h4>Choose the next step</h4>
        {[
          "Verify the evidence and applicable criteria",
          "Declare the entire system non-compliant",
          "Replace the document and close the issue",
        ].map((item, i) => (
          <div className="visual-answer" key={item}>
            <span>{String.fromCharCode(65 + i)}</span>
            {item}
          </div>
        ))}
        <small>Illustrative screen layout</small>
      </div>
    );
  }

  return (
    <div className="story-visual reflection-visual">
      <span className="visual-label">KEY TAKEAWAY</span>
      <div className="reflection-mark">“</div>
      <h4>Evidence before conclusions.</h4>
      <p>
        Verify the facts. Identify the criteria. Document the reasoning.
      </p>
    </div>
  );
}

function ScenarioAssessment() {
  const [answer, setAnswer] = useState("");
  const [checked, setChecked] = useState(false);

  const options = [
    {
      value: "a",
      text: "Declare the entire quality management system non-compliant immediately.",
    },
    {
      value: "b",
      text: "Verify the discrepancy, establish the applicable criteria and gather relevant evidence.",
    },
    {
      value: "c",
      text: "Replace the instruction without documenting the discrepancy.",
    },
  ];

  return (
    <div className="story-assessment">
      <div className="assessment-topline">
        <span className="assessment-tag">INTERACTIVE PROTOTYPE</span>
        <span className="assessment-duration">2 minutes</span>
      </div>

      <h3>What would you do next?</h3>

      <p className="assessment-scenario">
        During a fictional audit, an operator is using revision 2 of a
        work instruction, while the document register identifies revision
        3 as approved. You have not yet established why the discrepancy
        occurred.
      </p>

      <fieldset className="assessment-fieldset">
        <legend>Select the most appropriate next action.</legend>

        {options.map((option) => (
          <label
            key={option.value}
            className={`assessment-option ${
              answer === option.value ? "is-selected" : ""
            }`}
          >
            <input
              type="radio"
              name="storyboard-assessment"
              value={option.value}
              checked={answer === option.value}
              onChange={() => {
                setAnswer(option.value);
                setChecked(false);
              }}
            />
            <span>{option.text}</span>
          </label>
        ))}
      </fieldset>

      <button
        className="button button-primary"
        disabled={!answer}
        onClick={() => setChecked(true)}
      >
        Submit answer
      </button>

      {checked && (
        <div
          className={`assessment-feedback ${
            answer === "b" ? "is-correct" : "needs-review"
          }`}
          role="status"
          aria-live="polite"
        >
          <strong>
            {answer === "b"
              ? "Correct — establish the evidence first."
              : "Review your decision."}
          </strong>
          <p>
            {answer === "b"
              ? "Verify the document versions, determine the applicable criteria and establish the facts before deciding whether an audit finding is justified."
              : "Avoid making a broad conclusion or taking corrective action without understanding the discrepancy. An evidence-based approach supports a defensible audit decision."}
          </p>
        </div>
      )}

      <p className="story-disclaimer">
        Fictional training example for portfolio demonstration. This is not
        an authoritative interpretation of medical device regulations or
        a substitute for approved audit procedures.
      </p>
    </div>
  );
}

export default function Storyboard() {
  const [activeScreen, setActiveScreen] = useState(0);
  const current = screens[activeScreen];

  return (
    <section className="storyboard-section" id="storyboard">
      <div className="storyboard-heading">
        <p className="eyebrow">DESIGN ARTEFACT · 01</p>
        <h2>Inside the storyboard.</h2>
        <p>
          A sample design blueprint showing how technical information can
          be transformed into structured online learning, guided practice
          and scenario-based assessment.
        </p>
      </div>

      <div className="storyboard-brief">
        <div>
          <span className="brief-label">PROJECT TYPE</span>
          <strong>Technical compliance training</strong>
        </div>
        <div>
          <span className="brief-label">AUDIENCE</span>
          <strong>Developing medical device auditors</strong>
        </div>
        <div>
          <span className="brief-label">FORMAT</span>
          <strong>Self-paced online module</strong>
        </div>
        <div>
          <span className="brief-label">STATUS</span>
          <strong>Fictional demonstration</strong>
        </div>
      </div>

      <div className="storyboard-layout">
        <nav className="storyboard-nav" aria-label="Storyboard screens">
          <p className="eyebrow">MODULE SEQUENCE</p>

          {screens.map((screen, index) => (
            <button
              key={screen.number}
              className={`story-nav-item ${
                activeScreen === index ? "active" : ""
              }`}
              onClick={() => setActiveScreen(index)}
              aria-current={activeScreen === index ? "step" : undefined}
            >
              <span>{screen.number}</span>
              <span>{screen.title}</span>
            </button>
          ))}

          <p className="storyboard-nav-hint">
            Select a screen to explore the design.
          </p>
        </nav>

        <div className="storyboard-detail" aria-live="polite">
          <div className="story-detail-heading">
            <div>
              <span className="screen-type">{current.type}</span>
              <h3>{current.title}</h3>
            </div>
            <span className="screen-count">
              {activeScreen + 1} / {screens.length}
            </span>
          </div>

          <ScreenPreview index={activeScreen} />

          <div className="story-detail-copy">
            <div>
              <h4>Design purpose</h4>
              <p>{current.purpose}</p>
            </div>
            <div>
              <h4>Proposed on-screen content</h4>
              <p>{current.content}</p>
            </div>
            <div>
              <h4>Learner interaction</h4>
              <p>{current.learnerAction}</p>
            </div>
            <div className="design-rationale">
              <h4>Instructional design rationale</h4>
              <p>{current.designNote}</p>
            </div>
          </div>

          <div className="storyboard-controls">
            <button
              className="story-control secondary"
              disabled={activeScreen === 0}
              onClick={() => setActiveScreen((value) => value - 1)}
            >
              ← Previous
            </button>
            <button
              className="story-control primary"
              disabled={activeScreen === screens.length - 1}
              onClick={() => setActiveScreen((value) => value + 1)}
            >
              Next screen →
            </button>
          </div>
        </div>
      </div>

      <div className="story-assessment-section">
        <div className="story-assessment-intro">
          <p className="eyebrow">FROM STORYBOARD TO INTERACTION</p>
          <h2>Experience the learning.</h2>
          <p>
            The assessment below demonstrates how a storyboard concept
            can become an interactive learning activity with immediate,
            explanatory feedback.
          </p>
        </div>

        <ScenarioAssessment />
      </div>

      <div className="storyboard-method">
        <p className="eyebrow">MY DESIGN APPROACH</p>
        <h3>Why this sequence?</h3>
        <div className="method-grid">
          <div>
            <span>01</span>
            <h4>Explain</h4>
            <p>Introduce the concept and establish relevance.</p>
          </div>
          <div>
            <span>02</span>
            <h4>Demonstrate</h4>
            <p>Make the evidence and decision process visible.</p>
          </div>
          <div>
            <span>03</span>
            <h4>Practise</h4>
            <p>Give learners a chance to apply their understanding.</p>
          </div>
          <div>
            <span>04</span>
            <h4>Evaluate</h4>
            <p>Use feedback to reinforce reasoning and identify gaps.</p>
          </div>
        </div>
      </div>

      <p className="storyboard-disclaimer">
        All organisations, scenarios and example materials in this artefact
        are fictional and were created for portfolio demonstration. The
        content does not reproduce confidential project materials.
      </p>
    </section>
  );
}