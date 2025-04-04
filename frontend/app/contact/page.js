// Contact Page
function Contact() {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-6">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg max-w-2xl text-center mb-6">
          Have questions or need support? Reach out to us anytime!
        </p>

        <form className="w-full max-w-lg">
          <div className="mb-4">
            <label className="block text-gray-300 text-sm font-bold mb-2">Name</label>
            <input type="text" className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300 text-sm font-bold mb-2">Email</label>
            <input type="email" className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300 text-sm font-bold mb-2">Message</label>
            <textarea className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" rows="4"></textarea>
          </div>
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300 hover:cursor-pointer">
            Send Message
          </button>
        </form>
      </div>
    );
  }
  
export default Contact;
  