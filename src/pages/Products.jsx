import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import HeroPng from "../assets/hero.png";
import Banner1 from "../assets/banner1.png";
import Banner2 from "../assets/banner2.png";
import { FaStar, FaVrCardboard } from "react-icons/fa";
import SEO from "../Components/SEO/SEO";
import AOS from "aos";

const products = [
  {
    id: 1,
    name: "VR Explorer X1",
    category: "Headset",
    image: HeroPng,
    price: "₹29,999",
    rating: 4.8,
    reviews: 1240,
    tag: "Best Seller",
    description:
      "Standalone 6DoF headset with 4K micro-OLED displays, inside-out tracking, and 3-hour battery life.",
  },
  {
    id: 2,
    name: "VR Cinema Pro",
    category: "Software",
    image: Banner1,
    price: "₹4,999 /yr",
    rating: 4.9,
    reviews: 870,
    tag: "Popular",
    description:
      "Unlimited access to 500+ VR movies, live events, and spatial concerts streamed in 8K.",
  },
  {
    id: 3,
    name: "VR Arena Pass",
    category: "Gaming",
    image: Banner2,
    price: "₹1,999 /mo",
    rating: 4.7,
    reviews: 2150,
    tag: "New",
    description:
      "Competitive multiplayer pass — ranked lobbies, tournaments, and exclusive in-game rewards.",
  },
];

const categories = ["All", "Headset", "Software", "Gaming", "Accessories"];

const productsSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "VR World Products & Gear",
  "description": "Premium virtual reality headsets, cinema streaming subscriptions, and multiplayer gaming passes.",
  "itemListElement": products.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "item": {
      "@type": "Product",
      "name": item.name,
      "description": item.description,
      "category": item.category,
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": item.rating,
        "reviewCount": item.reviews
      },
      "offers": {
        "@type": "Offer",
        "priceCurrency": "INR",
        "price": item.price.replace(/[^0-9]/g, ""),
        "availability": "https://schema.org/InStock"
      }
    }
  }))
};

const Products = () => {
  const [activeCategory, setActiveCategory] = React.useState("All");

  useEffect(() => {
    AOS.refresh();
    window.scrollTo(0, 0);
  }, []);

  const filtered =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <main className="bg-darker min-h-screen page-enter">
      <SEO
        title="VR Headsets, Cinema & Gaming Products | VR World"
        description="Browse the VR Explorer X1 headset, VR Cinema Pro 8K streaming, and VR Arena multiplayer pass. Compare features, ratings, and pricing."
        keywords="VR headset buy, VR Explorer X1, VR Cinema Pro, VR games pass, metaverse hardware, best VR headset"
        canonical="https://vrworld.com/products"
        jsonLd={productsSchema}
      />

      {/* Hero Banner */}
      <section className="relative pt-32 pb-20 overflow-hidden grid-pattern">
        <div className="absolute inset-0 radial-overlay pointer-events-none" />
        <div className="container relative z-10 text-center">
          <span data-aos="fade-up" className="section-subtitle block">
            Our Products
          </span>
          <h1 data-aos="fade-up" data-aos-delay="100" className="section-title text-white">
            Gear Up for the{" "}
            <span className="gradient-text">Metaverse</span>
          </h1>
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="mt-5 text-white/50 max-w-xl mx-auto text-lg"
          >
            From standalone headsets to all-you-can-play subscriptions — find
            everything you need to dive into virtual reality.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="container -mt-4 relative z-20" aria-label="Product categories">
        <div
          data-aos="fade-up"
          data-aos-delay="300"
          className="flex flex-wrap justify-center gap-3"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/25"
                  : "bg-white/5 text-white/50 hover:bg-white/10 hover:text-white border border-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Product Grid */}
      <section className="container py-16" aria-label="Available products">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((product, index) => (
            <article
              key={product.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="feature-card glass-card overflow-hidden group"
            >
              {/* Image */}
              <div className="relative h-56 bg-gradient-to-br from-dark to-darker flex items-center justify-center p-6 overflow-hidden">
                <img
                  src={product.image}
                  alt={`${product.name} — ${product.category} with 6DoF tracking and spatial immersion`}
                  loading="lazy"
                  className="max-h-full object-contain group-hover:scale-110 transition-transform duration-500"
                />
                {/* Tag badge */}
                <span className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-primary to-secondary text-white">
                  {product.tag}
                </span>
              </div>

              {/* Info */}
              <div className="p-6 relative z-10 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-primary font-semibold uppercase tracking-wider">
                    {product.category}
                  </span>
                  <div className="flex items-center gap-1 text-yellow-400 text-sm">
                    <FaStar aria-hidden="true" />
                    <span className="text-white/70">{product.rating}</span>
                    <span className="text-white/30 text-xs">
                      ({product.reviews})
                    </span>
                  </div>
                </div>
                <h2 className="text-xl font-semibold text-white">
                  {product.name}
                </h2>
                <p className="text-white/40 text-sm leading-relaxed">
                  {product.description}
                </p>
                <div className="flex items-center justify-between pt-3 border-t border-white/5">
                  <span className="text-lg font-bold gradient-text">
                    {product.price}
                  </span>
                  <button className="primary-btn text-sm py-2 px-5" aria-label={`Add ${product.name} to cart`}>
                    Add to Cart
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-white/30">
            <FaVrCardboard className="text-5xl mx-auto mb-4 text-white/10" aria-hidden="true" />
            <p className="text-lg">No products in this category yet.</p>
          </div>
        )}
      </section>

      {/* CTA Strip */}
      <section className="container pb-20">
        <div
          data-aos="fade-up"
          className="glass-card p-10 sm:p-14 text-center max-w-3xl mx-auto"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Can't decide?{" "}
            <span className="gradient-text">Try our VR demo</span>
          </h2>
          <p className="mt-4 text-white/50 max-w-md mx-auto">
            Visit one of our experience centres and try any headset for
            free before you buy.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="primary-btn">
              Book a Demo
            </Link>
            <Link to="/pricing" className="secondary-btn text-white">
              See Pricing
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Products;
