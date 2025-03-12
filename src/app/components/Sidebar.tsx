// "use client";
// import { useState } from "react";
// import { XMarkIcon, FunnelIcon } from "@heroicons/react/24/outline";

// export default function Sidebar({ onFilterChange }: { onFilterChange: (filters: any) => void }) {
//   const [isOpen, setIsOpen] = useState(false);
//   const [filters, setFilters] = useState({ category: "", size: "" });

//   const handleFilterChange = (key: string, value: string) => {
//     setFilters((prev) => {
//       const newFilters = { ...prev, [key]: value };
//       onFilterChange(newFilters);
//       return newFilters;
//     });
//   };

//   return (
//     <>
//       {/* Sidebar Toggle Button */}
//       <button
//         onClick={() => setIsOpen(true)}
//         className="fixed top-4 left-4 z-50 bg-pink-300 text-white p-2 rounded-lg shadow-lg hover:bg-pink-500 transition"
//       >
//         <h2 className="text-pink-700">Filter</h2>
//         {/* <FunnelIcon className="w-6 h-6" /> */}
//       </button>

//       {/* Sidebar Overlay */}
//       <div
//         className={`fixed inset-0 bg-black bg-opacity-40 z-40 transition-opacity ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
//         onClick={() => setIsOpen(false)}
//       />

//       {/* Sidebar Container */}
//       <aside
//         className={`fixed top-0 left-0 h-full w-64 bg-white shadow-2xl p-6 transition-transform transform ${
//           isOpen ? "translate-x-0" : "-translate-x-full"
//         } z-50`}
//       >
//         {/* Close Button */}
//         <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4 text-gray-600 hover:text-gray-900">
//           <XMarkIcon className="w-6 h-6" />
//         </button>

//         <h2 className="text-xl font-bold text-gray-700 mb-6">Filter Products</h2>

//         {/* Category Filter */}
//         <div className="mb-6">
//           <h3 className="font-semibold text-gray-600 mb-2">Category</h3>
//           <div className="space-y-2">
//             <label className="flex items-center gap-2 text-gray-700 hover:text-blue-600 cursor-pointer">
//               <input type="radio" name="category" value="men" onChange={(e) => handleFilterChange("category", e.target.value)} />
//               Men
//             </label>
//             <label className="flex items-center gap-2 text-gray-700 hover:text-blue-600 cursor-pointer">
//               <input type="radio" name="category" value="women" onChange={(e) => handleFilterChange("category", e.target.value)} />
//               Women
//             </label>
//           </div>
//         </div>

//         {/* Size Filter */}
//         <div>
//           <h3 className="font-semibold text-gray-600 mb-2">Size</h3>
//           <div className="space-y-2">
//             <label className="flex items-center gap-2 text-gray-700 hover:text-blue-600 cursor-pointer">
//               <input type="radio" name="size" value="small" onChange={(e) => handleFilterChange("size", e.target.value)} />
//               Small
//             </label>
//             <label className="flex items-center gap-2 text-gray-700 hover:text-blue-600 cursor-pointer">
//               <input type="radio" name="size" value="large" onChange={(e) => handleFilterChange("size", e.target.value)} />
//               Large
//             </label>
//           </div>
//         </div>
//       </aside>
//     </>
//   );
// }
