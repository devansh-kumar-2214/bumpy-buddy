import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProductsSection from './components/ProductsSection';
import AboutUsSection from './components/AboutUsSection';
import CustomersSection from './components/CustomersSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <HeroSection />
        <ProductsSection />
        <AboutUsSection />
        <CustomersSection />
        <FAQSection />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}

export default App;
