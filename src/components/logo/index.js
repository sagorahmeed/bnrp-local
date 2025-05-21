// 'use client'

// import Image from 'next/image'
// // import Link from 'next/link'
// import React from 'react'
// import NavigationLink from '../NavigationLink'


// export default function Logo({src, className}) {
//   return (
//     <>
//       <NavigationLink className={className} href="/">
//           <Image alt="logo"
//               height={28}
//               priority
//               src={src}
//               width={85}
//             />
//         </NavigationLink>
//     </>
//   )
// }

'use client';

import Image from 'next/image';
import React from 'react';
import NavigationLink from '../NavigationLink';

export default function Logo({ src, className }) {
  return (
    <NavigationLink className={className} href="/">
      <Image
        alt="logo"
        height={28}
        priority
        src={src}
        width={85}
      />
    </NavigationLink>
  );
}

