// import React from 'react';

// export default function Skill() {
//   return (
//     <div className="skills font-sans bg-gray-900 text-white py-12">
//       <div className="max-w-6xl mx-auto">
//         <div className="text-center mb-8">
//           <p className="text-4xl font-bold">Technical Skills</p>
//         </div>

//         {/* Technical Skills Section */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
//           <div className="space-y-6">
//             <div>
//               <p className="text-lg font-bold">HTML</p>
//               <div className="bg-gray-700 h-2 rounded-full">
//                 <div className="bg-blue-500 h-2 rounded-full w-[95%]"></div>
//               </div>
//             </div>

//             <div>
//               <p className="text-lg font-bold">CSS</p>
//               <div className="bg-gray-700 h-2 rounded-full">
//                 <div className="bg-blue-500 h-2 rounded-full w-[85%]"></div>
//               </div>
//             </div>
//             <div>
//               <p className="text-lg font-bold">BOOTSTRAP</p>
//               <div className="bg-gray-700 h-2 rounded-full">
//                 <div className="bg-blue-500 h-2 rounded-full w-[85%]"></div>
//               </div>
//             </div>
//             <div>
//               <p className="text-lg font-bold">TAILWIND CSS</p>
//               <div className="bg-gray-700 h-2 rounded-full">
//                 <div className="bg-blue-500 h-2 rounded-full w-[60%]"></div>
//               </div>
//             </div>
//             <div>

//               <p className="text-lg font-bold">JavaScript</p>
//               <div className="bg-gray-700 h-2 rounded-full">
//                 <div className="bg-blue-500 h-2 rounded-full w-[75%]"></div>
//               </div>
//             </div>
//  <div>
//               <p className="text-lg font-bold">TypeScript</p>
//               <div className="bg-gray-700 h-2 rounded-full">
//                 <div className="bg-blue-500 h-2 rounded-full w-[87%]"></div>
//               </div>
//             </div>
           
//             <div>
//               <p className="text-lg font-bold">Next.Js</p>
//               <div className="bg-gray-700 h-2 rounded-full">
//                 <div className="bg-blue-500 h-2 rounded-full w-[72%]"></div>
//               </div>
//             </div>
           
//           </div>

//           {/* Professional Skills Section */}
//           <div className="space-y-10">
//             <div className="text-center">
//               <p className="text-4xl font-bold">Professional Skills</p>
//             </div>

//             <div className="flex justify-evenly">
//               <div className="text-center">
//                 <div className="relative w-20 h-20">
//                   <svg className="w-full h-full">
//                     <circle cx="40" cy="40" r="36" className="stroke-current text-gray-700" strokeWidth="8" fill="none" />
//                     <circle cx="40" cy="40" r="36" className="stroke-current text-blue-500" strokeWidth="8" fill="none" strokeDasharray="226" strokeDashoffset="22"></circle>
//                   </svg>
//                   <div className="absolute inset-0 flex items-center justify-center">
//                     <span className="text-xl font-bold">90%</span>
//                   </div>
//                 </div>
//                 <p className="mt-3 text-lg font-bold">Creativity</p>
//               </div>

//               <div className="text-center">
//                 <div className="relative w-20 h-20">
//                   <svg className="w-full h-full">
//                     <circle cx="40" cy="40" r="36" className="stroke-current text-gray-700" strokeWidth="8" fill="none" />
//                     <circle cx="40" cy="40" r="36" className="stroke-current text-blue-500" strokeWidth="8" fill="none" strokeDasharray="226" strokeDashoffset="34"></circle>
//                   </svg>
//                   <div className="absolute inset-0 flex items-center justify-center">
//                     <span className="text-xl font-bold">85%</span>
//                   </div>
//                 </div>
//                 <p className="mt-3 text-lg font-bold">Communication</p>
//               </div>
//             </div>

//             <div className="flex justify-evenly">
//               <div className="text-center">
//                 <div className="relative w-20 h-20">
//                   <svg className="w-full h-full">
//                     <circle cx="40" cy="40" r="36" className="stroke-current text-gray-700" strokeWidth="8" fill="none" />
//                     <circle cx="40" cy="40" r="36" className="stroke-current text-blue-500" strokeWidth="8" fill="none" strokeDasharray="226" strokeDashoffset="56"></circle>
//                   </svg>
//                   <div className="absolute inset-0 flex items-center justify-center">
//                     <span className="text-xl font-bold">75%</span>
//                   </div>
//                 </div>
//                 <p className="mt-3 text-lg font-bold">Problem Solving</p>
//               </div>

//               <div className="text-center">
//                 <div className="relative w-20 h-20">
//                   <svg className="w-full h-full">
//                     <circle cx="40" cy="40" r="36" className="stroke-current text-gray-700" strokeWidth="8" fill="none" />
//                     <circle cx="40" cy="40" r="36" className="stroke-current text-blue-500" strokeWidth="8" fill="none" strokeDasharray="226" strokeDashoffset="34"></circle>
//                   </svg>
//                   <div className="absolute inset-0 flex items-center justify-center">
//                     <span className="text-xl font-bold">85%</span>
//                   </div>
//                 </div>
//                 <p className="mt-3 text-lg font-bold">Teamwork</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import React from 'react';

export default function Skill() {
  return (
    <div>
    <div className="skills font-sans bg-gray-900 text-white py-12 my-[250px]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-8">
          <p className="text-4xl font-bold">Technical Skills</p>
        </div>

        {/* Technical Skills Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <p className="text-lg font-bold">HTML</p>
              <div className="bg-gray-700 h-2 rounded-full">
                <div className="bg-blue-500 h-2 rounded-full w-[95%]"></div>
              </div>
            </div>

            <div>
              <p className="text-lg font-bold">CSS</p>
              <div className="bg-gray-700 h-2 rounded-full">
                <div className="bg-blue-500 h-2 rounded-full w-[85%]"></div>
              </div>
            </div>

            <div>
              <p className="text-lg font-bold">BOOTSTRAP</p>
              <div className="bg-gray-700 h-2 rounded-full">
                <div className="bg-blue-500 h-2 rounded-full w-[85%]"></div>
              </div>
            </div>

            <div>
              <p className="text-lg font-bold">TAILWIND CSS</p>
              <div className="bg-gray-700 h-2 rounded-full">
                <div className="bg-blue-500 h-2 rounded-full w-[60%]"></div>
              </div>
            </div>

            <div>
              <p className="text-lg font-bold">JavaScript</p>
              <div className="bg-gray-700 h-2 rounded-full">
                <div className="bg-blue-500 h-2 rounded-full w-[75%]"></div>
              </div>
            </div>

            <div>
              <p className="text-lg font-bold">TypeScript</p>
              <div className="bg-gray-700 h-2 rounded-full">
                <div className="bg-blue-500 h-2 rounded-full w-[87%]"></div>
              </div>
            </div>

            <div>
              <p className="text-lg font-bold">Next.Js</p>
              <div className="bg-gray-700 h-2 rounded-full">
                <div className="bg-blue-500 h-2 rounded-full w-[72%]"></div>
              </div>
            </div>
          </div>

          {/* Professional Skills Section */}
          <div className="space-y-10">
            <div className="text-center">
              <p className="text-4xl font-bold">Professional Skills</p>
            </div>

            <div className="flex flex-wrap justify-evenly">
              <div className="text-center">
                <div className="relative w-20 h-20">
                  <svg className="w-full h-full">
                    <circle cx="40" cy="40" r="36" className="stroke-current text-gray-700" strokeWidth="8" fill="none" />
                    <circle cx="40" cy="40" r="36" className="stroke-current text-blue-500" strokeWidth="8" fill="none" strokeDasharray="226" strokeDashoffset="22"></circle>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xl font-bold">90%</span>
                  </div>
                </div>
                <p className="mt-3 text-lg font-bold">Creativity</p>
              </div>

              <div className="text-center">
                <div className="relative w-20 h-20">
                  <svg className="w-full h-full">
                    <circle cx="40" cy="40" r="36" className="stroke-current text-gray-700" strokeWidth="8" fill="none" />
                    <circle cx="40" cy="40" r="36" className="stroke-current text-blue-500" strokeWidth="8" fill="none" strokeDasharray="226" strokeDashoffset="34"></circle>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xl font-bold">85%</span>
                  </div>
                </div>
                <p className="mt-3 text-lg font-bold">Communication</p>
              </div>
            </div>

            <div className="flex flex-wrap justify-evenly">
              <div className="text-center">
                <div className="relative w-20 h-20">
                  <svg className="w-full h-full">
                    <circle cx="40" cy="40" r="36" className="stroke-current text-gray-700" strokeWidth="8" fill="none" />
                    <circle cx="40" cy="40" r="36" className="stroke-current text-blue-500" strokeWidth="8" fill="none" strokeDasharray="226" strokeDashoffset="56"></circle>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xl font-bold">75%</span>
                  </div>
                </div>
                <p className="mt-3 text-lg font-bold">Problem Solving</p>
              </div>

              <div className="text-center">
                <div className="relative w-20 h-20">
                  <svg className="w-full h-full">
                    <circle cx="40" cy="40" r="36" className="stroke-current text-gray-700" strokeWidth="8" fill="none" />
                    <circle cx="40" cy="40" r="36" className="stroke-current text-blue-500" strokeWidth="8" fill="none" strokeDasharray="226" strokeDashoffset="34"></circle>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xl font-bold">85%</span>
                  </div>
                </div>
                <p className="mt-3 text-lg font-bold">Teamwork</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
