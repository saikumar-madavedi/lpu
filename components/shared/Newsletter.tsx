// import React from 'react';
// import maleTourist from '../../public/assets/images/male-tourist.png';
// import Image from 'next/image'


// const Newsletter = () => {
//   return (
//     <section className="newsletter bg-blue-200 py-0 mt-12">
//       <div className="container mx-auto">
//         <div className="grid grid-cols-1 lg:grid-cols-2">
//           <div className="newsletter__content p-8">
//             <h2 className="text-3xl mb-8">Subscribe now to get useful traveling information.</h2>
//             <div className="newsletter__input flex items-center justify-between bg-white p-2 rounded mb-8">
//               <input type="email" placeholder="Enter your email" className="text-lg text-gray-800 flex-grow" />
//               <button className="btn newsletter__btn bg-blue-500 text-white px-6 py-2 text-lg">Subscribe</button>
//             </div>
//             <p className="text-lg text-gray-800">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda eaque, ipsum iste commodi quia quis.</p>
//           </div>
//           <div className="newsletter__img">
//             <Image src={maleTourist} alt="" className="w-full" />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Newsletter;


import React from 'react';
import maleTourist from '../../public/assets/images/male-tourist.png';
import Image from 'next/image';

const Newsletter = () => {
  return (
    <section className="newsletter bg-blue-200 py-0 mt-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="newsletter__content p-8 flex flex-col justify-center">
            <h2 className="text-4xl mb-8 font-semibold text-gray-900">Stay Updated with Exciting Events!</h2>
            <div className="newsletter__input flex items-center justify-between bg-white p-2 rounded mb-8">
              <input type="email" placeholder="Enter your email" className="text-lg text-gray-800 flex-grow border-none focus:outline-none px-4 py-2 rounded-md" />
              <button className="btn newsletter__btn bg-blue-500 text-white px-6 py-2 text-lg">Subscribe</button>
            </div>
            <p className="text-lg text-gray-800">Subscribe now to receive valuable information about upcoming events, workshops, and more! Don't miss out on exciting opportunities to connect and learn.</p>
          </div>
          <div className="newsletter__img">
            <Image src={maleTourist} alt="Male Tourist" className="w-full rounded-lg shadow-lg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
