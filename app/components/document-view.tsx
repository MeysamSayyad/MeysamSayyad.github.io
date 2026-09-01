import { resume, sectionLabels, type ResumeSection } from "../resume-data";

function documentLines(active: ResumeSection) {
  if (active === "resume") return [
    <span key="hello"><span className="comment">{"// Hello, I am"}</span> <strong>{resume.name}</strong></span>,
    <span key="role"><span className="keyword">const</span> <span className="property">role</span> = <span className="string">&quot;{resume.role}&quot;</span>;</span>,
    "",
    <span key="export"><span className="keyword">export default</span> <span className="function">resume</span>;</span>,
    "",
    <span key="about" className="comment">{"// About"}</span>,
    resume.summary,
    "",
    <span key="currently"><span className="comment">{"// Currently"}</span> {resume.availability}</span>,
  ];

  if (active === "experience") {
    return resume.experience.flatMap((item, itemIndex) => [
      <span key={`${item.company}-name`}><span className="keyword">const</span> <span className="property">{item.company.toLowerCase().replaceAll(" ", "_")}</span> = &#123;</span>,
      <span key={`${item.company}-role`} className="indent"><span className="property">role</span>: <span className="string">&quot;{item.role}&quot;</span>,</span>,
      <span key={`${item.company}-period`} className="indent"><span className="property">period</span>: <span className="string">&quot;{item.period}&quot;</span>,</span>,
      <span key={`${item.company}-summary`} className="indent">{item.summary}</span>,
      ...item.highlights.map((highlight, index) => <span key={`${item.company}-highlight-${index}`} className="indent"><span className="comment">{"//"}</span> {highlight}</span>),
      item.link ? <span key={`${item.company}-link`} className="indent"><span className="property">website</span>: <a className="document-link" href={item.link} target="_blank" rel="noreferrer">{item.link}</a></span> : "",
      "",
      <span key={`${item.company}-close`}>&#125;;</span>,
      itemIndex === 0 ? "" : "",
    ]);
  }

  if (active === "projects") {
    return resume.projects.flatMap((project) => [
      <span key={`${project.name}-name`}><span className="keyword">export const</span> <span className="property">{project.name.toLowerCase().replaceAll(" ", "_")}</span> = <span className="string">&quot;{project.description}&quot;</span>;</span>,
      ...project.stack.map((technology) => <span key={`${project.name}-${technology}`} className="indent"><span className="comment">{"// Tech:"}</span> {technology}</span>),
      project.source ? <span key={`${project.name}-source`}><span className="property">source</span>: <a className="document-link" href={project.source} target="_blank" rel="noreferrer">{project.source}</a></span> : "",
      project.link ? <span key={`${project.name}-link`}><span className="property">website</span>: <a className="document-link" href={project.link} target="_blank" rel="noreferrer">{project.link}</a></span> : "",
      "",
    ]);
  }

  if (active === "skills") {
    return [
      <span key="skills-start"><span className="keyword">export default</span> [</span>,
      ...resume.skills.map((skill) => <span key={skill} className="string">&quot;{skill}&quot;,</span>),
      <span key="skills-end">&#93;;</span>,
    ];
  }

  if (active === "certificates") {
    return resume.certificates.flatMap((certificate) => [
      <span key={`${certificate.name}-name`}><span className="keyword">const</span> <span className="property">certificate</span> = <span className="string">&quot;{certificate.name}&quot;</span>;</span>,
      ...certificate.highlights.map((highlight, index) => <span key={`${certificate.name}-${index}`} className="indent"><span className="comment">{"//"}</span> {highlight}</span>),
      certificate.link ? <span key={`${certificate.name}-link`}><span className="property">Link</span>: <a className="document-link" href={certificate.link} target="_blank" rel="noreferrer">{certificate.link}</a></span> : "",
    ]);
  }

  if (active === "education") {
    return resume.education.flatMap((item) => [
      <span key={`${item.school}-name`}><span className="keyword">const</span> <span className="property">education</span> = <span className="string">&quot;{item.school}&quot;</span>;</span>,
      <span key={`${item.school}-program`}>{item.program} <span className="comment">{"// "}{item.period}</span></span>,
      <span key={`${item.school}-details`} className="comment">{"// "}{item.details}</span>,
    ]);
  }

  return [
    <span key="contact"><span className="keyword">export const</span> <span className="property">contact</span> = <span className="string">&quot;{resume.email}&quot;</span>;</span>,
    "",
    ...resume.links.map((link) => <span key={link.label}><span className="property">{link.label}</span>: <a className="document-link" href={link.href} target="_blank" rel="noreferrer">{link.value}</a>,</span>),
  ];
}

export function ResumeDocument({ active }: { active: ResumeSection }) {
  const lines = documentLines(active);

  return (
    <article className="editor-document" aria-labelledby="document-title">
      <div className="line-numbers" aria-hidden="true">
        {lines.map((_, index) => <span key={index}>{index + 1}</span>)}
      </div>
      <div className="code-content">
        <h1 id="document-title" className="sr-only">{sectionLabels[active]}</h1>
        {lines.map((line, index) => <p key={index} className={line === "" ? "blank-line" : undefined}>{line}</p>)}
      </div>
    </article>
  );
}
