// import {NextIntlClientProvider} from 'next-intl';
// import {getMessages} from 'next-intl/server';
// import Navigation from '@/components/Navbar/Navigation';
// import Footer from '@/components/Footer';




// export default async function BaseLayout({children, locale}) {
//   const messages = await getMessages();

//   return (
//     <html className="h-full" lang={locale}>
//       <body className='flex h-full flex-col'>
//         <NextIntlClientProvider messages={messages}>
//           <Navigation />
//             {children}
//           <Footer/>
//         </NextIntlClientProvider>
//       </body>
//     </html>
//   );
// }
