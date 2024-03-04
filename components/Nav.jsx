// import React from 'react';
// // import logo from '../assets/logo.svg';
// import { FaBars } from 'react-icons/fa';
// import { links } from '../utils/constants';
// import Link from 'next/link';
// import useNavigationContext from '@/context/navigation_context';
// import Image from 'next/image';



// const Nav = ({ isSidebarOpen, setIsSidebarOpen,linkActive }) => {
//   const openSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   return (
//     <nav className="h-20 flex items-center justify-center mx-auto">
//       <div className=" w-full sm:mx-auto flex sm:items-center flex-row  lg:space-x-96 p-5">
//         <div className="flex items-center space-x-44 md:justify-between ">
//           <Link href="/">
//             <Image src='/Plogo.png' alt="comfy sloth" className="w-24 h-24 sm:w-28 sm:h-32 pt-3"                 height={200}
//                 width={70} />
//           </Link>
//           <div>
            
//             <button
//               type="button"
//               className="ml-4 p-2 text-primary-500 hover:text-primary-700 focus:outline-none sm:hidden block"
//               onClick={openSidebar}
//             >
//               <FaBars className="w-8 h-8 " style={{ color: 'brown' }} />
//             </button>
//           </div>
//         </div>
//         <ul className="hidden sm:flex items-center justify-center space-x-4">
//         {links.map((link) => (
//           <li key={link.id}>
//             <Link href={link.url}>
//               <button className={`text-orange-500 hover:text-primary-700 capitalize ${parseInt(linkActive) === link.id ? 'font-bold' : ''}`}>
//                 {link.text}
//               </button>
//             </Link>
//           </li>
//         ))}
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Nav;


import React from 'react';
// import logo from '../assets/logo.svg';
import { FaBars } from 'react-icons/fa';
import { links } from '../utils/constants';
import Link from 'next/link';
import useNavigationContext from '@/context/navigation_context';
import Image from 'next/image';



const Nav = ({ isSidebarOpen, setIsSidebarOpen,linkActive }) => {
  const openSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <nav className="h-20 flex items-center justify-center mx-auto">
      <div className=" w-full sm:mx-auto flex sm:items-center flex-row md:space-x-36 lg:space-x-96 p-5">
        <div className="flex items-center space-x-44">
          <Link href="/">
            <Image src='/Plogo.png' alt="comfy sloth" className="w-24 h-24 sm:w-28 sm:h-32 pt-3"                 height={200}
                width={70} />
          </Link>
          <button
            type="button"
            className="ml-4 p-2 text-primary-500 hover:text-primary-700 focus:outline-none sm:hidden block"
            onClick={openSidebar}
          >
            <FaBars className="w-8 h-8 " style={{ color: 'brown' }} />
          </button>
        </div>
        <ul className="hidden md:flex items-center justify-center space-x-4">
        {links.map((link) => (
          <li key={link.id}>
            <Link href={link.url}>
              <button className={`text-orange-500 hover:text-primary-700 capitalize ${parseInt(linkActive) === link.id ? 'font-bold' : ''}`}>
                {link.text}
              </button>
            </Link>
          </li>
        ))}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;

