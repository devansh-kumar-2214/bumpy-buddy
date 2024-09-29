const HeroSection = () => (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-center">
        <div className="lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0">
          <h1 className="text-4xl lg:text-6xl font-bold text-black mb-4">Navigate Your Journey with Bumpy Buddy</h1>
          <p className="text-lg lg:text-2xl text-gray-600 mb-8">Your AI-Powered Map Companion for Seamless Exploration</p>
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-lg transition duration-300">
            Explore Now
          </button>
        </div>
        <div className="lg:w-1/2">
          <img src="/placeholder.svg?height=400&width=400" alt="AI-powered navigation" className="w-full h-auto" />
        </div>
      </div>
    </section>
  );
  
  export default HeroSection;
  