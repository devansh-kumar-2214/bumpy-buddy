import ProductCard from './ProductCard';

const ProductsSection = () => (
  <section className="bg-gray-100 py-20">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-semibold text-center text-black mb-12">Our Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProductCard
          name="Bumpy Navigator"
          description="AI-powered navigation for smooth journeys"
          image="/placeholder.svg?height=200&width=300"
        />
        <ProductCard
          name="Terrain Analyzer"
          description="Advanced terrain analysis for optimal route planning"
          image="/placeholder.svg?height=200&width=300"
        />
        <ProductCard
          name="Smart Companion"
          description="Your intelligent travel buddy for all adventures"
          image="/placeholder.svg?height=200&width=300"
        />
      </div>
    </div>
  </section>
);

export default ProductsSection;
