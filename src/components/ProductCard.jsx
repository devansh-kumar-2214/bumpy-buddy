const ProductCard = ({ name, description, image }) => (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition">
      <img src={image} alt={name} className="w-full h-48 object-cover rounded-t-lg" />
      <div className="p-4">
        <h3 className="font-bold text-xl text-black mb-2">{name}</h3>
        <p className="text-sm text-gray-700 mb-4">{description}</p>
        <button className="mt-4 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg transition">
          Learn More
        </button>
      </div>
    </div>
  );
  
  export default ProductCard;
  