import { useState, useEffect, useRef } from "react";
import {
  Github, Linkedin, Mail, Globe, ArrowUpRight, MapPin, Phone,
  Trophy, GraduationCap, Briefcase, Sparkles, Terminal,
  Layers, Database, Cpu, Box, Zap, Award,
} from "lucide-react";

import {
  PROFILE, HERO_STATS, MARQUEE_TERMS, PRINCIPLES, EDUCATION,
  SKILL_GROUPS, EXPERIENCE, PROJECTS, ACHIEVEMENTS, LEADERSHIP, NOW_BLOCK,
} from "../data/resume.js";

// Design tokens (mirror CSS variables for inline JSX use)
const C = {
  bg: "#0B0B0A",
  bgElev: "#141311",
  bone: "#F2EFE6",
  boneDim: "#C9C4B3",
  muted: "#6B6763",
  amber: "#F5A524",
  amberSoft: "#E89A3F",
  phosphor: "#00D17F",
  rule: "#2A2825",
  ink: "#1B1A18",
};

const ICONS = { Sparkles, Cpu, Terminal, Layers, Database, Box };
const ACCENTS = { amber: C.amber, phosphor: C.phosphor, bone: C.bone };

/* ---------- Animated Waveform SVG ---------- */
const Waveform = ({ height = 160, amp = 38, freq = 0.018, color = C.amber, opacity = 0.85, thick = 1.2 }) => {
  const [w, setW] = useState(1200);
  useEffect(() => {
    const on = () => setW(window.innerWidth);
    on();
    window.addEventListener("resize", on);
    return () => window.removeEventListener("resize", on);
  }, []);

  let d = `M 0 ${height / 2}`;
  for (let x = 0; x <= w * 2; x += 3) {
    const env = Math.sin(x * 0.004) * Math.sin(x * 0.0012);
    const y = height / 2 + Math.sin(x * freq) * amp * env + Math.sin(x * freq * 2.3) * amp * 0.3 * env;
    d += ` L ${x} ${y.toFixed(2)}`;
  }

  return (
    <svg
      viewBox={`0 0 ${w * 2} ${height}`}
      preserveAspectRatio="none"
      style={{ width: "200%", height, display: "block" }}
    >
      <defs>
        <linearGradient id="wfade" x1="0" x2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0" />
          <stop offset="20%" stopColor={color} stopOpacity={opacity} />
          <stop offset="80%" stopColor={color} stopOpacity={opacity} />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={d} fill="none" stroke="url(#wfade)" strokeWidth={thick} strokeDasharray="4 6" className="wave-animate" />
    </svg>
  );
};

const WaveStrip = ({ h = 56 }) => (
  <div style={{ overflow: "hidden", height: h }} aria-hidden>
    <Waveform height={h} amp={14} thick={1} opacity={0.35} color={C.amber} />
  </div>
);

/* ---------- NAV ---------- */
const Nav = () => {
  const items = [
    ["00", "Index", "top"],
    ["01", "Manifesto", "about"],
    ["02", "Stack", "skills"],
    ["03", "Fieldwork", "experience"],
    ["04", "Projects", "projects"],
    ["05", "Honors", "achievements"],
    ["06", "Signal", "contact"],
  ];

  return (
    <header
      className="sticky top-0 z-50 backdrop-blur-md"
      style={{ background: "rgba(11,11,10,0.75)", borderBottom: `1px solid ${C.rule}` }}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 h-14 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="pulse-dot inline-block w-2 h-2 rounded-full" style={{ background: C.phosphor }} />
          <span className="mono text-[11px] uppercase tracking-[0.2em]" style={{ color: C.boneDim }}>
            hg — portfolio / 2026
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-7">
          {items.map(([num, label, id]) => (
            <a
              key={id}
              href={`#${id}`}
              className="mono text-[11px] uppercase tracking-[0.14em] transition-colors flex items-center gap-1.5"
              style={{ color: C.boneDim }}
            >
              <span style={{ color: C.muted }}>{num}</span>
              <span className="underline-sweep">{label}</span>
            </a>
          ))}
        </nav>
        <a
          href={`mailto:${PROFILE.email}`}
          className="mono text-[11px] uppercase tracking-[0.14em] px-3 py-1.5 border rule transition-all flex items-center gap-1.5"
          style={{ color: C.bone }}
        >
          Available
          <span className="pulse-dot inline-block w-1.5 h-1.5 rounded-full" style={{ background: C.phosphor }} />
        </a>
      </div>
    </header>
  );
};

/* ---------- HERO ---------- */
const Hero = () => {
  const [time, setTime] = useState("");
  useEffect(() => {
    const tick = () => {
      const d = new Date();
      const opts = { hour: "2-digit", minute: "2-digit", second: "2-digit", timeZone: PROFILE.timezone, hour12: false };
      setTime(new Intl.DateTimeFormat("en-GB", opts).format(d) + " IST");
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 grid-dots opacity-40 pointer-events-none" />
      <div className="absolute top-6 left-6 w-6 h-6 border-t border-l" style={{ borderColor: C.amber }} />
      <div className="absolute top-6 right-6 w-6 h-6 border-t border-r" style={{ borderColor: C.amber }} />
      <div className="absolute bottom-6 left-6 w-6 h-6 border-b border-l" style={{ borderColor: C.amber }} />
      <div className="absolute bottom-6 right-6 w-6 h-6 border-b border-r" style={{ borderColor: C.amber }} />

      <div className="max-w-[1440px] mx-auto px-6 md:px-10 pt-16 pb-10 md:pt-28 md:pb-20 relative">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-14 md:mb-24 reveal">
          <div className="mono text-[11px] uppercase tracking-[0.2em] flex items-center gap-3" style={{ color: C.boneDim }}>
            <span style={{ color: C.amber }}>{PROFILE.coords.lat}</span>
            <span style={{ color: C.muted }}>/</span>
            <span style={{ color: C.amber }}>{PROFILE.coords.lng}</span>
            <span style={{ color: C.muted }}>·</span>
            <span>{PROFILE.location}</span>
          </div>
          <div className="mono text-[11px] uppercase tracking-[0.2em]" style={{ color: C.boneDim }}>
            <span style={{ color: C.muted }}>local time</span>
            <span className="ml-2" style={{ color: C.bone }}>{time}</span>
          </div>
        </div>

        <div className="flex items-center gap-3 mb-8 md:mb-12 reveal" style={{ animationDelay: ".1s" }}>
          <span className="h-[1px] w-10" style={{ background: C.amber }} />
          <span className="mono text-[11px] uppercase tracking-[0.25em]" style={{ color: C.amber }}>{PROFILE.tagline}</span>
        </div>

        <h1 className="serif leading-[0.85] tracking-tight reveal" style={{ fontSize: "clamp(64px, 14.5vw, 240px)", animationDelay: ".2s" }}>
          {PROFILE.firstName}
          <br />
          <span className="italic" style={{ color: C.bone }}>{PROFILE.lastName}</span>
          <span className="inline-block cursor-blink ml-2" style={{ color: C.amber }}>_</span>
        </h1>

        <div className="grid grid-cols-12 gap-6 md:gap-10 mt-12 md:mt-20">
          <div className="col-span-12 md:col-span-5 reveal" style={{ animationDelay: ".3s" }}>
            <p className="mono text-[11px] uppercase tracking-[0.22em] mb-4" style={{ color: C.muted }}>Primary discipline</p>
            <p className="editor text-2xl md:text-[32px] leading-[1.15]" style={{ color: C.bone }}>
              Machine Learning &amp; Generative AI engineer — building{" "}
              <span className="italic" style={{ color: C.amber }}>LLM-powered systems</span>, RAG pipelines, and agentic workflows that survive contact with production.
            </p>
          </div>
          <div className="hidden md:block col-span-1" />
          <div className="col-span-12 md:col-span-6 reveal" style={{ animationDelay: ".4s" }}>
            <div className="grid grid-cols-2 gap-6">
              {HERO_STATS.map((s, i) => (
                <div key={i} className="border-t pt-4 rule">
                  <div className="serif text-4xl md:text-5xl" style={{ color: C.amber }}>{s.value}</div>
                  <div className="mono text-[10px] uppercase tracking-[0.18em] mt-2" style={{ color: C.boneDim }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-4 mt-14 reveal" style={{ animationDelay: ".5s" }}>
          <a href="#projects" className="group px-5 py-3 flex items-center gap-2 mono text-[12px] uppercase tracking-[0.2em]" style={{ background: C.amber, color: C.bg }}>
            View Selected Work
            <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
          <a href={PROFILE.links.website} target="_blank" rel="noreferrer" className="group px-5 py-3 flex items-center gap-2 mono text-[12px] uppercase tracking-[0.2em] border rule" style={{ color: C.bone }}>
            Live Site
            <Globe size={14} className="group-hover:rotate-12 transition-transform" />
          </a>
          <a href={`mailto:${PROFILE.email}`} className="group px-5 py-3 flex items-center gap-2 mono text-[12px] uppercase tracking-[0.2em] border rule" style={{ color: C.bone }}>
            Initiate Contact
            <Mail size={14} />
          </a>
        </div>
      </div>

      <div className="relative border-t border-b rule" style={{ background: C.ink }}>
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 flex items-center gap-6 py-3">
          <span className="mono text-[10px] uppercase tracking-[0.22em] shrink-0" style={{ color: C.amber }}>live signal ▸</span>
          <div className="flex-1 overflow-hidden"><WaveStrip h={40} /></div>
          <span className="mono text-[10px] uppercase tracking-[0.22em] shrink-0 hidden md:inline" style={{ color: C.boneDim }}>DTC · DTS · carrier</span>
        </div>
      </div>

      <div className="overflow-hidden py-6 border-b rule">
        <div className="marquee flex whitespace-nowrap mono text-[42px] md:text-[64px] leading-none" style={{ width: "max-content" }}>
          {Array.from({ length: 2 }).map((_, k) => (
            <div key={k} className="flex items-center gap-8 pr-8">
              {MARQUEE_TERMS.map((w, i) => (
                <span key={i} className="flex items-center gap-8">
                  <span className="editor italic" style={{ color: i % 3 === 0 ? C.amber : C.bone }}>{w}</span>
                  <span style={{ color: C.muted }}>✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ---------- SECTION HEADER ---------- */
const SectionHead = ({ num, eyebrow, title, kicker }) => (
  <div className="grid grid-cols-12 gap-6 mb-12 md:mb-16">
    <div className="col-span-12 md:col-span-3 flex md:block items-baseline gap-4">
      <div className="roman serif text-6xl md:text-[96px] leading-none" style={{ color: C.amber }}>{num}</div>
      <div className="mono text-[10px] uppercase tracking-[0.22em] md:mt-3" style={{ color: C.muted }}>{eyebrow}</div>
    </div>
    <div className="col-span-12 md:col-span-9">
      <h2 className="serif leading-[0.95]" style={{ fontSize: "clamp(40px, 6vw, 88px)" }}>{title}</h2>
      {kicker && <p className="editor mt-4 md:mt-6 text-lg md:text-xl max-w-2xl" style={{ color: C.boneDim }}>{kicker}</p>}
    </div>
  </div>
);

/* ---------- ABOUT ---------- */
const About = () => (
  <section id="about" className="relative border-t rule">
    <div className="max-w-[1440px] mx-auto px-6 md:px-10 py-20 md:py-32">
      <SectionHead num="I" eyebrow="Manifesto" title={<>A pragmatic bet <span className="italic" style={{ color: C.amber }}>on</span><br />the useful parts of intelligence.</>} />

      <div className="grid grid-cols-12 gap-6 md:gap-12">
        <div className="col-span-12 md:col-span-7">
          <p className="editor text-xl md:text-2xl leading-[1.45]" style={{ color: C.bone }}>
            I build things that have to work when a scientist runs them at 2 a.m., not just when a demo video is rolling.{" "}
            <span className="italic" style={{ color: C.amber }}>Gradient boosting for well logs</span>, low-latency inference behind FastAPI,
            LangChain-orchestrated agents with prompts that don't unravel at the third turn — and the plumbing underneath that keeps them all honest.
          </p>
          <p className="mono text-sm mt-8 leading-relaxed" style={{ color: C.boneDim }}>
            Electronics Engineering student at MAIT (VLSI Design &amp; Technology) with a compounding tilt toward ML systems.
            Comfortable at the seam between research notebooks and containers. I optimize for products that survive
            high-ambiguity environments — the kind where the spec shifts twice before the Dockerfile is done.
          </p>
        </div>

        <div className="col-span-12 md:col-span-5">
          <div className="border rule p-6 md:p-8" style={{ background: C.bgElev }}>
            <div className="mono text-[10px] uppercase tracking-[0.22em] mb-5" style={{ color: C.amber }}>operating principles</div>
            <ol className="space-y-4">
              {PRINCIPLES.map(([n, t]) => (
                <li key={n} className="flex gap-4">
                  <span className="mono text-xs pt-1" style={{ color: C.muted }}>{n}</span>
                  <span className="editor text-base md:text-lg leading-snug">{t}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="flex items-start gap-3 mt-6">
            <GraduationCap size={18} style={{ color: C.amber }} className="mt-1 shrink-0" />
            <div>
              <div className="serif text-xl">{EDUCATION.school}</div>
              <div className="mono text-[11px] uppercase tracking-[0.18em] mt-1" style={{ color: C.boneDim }}>{EDUCATION.degree}</div>
              <div className="mono text-[10px] uppercase tracking-[0.18em] mt-2" style={{ color: C.muted }}>Coursework: {EDUCATION.coursework}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ---------- SKILLS ---------- */
const Skills = () => (
  <section id="skills" className="relative border-t rule" style={{ background: C.ink }}>
    <div className="max-w-[1440px] mx-auto px-6 md:px-10 py-20 md:py-32">
      <SectionHead
        num="II"
        eyebrow="Technical Stack"
        title={<>The tools <span className="italic" style={{ color: C.amber }}>I reach for</span><br />without thinking.</>}
        kicker="Six disciplines, one continuous dependency graph — from tokenizer to container to cloud function."
      />

      <div className="grid grid-cols-12 gap-4 md:gap-6">
        {SKILL_GROUPS.map((g, i) => {
          const Icon = ICONS[g.iconName] || Sparkles;
          return (
            <div
              key={g.name}
              className={`border rule p-6 md:p-8 ${g.featured ? "col-span-12 md:col-span-8" : "col-span-12 md:col-span-4"} project-card`}
              style={{ background: g.featured ? "rgba(245,165,36,0.04)" : C.bgElev, borderColor: g.featured ? C.amberSoft : C.rule }}
            >
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                  <Icon size={16} style={{ color: g.featured ? C.amber : C.bone }} />
                  <h3 className="serif text-xl md:text-2xl">{g.name}</h3>
                </div>
                <span className="mono text-[10px] uppercase tracking-[0.22em]" style={{ color: C.muted }}>
                  {String(i + 1).padStart(2, "0")} / 0{SKILL_GROUPS.length}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <span key={s} className="chip mono text-[11px] uppercase tracking-[0.12em] px-2.5 py-1.5" style={{ color: C.bone }}>{s}</span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

/* ---------- EXPERIENCE ---------- */
const Experience = () => (
  <section id="experience" className="relative border-t rule">
    <div className="max-w-[1440px] mx-auto px-6 md:px-10 py-20 md:py-32">
      <SectionHead num="III" eyebrow="Fieldwork" title={<>Professional<br /><span className="italic" style={{ color: C.amber }}>record of service.</span></>} />

      {EXPERIENCE.map((e, idx) => (
        <div key={idx} className="grid grid-cols-12 gap-6 md:gap-12">
          <div className="col-span-12 md:col-span-4">
            <div className="md:sticky md:top-24">
              <div className="mono text-[10px] uppercase tracking-[0.22em]" style={{ color: C.muted }}>Tenure</div>
              <div className="serif text-4xl md:text-5xl mt-2" style={{ color: C.amber }}>{e.period}</div>
              <div className="mono text-sm mt-1" style={{ color: C.boneDim }}>{e.periodNote}</div>
              <div className="h-[1px] w-24 my-6" style={{ background: C.rule }} />
              <div className="mono text-[10px] uppercase tracking-[0.22em] mb-2" style={{ color: C.muted }}>Domain</div>
              <div className="editor text-lg">{e.domain}</div>
            </div>
          </div>

          <div className="col-span-12 md:col-span-8">
            <article className="border rule p-6 md:p-10 relative" style={{ background: C.bgElev }}>
              <div className="absolute -left-[1px] top-10 w-1 h-24" style={{ background: C.amber }} />

              <div className="flex items-start justify-between flex-wrap gap-4 mb-6">
                <div>
                  <div className="mono text-[10px] uppercase tracking-[0.22em] mb-3 flex items-center gap-2" style={{ color: C.amber }}>
                    <Briefcase size={12} /> {e.badge}
                  </div>
                  <h3 className="serif text-3xl md:text-5xl leading-[1.05]">
                    {e.body}<br /><span className="italic">{e.orgItalic}</span>
                  </h3>
                  <div className="mono text-sm uppercase tracking-[0.18em] mt-3" style={{ color: C.boneDim }}>
                    {e.role} · {e.location}
                  </div>
                </div>
                <div className="mono text-right">
                  <div className="text-[10px] uppercase tracking-[0.22em]" style={{ color: C.muted }}>STATUS</div>
                  <div className="text-sm mt-1 flex items-center gap-2" style={{ color: C.phosphor }}>
                    <span className="pulse-dot inline-block w-2 h-2 rounded-full" style={{ background: C.phosphor }} />
                    {e.status}
                  </div>
                </div>
              </div>

              <div className="space-y-6 mt-8">
                {e.bullets.map((b, i) => (
                  <div key={i} className="flex gap-5">
                    <div className="mono text-xs pt-1 shrink-0" style={{ color: C.amber }}>{String(i + 1).padStart(2, "0")}.</div>
                    <p className="editor text-lg md:text-xl leading-[1.5]" style={{ color: C.bone }}>
                      {b.intro}{" "}
                      {b.highlights.map((h, hi) => (
                        <span key={hi}>
                          <span style={{ color: C.amber }}>{h}</span>
                          {hi < b.highlights.length - 1 && " and "}
                        </span>
                      ))}{" "}
                      {b.joiner[0]}{" "}
                      {b.mono && <span className="mono" style={{ color: C.amber }}>{b.mono}</span>}{" "}
                      {b.joiner[1] || ""}
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 mt-10 pt-6 border-t rule">
                {e.tags.map((t) => (
                  <span key={t} className="chip mono text-[10px] uppercase tracking-[0.14em] px-2.5 py-1.5">{t}</span>
                ))}
              </div>
            </article>
          </div>
        </div>
      ))}
    </div>
  </section>
);

/* ---------- PROJECTS ---------- */
const Projects = () => (
  <section id="projects" className="relative border-t rule" style={{ background: C.ink }}>
    <div className="max-w-[1440px] mx-auto px-6 md:px-10 py-20 md:py-32">
      <SectionHead
        num="IV"
        eyebrow="Selected Work"
        title={<>Three artifacts,<br /><span className="italic" style={{ color: C.amber }}>three different problems.</span></>}
        kicker="Conversational interfaces. Applied regression for a measurement that costs thousands of dollars to run physically. A lights-out data pipeline. Chosen for what they taught, not what they impressed."
      />

      <div className="space-y-0 border-t border-b rule">
        {PROJECTS.map((p) => {
          const accent = ACCENTS[p.accent] || C.amber;
          return (
            <article key={p.title} className="project-card group relative border-b rule py-10 md:py-16 px-2 md:px-6 cursor-pointer">
              <div className="grid grid-cols-12 gap-6">
                <div className="col-span-12 md:col-span-2">
                  <div className="mono text-[10px] uppercase tracking-[0.22em]" style={{ color: C.muted }}>{p.num}</div>
                  <div className="serif text-6xl mt-2" style={{ color: accent }}>{p.glyph}</div>
                </div>

                <div className="col-span-12 md:col-span-6">
                  <h3 className="serif text-4xl md:text-6xl leading-[0.95]">
                    {p.title}
                    <span className="italic block text-xl md:text-2xl mt-2" style={{ color: C.boneDim }}>{p.italic}</span>
                  </h3>
                  <p className="editor text-base md:text-lg mt-5 max-w-xl leading-[1.55]" style={{ color: C.bone }}>{p.blurb}</p>
                  <div className="flex flex-wrap gap-2 mt-5">
                    {p.stack.map((s, si) => (
                      <span key={s} className="mono text-[10px] uppercase tracking-[0.14em]" style={{ color: C.muted }}>
                        {s}
                        {si < p.stack.length - 1 && <span className="mx-2" style={{ color: C.rule }}>/</span>}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="col-span-12 md:col-span-4 flex flex-col md:items-end md:justify-between gap-6">
                  <div className="flex md:justify-end flex-wrap gap-1.5">
                    {p.tags.map((t) => (
                      <span key={t} className="mono text-[9px] uppercase tracking-[0.2em] px-2 py-1 border" style={{ borderColor: accent, color: accent }}>{t}</span>
                    ))}
                  </div>
                  <div className="flex gap-4 md:justify-end items-end">
                    {p.live && (
                      <a href={p.live} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 mono text-[11px] uppercase tracking-[0.18em] underline-sweep" style={{ color: C.bone }}>
                        Live Demo <ArrowUpRight size={12} />
                      </a>
                    )}
                    {p.code && (
                      <a href={p.code} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 mono text-[11px] uppercase tracking-[0.18em] underline-sweep" style={{ color: C.bone }}>
                        Source <Github size={12} />
                      </a>
                    )}
                    <ArrowUpRight className="arr" size={32} style={{ color: C.muted }} />
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  </section>
);

/* ---------- ACHIEVEMENTS ---------- */
const Achievements = () => (
  <section id="achievements" className="relative border-t rule">
    <div className="max-w-[1440px] mx-auto px-6 md:px-10 py-20 md:py-32">
      <SectionHead num="V" eyebrow="Honors" title={<>Trophy cabinet,<br /><span className="italic" style={{ color: C.amber }}>receipts attached.</span></>} />

      <div className="grid grid-cols-12 gap-6 md:gap-8">
        {ACHIEVEMENTS.map((a) => (
          <div key={a.title} className="col-span-12 md:col-span-6 border rule p-8 md:p-10 relative group transition-colors" style={{ background: C.bgElev }}>
            <div className="absolute top-0 right-0 w-24 h-24 overflow-hidden pointer-events-none">
              <div className="absolute -top-10 -right-10 w-32 h-32 opacity-10" style={{ background: `conic-gradient(from 0deg, ${C.amber}, transparent 60%)` }} />
            </div>
            <div className="flex items-start justify-between mb-8">
              <div className="flex items-center gap-2">
                <Trophy size={16} style={{ color: C.amber }} />
                <span className="mono text-[10px] uppercase tracking-[0.22em]" style={{ color: C.amber }}>{a.place}</span>
              </div>
              <span className="mono text-[10px] uppercase tracking-[0.22em]" style={{ color: C.muted }}>Hx / {a.rank}</span>
            </div>

            <div className="flex items-baseline gap-4 mb-4">
              <div className="serif text-7xl md:text-8xl leading-none" style={{ color: C.amber }}>{a.beat}</div>
              <div className="mono text-[10px] uppercase tracking-[0.22em]" style={{ color: C.boneDim }}>participants<br />outranked</div>
            </div>

            <h3 className="serif text-3xl md:text-4xl mt-4 leading-tight">{a.title}</h3>
            <p className="editor text-base md:text-lg mt-4 leading-[1.5]" style={{ color: C.boneDim }}>{a.detail}</p>
          </div>
        ))}
      </div>

      <div className="mt-14 md:mt-20 grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-4">
          <div className="mono text-[10px] uppercase tracking-[0.22em]" style={{ color: C.muted }}>Leadership</div>
          <div className="editor text-2xl mt-2">Extracurricular</div>
        </div>
        <div className="col-span-12 md:col-span-8 border-l rule pl-6 md:pl-10">
          <div className="flex items-center gap-3 mb-3">
            <Award size={16} style={{ color: C.amber }} />
            <h3 className="serif text-2xl md:text-3xl">
              {LEADERSHIP.org} · <span className="italic">{LEADERSHIP.role}</span>
            </h3>
          </div>
          <p className="editor text-lg leading-relaxed" style={{ color: C.boneDim }}>{LEADERSHIP.detail}</p>
        </div>
      </div>
    </div>
  </section>
);

/* ---------- CONTACT ---------- */
const Contact = () => {
  const links = [
    { label: "Email", value: PROFILE.email, href: `mailto:${PROFILE.email}`, icon: Mail },
    { label: "LinkedIn", value: PROFILE.links.linkedin.replace("https://linkedin.com/", ""), href: PROFILE.links.linkedin, icon: Linkedin },
    { label: "GitHub", value: "@" + PROFILE.links.github.split("/").pop(), href: PROFILE.links.github, icon: Github },
    { label: "Website", value: PROFILE.links.website.replace("https://", ""), href: PROFILE.links.website, icon: Globe },
    { label: "Phone", value: PROFILE.phone, href: `tel:${PROFILE.phone.replace(/\s/g, "")}`, icon: Phone },
    { label: "Located", value: "New Delhi, India", href: null, icon: MapPin },
  ];

  return (
    <section id="contact" className="relative border-t rule" style={{ background: C.ink }}>
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 py-20 md:py-32">
        <SectionHead num="VI" eyebrow="Signal Out" title={<>Let's build<br /><span className="italic" style={{ color: C.amber }}>something that ships.</span></>} />

        <div className="grid grid-cols-12 gap-6 md:gap-10">
          <div className="col-span-12 md:col-span-7">
            <p className="editor text-2xl md:text-3xl leading-[1.25]" style={{ color: C.bone }}>
              Open to roles in <span className="italic" style={{ color: C.amber }}>ML engineering</span>,{" "}
              <span className="italic" style={{ color: C.amber }}>Generative AI</span>, and{" "}
              <span className="italic" style={{ color: C.amber }}>applied research</span> — especially at teams where the product is the experiment and speed is the differentiator.
            </p>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
              {links.map((l) => {
                const Icon = l.icon;
                const row = (
                  <div className="group flex items-center gap-4 py-4 border-b rule hover-shift">
                    <Icon size={16} style={{ color: C.amber }} className="shrink-0" />
                    <div className="flex-1 min-w-0">
                      <div className="mono text-[10px] uppercase tracking-[0.22em]" style={{ color: C.muted }}>{l.label}</div>
                      <div className="editor text-lg truncate" style={{ color: C.bone }}>{l.value}</div>
                    </div>
                    {l.href && <ArrowUpRight size={16} className="shrink-0" style={{ color: C.muted }} />}
                  </div>
                );
                return l.href ? (
                  <a key={l.label} href={l.href} target="_blank" rel="noreferrer">{row}</a>
                ) : (
                  <div key={l.label}>{row}</div>
                );
              })}
            </div>
          </div>

          <div className="col-span-12 md:col-span-5">
            <div className="border rule p-8 md:p-10 relative overflow-hidden" style={{ background: C.bg }}>
              <div className="absolute inset-0 pointer-events-none opacity-30">
                <Waveform height={400} amp={50} freq={0.012} color={C.amber} opacity={0.4} />
              </div>
              <div className="relative">
                <div className="mono text-[10px] uppercase tracking-[0.22em] mb-6" style={{ color: C.amber }}>/// now_block.txt</div>
                <ul className="space-y-5">
                  {NOW_BLOCK.map(([k, v]) => (
                    <li key={k}>
                      <div className="mono text-xs" style={{ color: C.muted }}>$ {k}</div>
                      <div className="editor text-lg mt-1">{v}</div>
                    </li>
                  ))}
                </ul>

                <a href={`mailto:${PROFILE.email}`} className="mt-10 flex items-center justify-between px-5 py-4 mono text-[12px] uppercase tracking-[0.2em] group" style={{ background: C.amber, color: C.bg }}>
                  <span>Start a conversation</span>
                  <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ---------- FOOTER ---------- */
const Footer = () => (
  <footer className="relative border-t rule">
    <div className="max-w-[1440px] mx-auto px-6 md:px-10 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
      <div>
        <div className="serif text-3xl">
          {PROFILE.firstName} <span className="italic" style={{ color: C.amber }}>{PROFILE.lastName}</span>
        </div>
        <div className="mono text-[10px] uppercase tracking-[0.2em] mt-1" style={{ color: C.muted }}>
          Portfolio · 2026 Edition · Set in Instrument Serif &amp; IBM Plex Mono
        </div>
      </div>
      <div className="flex items-center gap-5 mono text-[11px] uppercase tracking-[0.18em]" style={{ color: C.boneDim }}>
        <a href={PROFILE.links.github} target="_blank" rel="noreferrer" className="underline-sweep flex items-center gap-1.5">
          <Github size={12} /> github
        </a>
        <a href={PROFILE.links.linkedin} target="_blank" rel="noreferrer" className="underline-sweep flex items-center gap-1.5">
          <Linkedin size={12} /> linkedin
        </a>
        <a href="#top" className="underline-sweep flex items-center gap-1.5">
          <Zap size={12} /> return to top
        </a>
      </div>
    </div>
    <div className="overflow-hidden"><WaveStrip h={28} /></div>
  </footer>
);

/* ---------- APP ---------- */
export default function Portfolio() {
  return (
    <div className="grainy min-h-screen" style={{ background: C.bg, color: C.bone }}>
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Achievements />
      <Contact />
      <Footer />
    </div>
  );
}
