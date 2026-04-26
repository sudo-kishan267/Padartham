import { useState, useEffect } from 'react';
import './OurProducts.css';

/* =============================================================
   Data constants
   ============================================================= */

const PRODUCT_TABS = [
  { id: 'seasonings', label: 'Seasonings & Spices' },
  { id: 'flavours', label: 'Flavours' },
  { id: 'fragrances', label: 'Fragrances' },
  { id: 'rawmaterials', label: 'Raw Materials' },
];

const SEASONINGS_SUBTABS = [
  { id: 'overview', label: 'Overview' },
  { id: 'solutions', label: 'Industry Solutions' },
  { id: 'range', label: 'Product Range' },
];

const FLAVOURS_SUBTABS = [
  { id: 'overview', label: 'Overview' },
  { id: 'types', label: 'Flavour Types' },
  { id: 'applications', label: 'Applications' },
];

const FRAGRANCES_SUBTABS = [
  { id: 'overview', label: 'Overview' },
  { id: 'categories', label: 'Fragrance Categories' },
  { id: 'applications', label: 'Applications' },
];

const RAWMATERIALS_SUBTABS = [
  { id: 'overview', label: 'Overview' },
  { id: 'categories', label: 'Material Categories' },
  { id: 'quality', label: 'Quality Standards' },
];

const SUBTAB_MAP = {
  seasonings: SEASONINGS_SUBTABS,
  flavours: FLAVOURS_SUBTABS,
  fragrances: FRAGRANCES_SUBTABS,
  rawmaterials: RAWMATERIALS_SUBTABS,
};

const SOLUTION_PILLS = {
  seasonings: [
    {
      id: 'snacks',
      label: 'Savory Snacks & Extruded Products',
      body: 'From classic potato chips to ancient grain puffs, our seasonings are designed for superior adhesion and crave-ability.',
      profiles: 'Masala Magic, Peri-Peri, Sour Cream & Onion, Butter Salt, Hot Black Pepper, and custom regional Indian spices.',
      application: 'Top-loading seasonings, slurries, and dust-on applications.',
    },
    {
      id: 'meat',
      label: 'Meat, Poultry & Plant-Based Proteins',
      body: 'Blends that penetrate deep into the protein or provide a vibrant crust.',
      offerings: 'Meat rubs, marinades, binders, and meaty flavor enhancers for vegan/vegetarian alternatives.',
      functional: 'Improved moisture retention and color stability.',
    },
    {
      id: 'instant',
      label: 'Instant Foods & Convenience Meals',
      body: 'Concentrated flavor solutions for dehydrated soups, noodles, and ready-to-eat meals.',
      products: 'Tastemakers, bouillon concentrates, and dehydrated herb blends.',
    },
    {
      id: 'bakery',
      label: 'Bakery & Confectionery',
      body: 'Heat-stable spices that maintain aromatic integrity during baking. Perfect for crackers, breadsticks, and savory biscuits.',
    },
  ],
  flavours: [
    {
      id: 'liquid',
      label: 'Liquid Flavours',
      title: 'Liquid Flavour Solutions',
      desc: 'Water-soluble and oil-soluble liquid flavours engineered for beverages, dairy, and confectionery applications. Consistent dosing and superior shelf stability.',
    },
    {
      id: 'powder',
      label: 'Powder Flavours',
      title: 'Powder Flavour Solutions',
      desc: 'Spray-dried and encapsulated powder flavours ideal for instant mixes, seasonings, and dry beverage blends. Enhanced heat stability and controlled release.',
    },
    {
      id: 'natural',
      label: 'Natural Flavours',
      title: 'Natural Flavour Extracts',
      desc: 'Clean-label natural flavours derived from botanical sources. FEMA GRAS certified and suitable for organic-certified product lines.',
    },
  ],
  fragrances: [
    {
      id: 'fine',
      label: 'Fine Fragrances',
      title: 'Fine Fragrance Compositions',
      desc: 'Premium fragrance compositions for luxury perfumery and designer collections. Complex accords with exceptional longevity and sillage.',
    },
    {
      id: 'aircare',
      label: 'Air Care',
      title: 'Air Care Fragrances',
      desc: 'Innovative fragrance solutions for candles, diffusers, and aerosol air fresheners. Optimized for even scent distribution and room-filling performance.',
    },
    {
      id: 'textile',
      label: 'Textile Fragrances',
      title: 'Textile Fragrance Technology',
      desc: 'Micro-encapsulated fragrances engineered for fabric softeners and detergents. Burst-release technology for long-lasting freshness through multiple wash cycles.',
    },
  ],
  rawmaterials: [
    {
      id: 'oils',
      label: 'Essential Oils',
      title: 'Pure Essential Oils',
      desc: 'Steam-distilled and cold-pressed essential oils sourced from certified farms worldwide. Full GC-MS analysis provided with every batch.',
    },
    {
      id: 'oleoresins',
      label: 'Oleoresins',
      title: 'Standardized Oleoresins',
      desc: 'Solvent-extracted oleoresins with guaranteed active-compound content. Ideal for consistent colour, heat, and flavour delivery in industrial formulations.',
    },
    {
      id: 'chemicals',
      label: 'Aromatic Chemicals',
      title: 'Aromatic Chemicals',
      desc: 'High-purity aromatic chemicals including isolates, synthetic musks, and specialty aroma molecules for flavour and fragrance compounding.',
    },
  ],
};

const PRODUCT_RANGE_CARDS = [
  {
    icon: '🌶️',
    title: 'Whole & Ground Spices',
    items: ['Turmeric', 'Cumin', 'Coriander', 'Black Pepper', 'Chili (various SHU levels)', 'Cardamom'],
  },
  {
    icon: '🍲',
    title: 'Signature Seasoning Blends',
    items: ['International: Mexican, Italian, Thai', 'Domestic: Tandoori, Chatpata, Chettinad'],
  },
  {
    icon: '🧅',
    title: 'Dehydrated Ingredients',
    items: ['Onion/Garlic powders', 'Herbs (Oregano, Basil, Parsley)', 'Vegetable flakes'],
  },
  {
    icon: '🧂',
    title: 'Specialty Salts',
    items: ['Smoked salts', 'Infused salts', 'Low-sodium alternatives'],
  },
];

/* =============================================================
   Innovation Kitchen callout (shared across all Seasonings tabs)
   ============================================================= */
const InnovationKitchen = (
  <div className="op-callout">
    <div className="op-callout__inner">
      <span className="op-callout__badge">🔬 Innovation Kitchen</span>
      <p className="op-callout__text">
        Need a specific flavor profile? Our lab is equipped to develop custom seasoning prototypes
        that align with your nutritional goals — <strong>Clean Label</strong>,{' '}
        <strong>Non-GMO</strong>, or <strong>MSG-Free</strong>.
      </p>
    </div>
  </div>
);

/* =============================================================
   Sub-components
   ============================================================= */

/* --- Seasonings: Overview --- */
function SeasoningsOverview() {
  return (
    <div className="op-content">
      <h3 className="op-content__headline">Elevate Every Bite: Premium Seasonings &amp; Spices</h3>
      <p className="op-content__body">
        At <strong>HANLE</strong> we understand that the soul of any great food product lies in its
        flavour profile. Our Seasonings &amp; Spices division is dedicated to crafting multisensory
        experiences that balance tradition with modern culinary trends. We provide high-performance,
        consistent, and authentic flavour solutions tailored to the rigorous demands of industrial
        food production.
      </p>
      {InnovationKitchen}
    </div>
  );
}

/* --- Seasonings: Industry Solutions (with 3rd-level pills) --- */
function SeasoningsSolutions({ activeSolution, setActiveSolution }) {
  const pills = SOLUTION_PILLS.seasonings;
  const active = pills.find((p) => p.id === activeSolution) || pills[0];

  return (
    <div className="op-content">
      <div className="op-pills" role="tablist" aria-label="Industry solution pills">
        {pills.map((pill) => (
          <button
            key={pill.id}
            role="tab"
            aria-selected={activeSolution === pill.id}
            className={`op-pills__btn ${activeSolution === pill.id ? 'op-pills__btn--active' : ''}`}
            onClick={() => setActiveSolution(pill.id)}
          >
            {pill.label}
          </button>
        ))}
      </div>

      <div className="op-solution-card" key={active.id}>
        <h4 className="op-solution-card__title">{active.label}</h4>
        <p className="op-solution-card__body">{active.body}</p>
        {active.profiles && (
          <p className="op-solution-card__detail">
            <strong>Profiles:</strong> {active.profiles}
          </p>
        )}
        {active.application && (
          <p className="op-solution-card__detail">
            <strong>Application:</strong> {active.application}
          </p>
        )}
        {active.offerings && (
          <p className="op-solution-card__detail">
            <strong>Offerings:</strong> {active.offerings}
          </p>
        )}
        {active.functional && (
          <p className="op-solution-card__detail">
            <strong>Functional Benefits:</strong> {active.functional}
          </p>
        )}
        {active.products && (
          <p className="op-solution-card__detail">
            <strong>Products:</strong> {active.products}
          </p>
        )}
      </div>

      {InnovationKitchen}
    </div>
  );
}

/* --- Seasonings: Product Range --- */
function SeasoningsRange() {
  return (
    <div className="op-content">
      <div className="op-range-grid">
        {PRODUCT_RANGE_CARDS.map((card) => (
          <div className="op-range-card" key={card.title}>
            <span className="op-range-card__icon">{card.icon}</span>
            <h4 className="op-range-card__title">{card.title}</h4>
            <ul className="op-range-card__list">
              {card.items.map((item) => (
                <li key={item}>
                  <span className="op-range-card__bullet" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      {InnovationKitchen}
    </div>
  );
}

/* --- Generic: Pill-based sub-tab panel (Flavours, Fragrances, Raw Materials) --- */
function PillPanel({ category, activeSolution, setActiveSolution }) {
  const pills = SOLUTION_PILLS[category];
  const active = pills.find((p) => p.id === activeSolution) || pills[0];

  return (
    <div className="op-content">
      <div className="op-pills" role="tablist">
        {pills.map((pill) => (
          <button
            key={pill.id}
            role="tab"
            aria-selected={activeSolution === pill.id}
            className={`op-pills__btn ${activeSolution === pill.id ? 'op-pills__btn--active' : ''}`}
            onClick={() => setActiveSolution(pill.id)}
          >
            {pill.label}
          </button>
        ))}
      </div>
      {/* TODO: replace with real content */}
      <div className="op-solution-card" key={active.id}>
        <h4 className="op-solution-card__title">{active.title}</h4>
        <p className="op-solution-card__body">{active.desc}</p>
      </div>
    </div>
  );
}

/* --- Generic: Placeholder cards grid --- */
function PlaceholderCards({ cards }) {
  return (
    <div className="op-content">
      {/* TODO: replace with real content */}
      <div className="op-range-grid">
        {cards.map((card) => (
          <div className="op-range-card" key={card.title}>
            <span className="op-range-card__icon">{card.icon}</span>
            <h4 className="op-range-card__title">{card.title}</h4>
            <p className="op-range-card__desc">{card.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* --- Generic: Overview placeholder --- */
function OverviewPlaceholder({ headline, body }) {
  return (
    <div className="op-content">
      {/* TODO: replace with real content */}
      <h3 className="op-content__headline">{headline}</h3>
      <p className="op-content__body">{body}</p>
    </div>
  );
}

/* =============================================================
   Flavours Data
   ============================================================= */
const FLAVOURS_APP_CARDS = [
  { icon: '🥤', title: 'Beverages', desc: 'Premium flavour solutions for carbonated drinks, juices, energy drinks, and functional beverages. Optimized for stability across varying pH levels and processing conditions.' },
  { icon: '🍬', title: 'Confectionery', desc: 'Heat-stable and sugar-compatible flavours for hard candies, gummies, chocolates, and chewing gum. Long-lasting taste profiles with excellent flavour release.' },
  { icon: '🥛', title: 'Dairy', desc: 'Cultured-product-compatible flavours for yogurts, ice creams, flavoured milks, and cheese products. Engineered for stability in high-protein and fermented matrices.' },
];

/* =============================================================
   Fragrances Data
   ============================================================= */
const FRAGRANCES_APP_CARDS = [
  { icon: '💎', title: 'Perfumes', desc: 'Luxury fine fragrance compositions with complex top, heart, and base notes. Crafted with premium naturals and cutting-edge aroma molecules for exceptional longevity.' },
  { icon: '🏠', title: 'Home Care', desc: 'High-impact fragrances for surface cleaners, dishwashing liquids, and laundry detergents. Formulated to deliver freshness even in challenging surfactant systems.' },
  { icon: '🧴', title: 'Personal Care', desc: 'Skin-safe fragrances for body washes, shampoos, lotions, and deodorants. Dermatologically tested and compatible with a wide range of cosmetic bases.' },
];

/* =============================================================
   Raw Materials Data
   ============================================================= */
const RAWMATERIALS_QUALITY_CARDS = [
  { icon: '🔬', title: 'Purity Testing', desc: 'Rigorous GC-MS, HPLC, and wet-chemistry analysis on every batch. Full certificates of analysis with detailed compound profiling and contaminant screening.' },
  { icon: '📜', title: 'Certifications', desc: 'FSSAI, ISO 22000, HALAL, and KOSHER certifications maintained across our supply chain. Compliance documentation available for regulatory audits worldwide.' },
  { icon: '📍', title: 'Traceability', desc: 'End-to-end traceability from farm to factory. Digital batch tracking with complete provenance records, ensuring transparency and accountability at every stage.' },
];

/* =============================================================
   Main Component
   ============================================================= */
function OurProducts() {
  const [activeProduct, setActiveProduct] = useState('seasonings');
  const [activeSubTab, setActiveSubTab] = useState('overview');
  const [activeSolution, setActiveSolution] = useState('snacks');

  /* Reset activeSubTab when activeProduct changes */
  useEffect(() => {
    const subs = SUBTAB_MAP[activeProduct];
    setActiveSubTab(subs[0].id);
  }, [activeProduct]);

  /* Reset activeSolution when activeSubTab changes */
  useEffect(() => {
    const pills = SOLUTION_PILLS[activeProduct];
    if (pills && pills.length > 0) {
      setActiveSolution(pills[0].id);
    }
  }, [activeSubTab, activeProduct]);

  const currentSubTabs = SUBTAB_MAP[activeProduct];

  /* ---- Render the active panel content ---- */
  const renderPanel = () => {
    // === SEASONINGS & SPICES ===
    if (activeProduct === 'seasonings') {
      if (activeSubTab === 'overview') return <SeasoningsOverview />;
      if (activeSubTab === 'solutions')
        return (
          <SeasoningsSolutions
            activeSolution={activeSolution}
            setActiveSolution={setActiveSolution}
          />
        );
      if (activeSubTab === 'range') return <SeasoningsRange />;
    }

    // === FLAVOURS ===
    if (activeProduct === 'flavours') {
      if (activeSubTab === 'overview')
        return (
          <OverviewPlaceholder
            headline="Crafting Exceptional Flavour Experiences"
            body="We deliver premium liquid and powder flavour solutions engineered for the food and beverage industry. Our formulations combine sensory excellence with process compatibility, ensuring consistent taste in every batch."
          />
        );
      if (activeSubTab === 'types')
        return (
          <PillPanel
            category="flavours"
            activeSolution={activeSolution}
            setActiveSolution={setActiveSolution}
          />
        );
      if (activeSubTab === 'applications')
        return <PlaceholderCards cards={FLAVOURS_APP_CARDS} />;
    }

    // === FRAGRANCES ===
    if (activeProduct === 'fragrances') {
      if (activeSubTab === 'overview')
        return (
          <OverviewPlaceholder
            headline="Signature Scents for Every Application"
            body="We source and supply premium fragrances for personal care and home care industries worldwide. Our fragrance library spans thousands of accords, from fresh citrus to deep oriental compositions."
          />
        );
      if (activeSubTab === 'categories')
        return (
          <PillPanel
            category="fragrances"
            activeSolution={activeSolution}
            setActiveSolution={setActiveSolution}
          />
        );
      if (activeSubTab === 'applications')
        return <PlaceholderCards cards={FRAGRANCES_APP_CARDS} />;
    }

    // === RAW MATERIALS ===
    if (activeProduct === 'rawmaterials') {
      if (activeSubTab === 'overview')
        return (
          <OverviewPlaceholder
            headline="Premium Raw Materials, Globally Sourced"
            body="We supply high-purity aromatic chemicals, essential oils, and oleoresins to manufacturers across the flavour and fragrance industry. Every material is rigorously tested for quality and consistency."
          />
        );
      if (activeSubTab === 'categories')
        return (
          <PillPanel
            category="rawmaterials"
            activeSolution={activeSolution}
            setActiveSolution={setActiveSolution}
          />
        );
      if (activeSubTab === 'quality')
        return <PlaceholderCards cards={RAWMATERIALS_QUALITY_CARDS} />;
    }

    return null;
  };

  return (
    <section className="our-products" id="our-products">
      <div className="container">
        {/* ---- Section Header ---- */}
        <div className="our-products__header fade-in">
          <span className="section-label">Our Products</span>
          <h2 className="section-title">What We Offer</h2>
          <p className="section-subtitle">
            Explore our comprehensive range of sensory ingredients — from premium seasonings to
            fine fragrances and specialty raw materials.
          </p>
        </div>

        {/* ---- Level 1: Product Category Tabs ---- */}
        <div className="op-tabs" role="tablist" aria-label="Product category tabs">
          <div className="op-tabs__track">
            {PRODUCT_TABS.map((tab) => (
              <button
                key={tab.id}
                role="tab"
                id={`op-tab-${tab.id}`}
                aria-selected={activeProduct === tab.id}
                className={`op-tabs__tab ${activeProduct === tab.id ? 'op-tabs__tab--active' : ''}`}
                onClick={() => setActiveProduct(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* ---- Level 2: Sub-Tabs ---- */}
        <div className="op-subtabs" role="tablist" aria-label="Product sub-tabs">
          {currentSubTabs.map((sub) => (
            <button
              key={sub.id}
              role="tab"
              aria-selected={activeSubTab === sub.id}
              className={`op-subtabs__btn ${activeSubTab === sub.id ? 'op-subtabs__btn--active' : ''}`}
              onClick={() => setActiveSubTab(sub.id)}
            >
              {sub.label}
            </button>
          ))}
        </div>

        {/* ---- Panel Content ---- */}
        <div className="op-panel" key={`${activeProduct}-${activeSubTab}`}>
          {renderPanel()}
        </div>
      </div>
    </section>
  );
}

export default OurProducts;
