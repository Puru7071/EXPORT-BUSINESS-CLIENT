export default function ComingSoon() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="text-center bg-white shadow-lg rounded-xl p-10 max-w-md">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Coming Soon</h1>

        <p className="text-gray-600 mb-6">
          We are working on something great. Stay tuned!
        </p>

        <div className="w-12 h-12 border-4 border-gray-300 border-t-black rounded-full animate-spin mx-auto" />

        <p className="text-sm text-gray-400 mt-6">© 2025 All rights reserved.</p>
      </div>
    </div>
  );
}
