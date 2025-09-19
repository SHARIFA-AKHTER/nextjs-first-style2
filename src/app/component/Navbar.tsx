// import Link from "next/link";

// export default function Navbar() {
//   return (
//     <nav className="w-full bg-gray-900 text-white px-6 py-3 flex items-center justify-between">
//       {/* Logo */}
//       <div className="text-xl font-bold">
//         <Link href="/">NextJS</Link>
//       </div>

//       {/* Search Bar */}
//       <input
//         type="text"
//         placeholder="Search..."
//         className="px-3 py-1 rounded-md bg-blue-200 text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
//       />

//       {/* Nav Links */}
//       <div className="flex space-x-6">
//         <Link href="/about" className="hover:text-gray-300">
//           About
//         </Link>
//         <Link href="/contact" className="hover:text-gray-300">
//           Contact
//         </Link>
//         <Link href="/dashboard" className="hover:text-gray-300">
//           Dashboard
//         </Link>
//         <Link href="/login" className="hover:text-gray-300">
//           Login
//         </Link>
//       </div>
//     </nav>
//   );
// }

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-gray-900 text-white px-6 py-3 flex flex-col md:flex-row md:items-center md:justify-between space-y-3 md:space-y-0">
      {/* Logo */}
      <div className="text-2xl font-bold">
        <Link href="/">NextJS</Link>
      </div>

      {/* Search Bar */}
      <div className="w-full md:w-1/3">
        <input
          type="text"
          placeholder="Search..."
          className="w-full px-3 py-2 rounded-md bg-blue-200 text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Nav Links */}
      <div className="flex flex-wrap justify-center md:justify-end space-x-4">
        <Link href="/about" className="hover:text-gray-300">
          About
        </Link>
        <Link href="/contact" className="hover:text-gray-300">
          Contact
        </Link>
        <Link href="/dashboard" className="hover:text-gray-300">
          Dashboard
        </Link>
        <Link href="/login" className="hover:text-gray-300">
          Login
        </Link>
      </div>
    </nav>
  );
}
