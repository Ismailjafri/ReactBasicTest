
function Footer() {
    return (
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
         
          <div>
            <h4 className="text-xl font-semibold mb-2">React Practice</h4>
            <p>Learn React props through hands-on exercise.</p>
          </div>
  
          
          <div>
            <h4 className="text-xl font-semibold mb-2">Quick Links</h4>
            <p>About</p>
            <p>Contact</p>
          </div>
  
         
          <div>
            <h4 className="text-xl font-semibold mb-2">Contact Us</h4>
            <p>Email: team@reactpractice.com</p>
            <p>Phone: (123) 456-7890</p>
          </div>
        </div>
  
        <p className="text-center text-sm mt-8 text-gray-400">
          © 2025 React Practice. All rights reserved.
        </p>
      </footer>
    );
  }
  
  export default Footer;
  