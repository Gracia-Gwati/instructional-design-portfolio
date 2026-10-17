
import { useEffect, useRef, useState } from "react";
import "./CaseStudies.css";

const projects = [
  {
    id: 1,
    category: "TECHNICAL LEARNING DESIGN",
    title: "Medical Device Auditor Training",
    description:
      "Transforming technical training content into practical online learning.",
    challenge:
      "Learners need to apply technical requirements to realistic audit situations, not simply recall information.",
    process: [
      "Analyse source materials and identify essential knowledge.",
      "Write learning objectives focused on applying audit criteria.",
      "Convert presentation content into structured online modules.",
      "Develop scenario-based assessments with explanatory feedback.",
      "Review technical accuracy, accessibility and assessment alignment.",
    ],
    artefact: "scenario",
  },
  {
    id: 2,
    category: "CURRICULUM DESIGN",
    title: "Qualification Mapping",
    description:
      "Aligning qualification requirements with learning outcomes, study hours and online modules.",
    challenge:
      "Course content, learning activities and assessment need to align with qualification requirements.",
    process: [
      "Map qualification requirements to measurable learning outcomes.",
      "Scope learning hours across content, practice and assessment.",
      "Select suitable instructional strategies and activities.",
      "Develop online modules and publish them in the LMS.",
      "Review the finished course against the curriculum mapping.",
    ],
    artefact: "mapping",
  },
  {
    id: 3,
    category: "LEARNING PLATFORM MANAGEMENT",
    title: "Online Course Quality Assurance",
    description:
      "Coordinating content updates and quality reviews across multiple subject areas.",
    challenge:
      "Course materials must remain accurate and consistent as academic requirements and relevant standards change.",
    process: [
      "Audit existing course materials and identify review priorities.",
      "Consult academic staff and relevant subject specialists.",
      "Coordinate revisions and document changes.",
      "Quality-assure updated content and assessments.",
      "Verify the published course and close the review.",
    ],
    artefact: "tracker",
  },
];

function CaseStudyOverview({ type }) {
  const content = {
    scenario: {
      category: "TECHNICAL LEARNING DESIGN",
      title: "From technical slides to applied learning",
      challenge:
        "How can complex medical-device regulatory content be transformed into an engaging online learning experience that prepares auditors to apply their knowledge in realistic situations?",
      approach:
        "Structure technical content into manageable modules, introduce workplace-inspired scenarios and use assessment questions to encourage learners to apply regulatory concepts rather than simply recall information.",
      contribution:
        "Technical content transformation, scenario-based learning design, assessment development and the translation of specialist information into structured online learning.",
      evaluation:
        "Assess question-level performance, gather learner feedback and test whether learners can apply the concepts to unfamiliar audit scenarios.",
    },
    mapping: {
      category: "CURRICULUM AND LEARNING DESIGN",
      title: "Mapping qualification requirements to online learning",
      challenge:
        "How can qualification requirements be translated into coherent online modules with measurable learning outcomes, appropriate assessments and a realistic allocation of learning hours?",
      approach:
        "Map requirements to learning outcomes, align activities and assessments with those outcomes, estimate learner workload and structure the materials for online delivery.",
      contribution:
        "Curriculum mapping, learning-hour planning, instructional alignment and the coordination of content development and LMS authoring.",
      evaluation:
        "Review outcome coverage, verify assessment alignment, validate workload estimates and obtain academic approval before publication.",
    },
    quality: {
      category: "LEARNING PLATFORM MANAGEMENT",
      title: "Maintaining quality across an online learning platform",
      challenge:
        "How can online courses remain current, consistent and ready for publication while content updates, academic reviews and quality checks progress in parallel?",
      approach:
        "Track course versions and review status, prioritise updates, coordinate academic input, quality-assure revisions and record approval before publication.",
      contribution:
        "Workflow coordination, stakeholder management, content governance, quality assurance and the management of competing delivery priorities.",
      evaluation:
        "Monitor review turnaround times, overdue actions, quality approval and rework, alongside feedback from academic stakeholders.",
    },
  };

  const item = content[type];

  if (!item) return null;

  return (
    <section className="case-study-overview">
      <p className="artefact-label">{item.category}</p>

      <h3>{item.title}</h3>

      <div className="case-study-overview-section">
        <h4>The challenge</h4>
        <p>{item.challenge}</p>
      </div>

      <div className="case-study-overview-section">
        <h4>My approach</h4>
        <p>{item.approach}</p>
      </div>

      <div className="case-study-contribution">
        <h4>Skills demonstrated</h4>
        <p>{item.contribution}</p>
      </div>

      <div className="case-study-evaluation">
        <h4>Evaluation approach</h4>
        <p>{item.evaluation}</p>
      </div>
    </section>
  );
}

function DesignRationale() {
  const sections = [
    {
      number: "01",
      title: "Learning objectives",
      content:
        "By the end of the learning experience, learners should be able to identify potential audit evidence gaps, select appropriate evidence-gathering actions, and communicate potential findings against applicable criteria.",
      decision:
        "Objectives focus on observable professional decisions rather than simply recalling regulatory terminology.",
    },
    {
      number: "02",
      title: "Instructional strategy",
      content:
        "Use short, workplace-inspired scenarios with plausible response options, immediate feedback and opportunities to retry.",
      decision:
        "Scenario-based practice gives learners a safe space to consider consequences before applying their judgement in a real audit.",
    },
    {
      number: "03",
      title: "Assessment design",
      content:
        "Each question presents a situation, relevant evidence, a decision point and explanatory feedback. The final screen summarises performance across three scenarios.",
      decision:
        "Feedback explains the reasoning behind an appropriate response instead of relying on a score alone.",
    },
    {
      number: "04",
      title: "Evaluation plan",
      content:
        "Pilot the activity with representative learners, gather feedback on clarity and relevance, review question-level performance, and compare results with a suitable follow-up assessment.",
      decision:
        "Completion and scores provide initial indicators, but learner feedback and evidence of later workplace application are needed to assess effectiveness.",
    },
  ];

  return (
    <section className="design-rationale">
      <p className="artefact-label">BEHIND THE DESIGN</p>

      <h3>Design rationale</h3>

      <p className="design-rationale-intro">
        This demonstration shows how learning objectives,
        instructional strategy, assessment and evaluation
        can work together to support professional judgement.
      </p>

      <div className="rationale-list">
        {sections.map((section) => (
          <article className="rationale-item" key={section.number}>
            <span className="rationale-number">{section.number}</span>

            <div className="rationale-content">
              <h4>{section.title}</h4>

              <p>{section.content}</p>

              <div className="rationale-decision">
                <strong>Design decision</strong>
                <p>{section.decision}</p>
              </div>
            </div>
          </article>
        ))}
      </div>

    </section>
  );
}

function ScenarioAssessment() {
  const scenarios = [
    {
      topic: "DOCUMENT CONTROL",
      title: "Investigating a document discrepancy",
      situation:
        "You discover that an operator is using revision 2 of a work instruction, while the document register lists revision 3 as approved.",
      evidence:
        "The revision numbers differ, but you have not established why or whether the older version was authorised for use.",
      question: "What is the most appropriate next action?",
      options: [
        {
          id: "A",
          text: "Declare the entire quality management system non-compliant immediately.",
          feedback:
            "This conclusion is premature. Establish the facts and determine the scope of any issue before drawing an audit conclusion.",
        },
        {
          id: "B",
          text: "Verify the applicable requirements, investigate the discrepancy and gather objective evidence.",
          feedback:
            "Correct. Verify the approved version, examine relevant records and establish the facts before deciding whether the evidence supports a finding.",
        },
        {
          id: "C",
          text: "Replace the document without recording the discrepancy.",
          feedback:
            "This bypasses the investigation. The discrepancy needs to be examined and documented through the appropriate process.",
        },
      ],
      correct: "B",
      takeaway:
        "Establish what happened and gather evidence before reaching a conclusion.",
    },
    {
      topic: "AUDIT EVIDENCE",
      title: "Verifying a training record",
      situation:
        "During a fictional audit, a team leader says that all operators completed their required training. However, the training records you have reviewed do not show completion for one operator.",
      evidence:
        "You have a verbal statement and an incomplete record. Other relevant records have not yet been checked.",
      question: "What should you do next?",
      options: [
        {
          id: "A",
          text: "Accept the verbal statement as sufficient evidence.",
          feedback:
            "A verbal statement may inform your investigation, but it may not be sufficient on its own to verify completion against the applicable requirements.",
        },
        {
          id: "B",
          text: "Conclude that every operator is inadequately trained.",
          feedback:
            "The evidence relates to one record so far. Avoid extending a conclusion beyond what the available evidence supports.",
        },
        {
          id: "C",
          text: "Check the relevant training records and seek corroborating evidence from appropriate sources.",
          feedback:
            "Correct. Verify the situation using relevant records and other appropriate evidence, then assess it against the applicable criteria.",
        },
      ],
      correct: "C",
      takeaway:
        "Corroborate statements with appropriate evidence and keep conclusions proportionate to what you have verified.",
    },
    {
      topic: "AUDIT COMMUNICATION",
      title: "Communicating a potential finding",
      situation:
        "You have gathered evidence that a required review may not have been completed. Before closing the audit, you need to communicate the issue to the auditee.",
      evidence:
        "You have identified the relevant record, the applicable requirement and the missing evidence. You have not yet discussed the discrepancy with the responsible representative.",
      question: "Which approach is most appropriate?",
      options: [
        {
          id: "A",
          text: "Explain the evidence and applicable criteria, discuss the discrepancy and follow the agreed audit reporting process.",
          feedback:
            "Correct. Clear, evidence-based communication helps the auditee understand the issue and allows the finding to be documented through the appropriate process.",
        },
        {
          id: "B",
          text: "Assign blame to the person responsible for maintaining the record.",
          feedback:
            "Personal blame is not a substitute for objective reporting. Focus on the evidence, applicable criteria and the process for documenting findings.",
        },
        {
          id: "C",
          text: "Omit the issue from the audit report to avoid disagreement.",
          feedback:
            "Potential findings should be handled through the appropriate audit process. Avoiding a difficult conversation does not resolve an evidence-based concern.",
        },
      ],
      correct: "A",
      takeaway:
        "Communicate potential findings clearly, objectively and in accordance with the applicable audit process.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [responses, setResponses] = useState([]);

  const current = scenarios[currentIndex];
  const isComplete = currentIndex >= scenarios.length;

  const score = responses.filter(
    (response) => response.correct
  ).length;

  function handleSubmit(event) {
    event.preventDefault();

    if (!selectedAnswer || submitted) return;

    const correct = selectedAnswer === current.correct;

    setResponses((previous) => [
      ...previous,
      {
        topic: current.topic,
        title: current.title,
        selected: selectedAnswer,
        correct,
        takeaway: current.takeaway,
      },
    ]);

    setSubmitted(true);
  }

  function handleNext() {
    setCurrentIndex((previous) => previous + 1);
    setSelectedAnswer("");
    setSubmitted(false);
  }

  function handleRestart() {
    setCurrentIndex(0);
    setSelectedAnswer("");
    setSubmitted(false);
    setResponses([]);
  }

  if (isComplete) {
    const percentage = Math.round(
      (score / scenarios.length) * 100
    );

    return (
      <div className="artefact scenario-assessment">
        <p className="artefact-label">
          SIMULATION COMPLETE
        </p>

        <div className="scenario-results">
          <div className="scenario-score-circle">
            <span>{percentage}%</span>
          </div>

          <h4>Audit simulation completed</h4>

          <p>
            You answered {score} out of {scenarios.length} questions
            correctly on your first attempt.
          </p>

          <p className="scenario-results-caption">
            {score === 3
              ? "Excellent work. You demonstrated sound evidence-based decision-making across all three scenarios."
              : score === 2
                ? "Good progress. Review the feedback below to strengthen your audit judgement."
                : "Use the feedback below to revisit the key principles and try the simulation again."}
          </p>
        </div>

        <h4 className="scenario-review-heading">
          Review your decisions
        </h4>

        <div className="scenario-review-list">
          {responses.map((response, index) => (
            <div
              className="scenario-review-item"
              key={response.topic}
            >
              <div className="scenario-review-top">
                <span>
                  0{index + 1} / {response.topic}
                </span>
                <strong
                  className={
                    response.correct
                      ? "scenario-result-correct"
                      : "scenario-result-incorrect"
                  }
                >
                  {response.correct ? "Correct" : "Review"}
                </strong>
              </div>

              <p className="scenario-review-title">
                {response.title}
              </p>

              <p>{response.takeaway}</p>
            </div>
          ))}
        </div>

        <div className="scenario-final-takeaway">
          <strong>Key learning message</strong>
          <p>
            Effective audit decisions rely on verified evidence,
            applicable criteria, proportionate conclusions and
            clear communication.
          </p>
        </div>

        <button
          className="scenario-submit"
          type="button"
          onClick={handleRestart}
        >
          Restart simulation ↻
        </button>

        <p className="artifact-note">
          This fictional simulation is a learning demonstration,
          not a validated assessment or regulatory interpretation.
        </p>
      </div>
    );

  }

  const selectedOption = current.options.find(
    (option) => option.id === selectedAnswer
  );

  return (
    <div className="artefact scenario-assessment">
      <div className="scenario-topline">
        <span className="artefact-label">
          INTERACTIVE LEARNING SIMULATION
        </span>
        <span className="scenario-step">
          SCENARIO {currentIndex + 1} OF {scenarios.length}
        </span>
      </div>

      <div
        className="scenario-progress"
        role="progressbar"
        aria-label="Simulation progress"
        aria-valuemin={0}
        aria-valuemax={scenarios.length}
        aria-valuenow={currentIndex}
      >
        <span
          style={{
            width: `${(currentIndex / scenarios.length) * 100}%`,
          }}
        />
      </div>

      <p className="scenario-context">{current.topic}</p>

      <h4>{current.title}</h4>

      <p className="scenario-intro">{current.situation}</p>

      <div className="scenario-evidence">
        <span aria-hidden="true">i</span>
        <p>
          <strong>Evidence available</strong>
          <br />
          {current.evidence}
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <fieldset className="scenario-fieldset">
          <legend>{current.question}</legend>

          <div className="scenario-options">
            {current.options.map((option) => {
              const isSelected = selectedAnswer === option.id;
              const isCorrect = option.id === current.correct;

              let optionClass = "scenario-option";

              if (isSelected) optionClass += " is-selected";

              if (submitted && isCorrect) {
                optionClass += " is-correct";
              } else if (submitted && isSelected) {
                optionClass += " is-incorrect";
              }

              return (
                <label className={optionClass} key={option.id}>
                  <input
                    type="radio"
                    name={`audit-answer-${currentIndex}`}
                    value={option.id}
                    checked={isSelected}
                    disabled={submitted}
                    onChange={() => setSelectedAnswer(option.id)}
                  />

                  <span className="scenario-option-letter">
                    {option.id}
                  </span>

                  <span className="scenario-option-text">
                    {option.text}
                  </span>

                  {submitted && isCorrect && (
                    <span className="scenario-correct-mark">
                      Best response
                    </span>
                  )}
                </label>
              );
            })}
          </div>
        </fieldset>

        {!submitted ? (
          <button
            className="scenario-submit"
            type="submit"
            disabled={!selectedAnswer}
          >
            Submit answer →
          </button>
        ) : (
          <div
            className={
              selectedAnswer === current.correct
                ? "scenario-feedback feedback-correct"
                : "scenario-feedback feedback-incorrect"
            }
            role="status"
            aria-live="polite"
          >
            <p className="scenario-feedback-heading">
              {selectedAnswer === current.correct
                ? "Well done — appropriate response"
                : "Not quite — review the evidence"}
            </p>

            <p>{selectedOption.feedback}</p>

            <p className="scenario-takeaway">
              <strong>Key learning point:</strong>{" "}
              {current.takeaway}
            </p>

            <button
              className="scenario-submit"
              type="button"
              onClick={handleNext}
            >
              {currentIndex === scenarios.length - 1
                ? "View results →"
                : "Next scenario →"}
            </button>
          </div>
        )}
      </form>

      <p className="artifact-note">
        Scenarios are illustrative
        and are not approved audit procedures or regulatory guidance.
      </p>
    </div>
  );
}


function Artefact({ type }) {
  if (type === "scenario") {
    return <ScenarioAssessment />;
  }

  if (type === "mapping") {
  return <CurriculumBlueprint />;
}
  return <LearningPlatformDashboard />;
}

export default function CaseStudies() {
  const [activeProject, setActiveProject] = useState(null);
  const modalRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    if (!activeProject) return;

    const previousOverflow = document.body.style.overflow;

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setActiveProject(null);
        return;
      }

      if (event.key !== "Tab") return;

      const focusableElements = modalRef.current?.querySelectorAll(
        'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );

      if (!focusableElements?.length) return;

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (
        !event.shiftKey &&
        document.activeElement === lastElement
      ) {
        event.preventDefault();
        firstElement.focus();
      }
    }

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      triggerRef.current?.focus();
    };
  }, [activeProject]);

  return (
    <section className="case-studies" id="work">
      <header className="case-studies-heading" id="case-studies">
        <h2>Case Studies</h2>
        <p className="portfolio-demo-note">
          The case studies in this portfolio use fictional content
          and original demonstration artefacts inspired by the
          types of learning design and project delivery challenges
          I have worked on professionally. They illustrate my
          approach and capabilities without disclosing confidential
          client materials.
        </p>
      </header>

      <div className="case-grid">
        {projects.map((project) => (
          <article
            className="case-card"
            id={`case-study-${project.id}`}
            key={project.id}
          >
            <span className="case-number">
              0{project.id}
            </span>
            <p className="case-category">{project.category}</p>
            <h3>{project.title}</h3>
            <p className="case-summary">{project.description}</p>
            <button
              className="case-button"
              type="button"
              aria-label={`View ${project.title} case study`}
              onClick={(event) => {
                triggerRef.current = event.currentTarget;
                setActiveProject(project);
              }}
            >
              View case study ↗
            </button>
          </article>
        ))}
      </div>

      {activeProject && (
        <div
          className="case-modal-backdrop"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setActiveProject(null);
            }
          }}
        >
          <section
            className="case-modal"
            ref={modalRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            <div className="case-modal-top">
              <p className="case-category">
                {activeProject.category}
              </p>
              <button
                className="case-modal-close"
                type="button"
                onClick={() => setActiveProject(null)}
                aria-label="Close case study"
                autoFocus
              >
                ×
              </button>
            </div>

            <h2 id="modal-title">{activeProject.title}</h2>
            <p className="case-modal-summary">
              {activeProject.description}
            </p>

            <CaseStudyOverview
              type={
                activeProject.artefact === "tracker"
                  ? "quality"
                  : activeProject.artefact
              }
            />

            <div className="case-modal-section">
              <h3>Design process</h3>
              <ol className="process-list">
                {activeProject.process.map((step, index) => (
                  <li key={step}>
                    <span className="process-index">
                      0{index + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="case-modal-section">
              <h3>Sample artefact</h3>
              <p className="artefact-description">
                An independently created fictional demonstration.
                It does not reproduce confidential client work.
              </p>
              <Artefact type={activeProject.artefact} />
              
              {activeProject.artefact === "tracker" && (
                <PlatformDesignProcess />
              )}

              {activeProject.artefact === "scenario" && (
                <DesignRationale />
              )}
            </div>

          </section>
        </div>
      )}
    </section>
  );
}

function CurriculumBlueprint() {
  const [activeTab, setActiveTab] = useState("mapping");

  const curriculum = [
    {
      id: "LO1",
      requirement: "Interpret a dataset",
      outcome:
        "Interpret a structured dataset and identify relevant patterns.",
      activity: "Guided data exploration",
      assessment: "Data interpretation task",
      hours: 3,
    },
    {
      id: "LO2",
      requirement: "Analyse information",
      outcome:
        "Analyse data patterns and explain their significance.",
      activity: "Worked example and practice",
      assessment: "Applied case exercise",
      hours: 3,
    },
    {
      id: "LO3",
      requirement: "Communicate findings",
      outcome:
        "Present an evidence-based conclusion for a defined audience.",
      activity: "Model report and reflection",
      assessment: "Written recommendation",
      hours: 2,
    },
  ];

  const totalHours = curriculum.reduce(
    (total, item) => total + item.hours,
    0
  );

  return (
    <div className="artefact curriculum-blueprint">
      <div className="curriculum-header">
        <p className="artefact-label">
          FICTIONAL CURRICULUM DESIGN PROJECT
        </p>

        <h4>Applied Data Analysis</h4>

        <p>
          Illustrative module blueprint showing how qualification
          requirements can be translated into aligned learning
          outcomes, activities and assessments.
        </p>

        <div className="curriculum-meta">
          <span>3 learning outcomes</span>
          <span>{totalHours} learning hours</span>
          <span>Online delivery</span>
        </div>
      </div>

      <div
        className="curriculum-tabs"
        role="group"
        aria-label="Curriculum blueprint views"
      >
        <button
          type="button"
          className={
            activeTab === "mapping"
              ? "curriculum-tab active"
              : "curriculum-tab"
          }
          aria-pressed={activeTab === "mapping"}
          onClick={() => setActiveTab("mapping")}
        >
          Outcome mapping
        </button>

        <button
          type="button"
          className={
            activeTab === "hours"
              ? "curriculum-tab active"
              : "curriculum-tab"
          }
          aria-pressed={activeTab === "hours"}
          onClick={() => setActiveTab("hours")}
        >
          Learning hours
        </button>
      </div>

      {activeTab === "mapping" && (
        <div className="curriculum-view">
          <p className="curriculum-view-intro">
            Select a row to explore the alignment between the
            intended outcome, learning activity and assessment.
          </p>

          {curriculum.map((item) => (
            <details className="curriculum-row" key={item.id}>
              <summary>
                <span className="curriculum-lo">
                  {item.id}
                </span>

                <span className="curriculum-row-title">
                  {item.requirement}
                </span>

                <span className="curriculum-chevron" aria-hidden="true">
                  +
                </span>
              </summary>

              <div className="curriculum-row-content">
                <div>
                  <span>LEARNING OUTCOME</span>
                  <p>{item.outcome}</p>
                </div>

                <div>
                  <span>LEARNING ACTIVITY</span>
                  <p>{item.activity}</p>
                </div>

                <div>
                  <span>ASSESSMENT</span>
                  <p>{item.assessment}</p>
                </div>

                <div>
                  <span>ALLOCATED TIME</span>
                  <p>{item.hours} hours</p>
                </div>
              </div>
            </details>
          ))}
        </div>
      )}

      {activeTab === "hours" && (
        <div className="curriculum-view">
          <p className="curriculum-view-intro">
            An illustrative allocation of time across the
            complete module.
          </p>

          {[
            {
              label: "Guided learning",
              hours: 3,
              description:
                "Explanations, demonstrations and worked examples.",
              color: "#245B8F",
            },
            {
              label: "Independent practice",
              hours: 3,
              description:
                "Data exploration and applied practice activities.",
              color: "#4D8CC1",
            },
            {
              label: "Assessment and review",
              hours: 2,
              description:
                "Completing the assessment and reviewing feedback.",
              color: "#91B8D9",
            },
          ].map((item) => (
            <div className="hour-allocation" key={item.label}>
              <div className="hour-allocation-top">
                <strong>{item.label}</strong>
                <span>{item.hours} hours</span>
              </div>

              <div
                className="hour-bar"
                role="img"
                aria-label={`${item.label}: ${item.hours} of ${totalHours} hours`}
              >
                <span
                  style={{
                    width: `${(item.hours / totalHours) * 100}%`,
                    background: item.color,
                  }}
                />
              </div>

              <p>{item.description}</p>
            </div>
          ))}

          <div className="hour-total">
            <span>Total allocated learning time</span>
            <strong>{totalHours} hours</strong>
          </div>
        </div>
      )}

      <div className="curriculum-design-note">
        <strong>Design consideration</strong>
        <p>
          Learning outcomes, practice activities and assessments
          should be aligned before content production begins.
          Learning-hour allocations should be checked against
          the relevant qualification requirements and expected
          learner workload.
        </p>
      </div>

    </div>
  );
}

function LearningPlatformDashboard() {
  const [filter, setFilter] = useState("All");
  const [selectedCourse, setSelectedCourse] = useState(null);

  const courses = [
    {
      id: "AI101",
      title: "Introduction to Artificial Intelligence",
      area: "AI foundations",
      status: "Academic review",
      progress: 80,
      version: "2.1",
      owner: "AI Programme Lead",
      update: "Review learning outcomes and introductory examples.",
      priority: "Medium",
    },
    {
      id: "ML201",
      title: "Data Preparation for Machine Learning",
      area: "Machine learning",
      status: "In progress",
      progress: 55,
      version: "1.4",
      owner: "Machine Learning Lecturer",
      update: "Refresh dataset examples and data quality activities.",
      priority: "High",
    },
    {
      id: "ML202",
      title: "Supervised Learning and Model Evaluation",
      area: "Machine learning",
      status: "Quality assurance",
      progress: 90,
      version: "2.0",
      owner: "Academic Reviewer",
      update: "Validate evaluation metrics and assessment alignment.",
      priority: "High",
    },
    {
      id: "AI301",
      title: "Responsible AI and Model Governance",
      area: "Responsible AI",
      status: "Published",
      progress: 100,
      version: "1.2",
      owner: "Programme Lead",
      update: "Monitor changes to relevant guidance and review references.",
      priority: "Medium",
    },
  ];

  const statuses = [
    "All",
    "In progress",
    "Academic review",
    "Quality assurance",
    "Published",
  ];

  const filteredCourses =
    filter === "All"
      ? courses
      : courses.filter((course) => course.status === filter);

  const completed = courses.filter(
    (course) => course.status === "Published"
  ).length;

  const inReview = courses.filter(
    (course) =>
      course.status === "Academic review" ||
      course.status === "Quality assurance"
  ).length;

  return (
    <div className="artefact platform-dashboard">
      <div className="dashboard-heading">
        <p className="artefact-label">
          FICTIONAL PLATFORM MANAGEMENT PROJECT
        </p>

        <h4>AI &amp; Machine Learning Learning Hub</h4>

        <p>
          Illustrative course governance dashboard for tracking
          content updates, academic reviews and publication
          readiness across an online learning platform.
        </p>

        <div className="dashboard-demo-label">
          DEMONSTRATION DATA · NOT A LIVE LMS
        </div>
      </div>

      <div className="dashboard-metrics">
        <div className="dashboard-metric">
          <span>COURSES TRACKED</span>
          <strong>{courses.length}</strong>
          <small>Across 3 subject areas</small>
        </div>

        <div className="dashboard-metric">
          <span>IN REVIEW</span>
          <strong>{inReview}</strong>
          <small>Academic or quality review</small>
        </div>

        <div className="dashboard-metric">
          <span>PUBLISHED</span>
          <strong>{completed}</strong>
          <small>Illustrative status</small>
        </div>
      </div>

      <div className="dashboard-section-heading">
        <div>
          <h4>Course quality tracker</h4>
          <p>Filter courses by their current workflow status.</p>
        </div>
      </div>

      <div
        className="dashboard-filters"
        role="group"
        aria-label="Filter courses by status"
      >
        {statuses.map((status) => (
          <button
            key={status}
            type="button"
            className={
              filter === status
                ? "dashboard-filter active"
                : "dashboard-filter"
            }
            aria-pressed={filter === status}
            onClick={() => setFilter(status)}
          >
            {status}
          </button>
        ))}
      </div>

      <div className="dashboard-course-list">
        {filteredCourses.map((course) => (
          <article className="dashboard-course" key={course.id}>
            <div className="dashboard-course-top">
              <div>
                <span className="dashboard-course-id">
                  {course.id} · {course.area}
                </span>
                <h5>{course.title}</h5>
              </div>

              <span
                className={`dashboard-status status-${course.status
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`}
              >
                {course.status}
              </span>
            </div>

            <div className="dashboard-progress-label">
              <span>Illustrative workflow progress</span>
              <strong>{course.progress}%</strong>
            </div>

            <div
              className="dashboard-progress"
              role="img"
              aria-label={`Illustrative workflow progress: ${course.progress}%`}
            >
              <span style={{ width: `${course.progress}%` }} />
            </div>

            <p className="dashboard-course-update">
              <strong>Next action:</strong> {course.update}
            </p>

            <button
              type="button"
              className="dashboard-detail-button"
              aria-expanded={selectedCourse === course.id}
              onClick={() =>
                setSelectedCourse(
                  selectedCourse === course.id ? null : course.id
                )
              }
            >
              {selectedCourse === course.id
                ? "Hide review details −"
                : "View review details +"}
            </button>

            {selectedCourse === course.id && (
              <div className="dashboard-course-details">
                <div>
                  <span>CONTENT VERSION</span>
                  <strong>{course.version}</strong>
                </div>

                <div>
                  <span>REVIEW OWNER</span>
                  <strong>{course.owner}</strong>
                </div>

                <div>
                  <span>PRIORITY</span>
                  <strong>{course.priority}</strong>
                </div>

                <div>
                  <span>PUBLICATION CHECK</span>
                  <strong>
                    {course.status === "Published"
                      ? "Published — monitor for updates"
                      : "Pending workflow completion"}
                  </strong>
                </div>
              </div>
            )}
          </article>
        ))}
      </div>

      {filteredCourses.length === 0 && (
        <p className="dashboard-empty">
          No courses match this filter.
        </p>
      )}

      <div className="dashboard-workflow">
        <p className="artefact-label">CONTENT GOVERNANCE WORKFLOW</p>

        <div className="dashboard-workflow-steps">
          {[
            "Identify update",
            "Consult academic staff",
            "Revise content",
            "Quality-assure",
            "Approve and publish",
          ].map((step, index) => (
            <div className="dashboard-workflow-step" key={step}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{step}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="curriculum-design-note">
        <strong>Design and delivery considerations</strong>
        <p>
          A real platform workflow would also record evidence of
          academic approval, version history, accessibility
          checks, applicable standards or legislation, and
          publication sign-off before changes go live.
        </p>
      </div>

    </div>
  );
}

function PlatformDesignProcess() {
  const stages = [
    {
      number: "01",
      title: "Review and scope",
      tag: "ANALYSIS",
      description:
        "Establish which courses require review by checking content currency, learning outcomes, assessment alignment and applicable standards.",
      decision:
        "Prioritise updates according to their academic impact, urgency and dependencies rather than treating every course as equally urgent.",
      output: "Course review register",
    },
    {
      number: "02",
      title: "Consult and coordinate",
      tag: "COLLABORATION",
      description:
        "Work with academic staff and subject matter experts to confirm required changes, clarify technical content and agree review responsibilities.",
      decision:
        "Assign clear ownership and review deadlines so that academic decisions do not become bottlenecks in the delivery schedule.",
      output: "Review actions and ownership",
    },
    {
      number: "03",
      title: "Revise and quality-assure",
      tag: "QUALITY",
      description:
        "Update learning materials, activities and assessments, then check alignment with intended outcomes, accessibility expectations and relevant standards.",
      decision:
        "Use a consistent quality checklist to support reliable reviews across different courses and content types.",
      output: "Revised learning materials and QA record",
    },
    {
      number: "04",
      title: "Approve and publish",
      tag: "DELIVERY",
      description:
        "Coordinate final academic sign-off, verify the online learning experience and record the approved content version before publication.",
      decision:
        "Separate content completion from publication approval so that unfinished or unapproved changes are not treated as ready to go live.",
      output: "Approval record and publication checklist",
    },
  ];

  return (
    <section className="platform-process">
      <p className="artefact-label">BEHIND THE DESIGN</p>

      <h3>My approach to platform management</h3>

      <p className="platform-process-intro">
        This fictional example demonstrates a structured approach
        to maintaining online learning content, coordinating
        academic reviews and managing quality throughout the
        content lifecycle.
      </p>

      <div className="platform-process-list">
        {stages.map((stage) => (
          <article className="platform-process-stage" key={stage.number}>
            <div className="platform-process-marker">
              {stage.number}
            </div>

            <div className="platform-process-content">
              <span className="platform-process-tag">
                {stage.tag}
              </span>

              <h4>{stage.title}</h4>

              <p>{stage.description}</p>

              <div className="platform-process-decision">
                <strong>Design decision</strong>
                <p>{stage.decision}</p>
              </div>

              <div className="platform-process-output">
                <span>ILLUSTRATIVE OUTPUT</span>
                <strong>{stage.output}</strong>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="platform-process-reflection">
        <h4>How I would evaluate the process</h4>

        <p>
          I would monitor review turnaround times, overdue actions,
          first-pass quality approval and the number of updates
          requiring rework. I would also gather feedback from
          academic stakeholders to identify workflow improvements.
        </p>

      </div>
    </section>
  );
}
