import { Link } from 'react-router-dom';

function Home() {
    return (
      <div className="w-full">
        
        <section className="bg-blue-600 text-white py-20 px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Master React Props</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Expllore hands-on exercises to understand React properties and build dynamic components.
          </p>
          <Link to="/practice">
            <button className="mt-6 px-6 py-3 bg-white text-blue-600 font-semibold rounded hover:bg-gray-100 transition">
            Start Practicing
            </button>
          </Link>
        </section>
  
        
        <section className="bg-white text-gray-800 py-16 px-4 text-center">
          <h2 className="text-3xl font-semibold mb-4">Why Learn Props?</h2>
          <p className="text-lg max-w-3xl mx-auto">
            Props allow you to pass data between components, making your React applications modular and reuse.
            Start practicing to see how props work in real-world scenarios.
          </p>
        </section>
      </div>
    );
  }
  
  export default Home;
  