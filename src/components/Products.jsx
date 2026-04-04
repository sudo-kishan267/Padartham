import './Products.css';
import productSpice from '../assets/product-spice.png';
import productVanilla from '../assets/product-vanilla.png';
import productHerbs from '../assets/product-herbs.png';
import productSaffron from '../assets/product-saffron.png';

const products = [
  {
    id: 1,
    name: 'Royal Spice Blend',
    description: 'An exquisite blend of 12 hand-selected spices from the highlands of Asia.',
    image: productSpice,
    tag: 'Best Seller',
  },
  {
    id: 2,
    name: 'Madagascar Vanilla',
    description: 'Pure vanilla extract sourced from the finest orchid farms of Madagascar.',
    image: productVanilla,
    tag: 'Premium',
  },
  {
    id: 3,
    name: 'Garden Herb Fusion',
    description: 'Fresh Mediterranean herbs expertly combined for an aromatic seasoning.',
    image: productHerbs,
    tag: 'Organic',
  },
  {
    id: 4,
    name: 'Kashmir Saffron',
    description: 'The world\'s most precious spice, hand-harvested from Kashmir\'s crocus fields.',
    image: productSaffron,
    tag: 'Luxury',
  },
];

function Products() {
  return (
    <section className="products" id="products">
      <div className="container">
        <div className="products__header fade-in">
          <span className="section-label">Our Collection</span>
          <h2 className="section-title">Signature Flavours</h2>
          <p className="section-subtitle">
            Each product is a masterpiece of flavour, meticulously crafted to transform 
            ordinary dishes into extraordinary culinary experiences.
          </p>
        </div>

        <div className="products__grid">
          {products.map((product, index) => (
            <div 
              className="product-card fade-in" 
              key={product.id}
              style={{ transitionDelay: `${index * 0.15}s` }}
            >
              <div className="product-card__image-wrap">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="product-card__image" 
                />
                <span className="product-card__tag">{product.tag}</span>
              </div>
              <div className="product-card__body">
                <h3 className="product-card__name">{product.name}</h3>
                <p className="product-card__desc">{product.description}</p>
                <button className="product-card__link" id={`product-${product.id}`}>
                  Learn More
                  <span className="product-card__arrow">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Products;
