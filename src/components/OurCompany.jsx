import { useState } from 'react';
import './OurCompany.css';
import industryFood from '../assets/industry-food-dairy.png';
import industryHealth from '../assets/industry-health-wellness.png';
import industryPersonalCare from '../assets/industry-personal-care.png';

const TABS = [
  { id: 'overview', label: 'Overview' },
  { id: 'industries', label: 'Industries' },
  { id: 'portfolio', label: 'Products' },
  { id: 'why', label: 'Why Us?' },
];

const industries = [
  {
    image: industryFood,
    title: 'Food & Dairy',
    icon: '🍫',
    items: ['Confectionery', 'Bakery', 'Dairy', 'Savory', 'Beverages'],
    accent: 'var(--color-accent)',
  },
  {
    image: industryHealth,
    title: 'Health & Wellness',
    icon: '💊',
    items: ['Pharmaceuticals', 'Nutraceuticals'],
    accent: 'var(--color-accent)',
  },
  {
    image: industryPersonalCare,
    title: 'Personal & Home Care',
    icon: '✨',
    items: [
      'Perfumes',
      'Cosmetics',
      'Soaps & Detergents',
      'Surface Care',
      'Air Fragrances',
      'Textile Fragrances',
    ],
    accent: 'var(--color-accent)',
  },
];

const portfolioRows = [
  {
    category: 'Sensory',
    icon: '🌿',
    offerings:
      'Liquid & Powder Flavors, Fine Fragrances, Seasoning Blends, Top Up Savory Flavours',
  },
  {
    category: 'Natural Extracts',
    icon: '🌱',
    offerings: 'Pure Essential Oils and Oleoresins',
  },
  {
    category: 'Chemicals',
    icon: '⚗️',
    offerings: 'Aromatic Chemicals and Allied Specialty Products',
  },
  {
    category: 'Functional',
    icon: '🔬',
    offerings: 'Food Additives, Stabilizers, Starch and Vibrant Food Colors',
  },
];

const pillars = [
  {
    number: '01',
    title: 'Technical Expertise',
    desc: 'Deep industry insights that help you navigate regulatory requirements and overcome complex formulation challenges with confidence.',
    icon: '🧪',
  },
  {
    number: '02',
    title: 'Customer-Centric Solutions',
    desc: 'Bespoke ingredient blending and customized sourcing strategies tailored precisely to your production needs and brand identity.',
    icon: '🤝',
  },
  {
    number: '03',
    title: 'Uncompromising Quality',
    desc: "Bridging the world's leading global manufacturers directly to your production line \u2014 every batch, every time.",
    icon: '🏆',
  },
];

function OverviewTab() {
  return (
    <div className="oc-overview">
      <div className="oc-overview__graphic fade-in-left">
        <div className="oc-overview__globe">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="oc-overview__svg">
            <defs>
              <radialGradient id="globeGrad" cx="40%" cy="35%">
                <stop offset="0%" stopColor="#00D96F" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#007EA7" stopOpacity="0.1" />
              </radialGradient>
            </defs>
            <circle cx="100" cy="100" r="90" fill="url(#globeGrad)" stroke="rgba(0,217,111,0.25)" strokeWidth="1.5" />
            <ellipse cx="100" cy="100" rx="50" ry="90" fill="none" stroke="rgba(0,217,111,0.2)" strokeWidth="1" />
            <ellipse cx="100" cy="100" rx="90" ry="40" fill="none" stroke="rgba(0,217,111,0.2)" strokeWidth="1" />
            <ellipse cx="100" cy="100" rx="90" ry="15" fill="none" stroke="rgba(0,217,111,0.15)" strokeWidth="1" />
            <line x1="10" y1="100" x2="190" y2="100" stroke="rgba(0,217,111,0.2)" strokeWidth="1" />
            <line x1="100" y1="10" x2="100" y2="190" stroke="rgba(0,217,111,0.2)" strokeWidth="1" />
            {/* Nodes */}
            {[
              [60, 65], [140, 55], [100, 100], [50, 130], [155, 125], [80, 155],
            ].map(([cx, cy], i) => (
              <g key={i}>
                <circle cx={cx} cy={cy} r="5" fill="var(--color-accent)" opacity="0.9" />
                <circle cx={cx} cy={cy} r="10" fill="var(--color-accent)" opacity="0.2" />
              </g>
            ))}
            {/* Connection lines */}
            <line x1="60" y1="65" x2="100" y2="100" stroke="rgba(0,217,111,0.4)" strokeWidth="1" strokeDasharray="3 2" />
            <line x1="140" y1="55" x2="100" y2="100" stroke="rgba(0,217,111,0.4)" strokeWidth="1" strokeDasharray="3 2" />
            <line x1="50" y1="130" x2="100" y2="100" stroke="rgba(0,217,111,0.4)" strokeWidth="1" strokeDasharray="3 2" />
            <line x1="155" y1="125" x2="100" y2="100" stroke="rgba(0,217,111,0.4)" strokeWidth="1" strokeDasharray="3 2" />
            <line x1="80" y1="155" x2="100" y2="100" stroke="rgba(0,217,111,0.4)" strokeWidth="1" strokeDasharray="3 2" />
          </svg>
          <div className="oc-overview__globe-label">Global Network</div>
        </div>
        <div className="oc-overview__stats">
          {[
            { value: '3', label: 'Industry Verticals' },
            { value: '50+', label: 'Countries Reached' },
            { value: 'B2B', label: 'Focus Model' },
          ].map((s) => (
            <div className="oc-overview__stat" key={s.label}>
              <span className="oc-overview__stat-val">{s.value}</span>
              <span className="oc-overview__stat-lbl">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="oc-overview__text fade-in-right">
        <p className="oc-overview__para">
          <strong>padārtham®</strong> is a premier B2B distribution platform of{' '}
          <strong>HANLE M&M PRIVATE LIMITED</strong>, specializing in the sourcing, logistics, and
          supply chain management of high-quality sensory ingredients. We are the trusted bridge
          between world-class global manufacturers and local production houses — delivering
          consistency, traceability, and technical excellence at every touchpoint.
        </p>
        <p className="oc-overview__para">
          Operating across the <strong>Food &amp; Beverage</strong>,{' '}
          <strong>Personal Care</strong>, and <strong>Pharmaceutical</strong> industries, padārtham®
          simplifies complex sourcing ecosystems. Whether you need liquid flavours for a confectionery
          line, fine fragrances for a cosmetics brand, or specialty chemicals for pharmaceutical
          formulations — we provide a single, reliable point of contact backed by deep technical
          expertise and a global supplier network.
        </p>
        <div className="oc-overview__tags">
          {['Sourcing', 'Logistics', 'Supply Chain', 'Sensory Ingredients', 'B2B Distribution'].map(
            (tag) => (
              <span className="oc-overview__tag" key={tag}>{tag}</span>
            )
          )}
        </div>
      </div>
    </div>
  );
}

function IndustriesTab() {
  return (
    <div className="oc-industries">
      {industries.map((ind) => (
        <div className="oc-ind-wrap fade-in" key={ind.title}>
          <div className="oc-ind-card__header">
            <span className="oc-ind-card__icon">{ind.icon}</span>
            <h3 className="oc-ind-card__title">{ind.title}</h3>
          </div>
          <div className="oc-ind-card">
            <img src={ind.image} alt={ind.title} className="oc-ind-card__bg" />
            <div className="oc-ind-card__overlay" />
            <div className="oc-ind-card__content">
              <ul className="oc-ind-card__list">
                {ind.items.map((item) => (
                  <li key={item}>
                    <span className="oc-ind-card__bullet" style={{ background: ind.accent }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function PortfolioTab() {
  return (
    <div className="oc-portfolio fade-in">
      <p className="oc-portfolio__intro">
        Our curated product portfolio spans the full sensory spectrum — from natural plant extracts
        and fine fragrances to functional chemicals and food-grade additives.
      </p>
      <div className="oc-portfolio__table-wrap">
        <table className="oc-portfolio__table">
          <thead>
            <tr>
              <th>Category</th>
              <th>Primary Offerings</th>
            </tr>
          </thead>
          <tbody>
            {portfolioRows.map((row, i) => (
              <tr key={row.category} className={i % 2 === 0 ? 'oc-portfolio__row--alt' : ''}>
                <td>
                  <span className="oc-portfolio__cat-icon">{row.icon}</span>
                  <strong>{row.category}</strong>
                </td>
                <td>{row.offerings}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function WhyTab() {
  return (
    <div className="oc-why">
      <div className="oc-why__pillars">
        {pillars.map((p) => (
          <div className="oc-why__card fade-in" key={p.number}>
            <div className="oc-why__card-top">
              <span className="oc-why__number">{p.number}</span>
              <span className="oc-why__icon">{p.icon}</span>
            </div>
            <h3 className="oc-why__title">{p.title}</h3>
            <p className="oc-why__desc">{p.desc}</p>
          </div>
        ))}
      </div>
      <div className="oc-why__mission fade-in">
        <div className="oc-why__mission-inner">
          <span className="oc-why__mission-label">Our Mission</span>
          <blockquote className="oc-why__mission-text">
            "To empower your innovation by providing the pure, high-quality building blocks your
            products deserve."
          </blockquote>
        </div>
      </div>
    </div>
  );
}

const TAB_CONTENT = {
  overview: <OverviewTab />,
  industries: <IndustriesTab />,
  portfolio: <PortfolioTab />,
  why: <WhyTab />,
};

function OurCompany() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <section className="our-company" id="our-company">
      <div className="container">
        <div className="our-company__header fade-in">
          <span className="section-label">Who We Are</span>
          <h2 className="section-title">Our Company</h2>
          <p className="section-subtitle">
            Discover the platform behind premium ingredient sourcing across three dynamic industries.
          </p>
        </div>

        {/* Tab Bar */}
        <div className="oc-tabs" role="tablist" aria-label="Company information tabs">
          <div className="oc-tabs__track">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                role="tab"
                id={`oc-tab-${tab.id}`}
                aria-selected={activeTab === tab.id}
                aria-controls={`oc-panel-${tab.id}`}
                className={`oc-tabs__tab ${activeTab === tab.id ? 'oc-tabs__tab--active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
                {activeTab === tab.id && <span className="oc-tabs__indicator" />}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Panels */}
        {TABS.map((tab) => (
          <div
            key={tab.id}
            role="tabpanel"
            id={`oc-panel-${tab.id}`}
            aria-labelledby={`oc-tab-${tab.id}`}
            className={`oc-panel ${activeTab === tab.id ? 'oc-panel--active' : ''}`}
            hidden={activeTab !== tab.id}
          >
            {TAB_CONTENT[tab.id]}
          </div>
        ))}
      </div>
    </section>
  );
}

export default OurCompany;
