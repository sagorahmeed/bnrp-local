
'use client'
 
import React, { useState } from 'react';
import SubTitle from '@/components/SubTItle';
import Button from '@/components/button';
import Image from 'next/image';
import CTA from '@/components/cta';
import {useTranslations} from "next-intl";

export default function Page() {
  const [formData, setFormData] = useState({
    fullName: '',
    officialId: '',
    email: '',
    phone: '',
    message: '',
  });




const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
  const tRequired = useTranslations('Contact.RequiredErrorMessage')
  const validate = () => {
    const newErrors = {};
    if (!formData.fullName) newErrors.fullName = tRequired('fullName');
    if (!formData.officialId) newErrors.officialId = tRequired('officialId');
    if (!formData.email) {
      newErrors.email = tRequired('Email');
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = tRequired('EmailEx');
    }
    if (!formData.phone) {
      newErrors.phone = tRequired('phoneNumber');
    } else if (!/^\d{10,15}$/.test(formData.phone)) {
      newErrors.phone = tRequired('phoneNumberEx');
    }
    if (!formData.message) newErrors.message = tRequired('message');
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

   setIsSubmitting(false);
   try {
     const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/send-mail`, {
       method: 'POST',
       headers: {
         'Content-Type': 'application/json',
       },
       body: JSON.stringify(formData),
     });

      if (response.ok) {
        setFormData({
          fullName: '',
          officialId: '',
          email: '',
          phone: '',
          message: '',
        });
      } else {
        console.log('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(true);
    }
  };

  const reverseStateHandler = () => {
   setIsSubmitting((prev) => !prev)
  }

  const t = useTranslations('Contact')
  const tLabel = useTranslations('Contact.Label')
  const tPlaceholder = useTranslations('Contact.Placeholder')

  return (
    <section>
      <div className="lg:pb-[96px] md:pb-[76px] pb-[64px] lg:pt-[178px] pt-[100px]">
        <div className="bnrp-container">
          <div className="md:grid grid-cols-2 lg:gap-[112px] gap-[50px] justify-center items-center">
            <div className="md:max-w-[500px] w-full">
              {
                !isSubmitting ? (
                 <div>
                 <SubTitle title={t('title')} />
                 <form className="mt-12 space-y-6" onSubmit={handleSubmit}>
                   {[
                     { name: 'fullName', label: tLabel('fullName'), type: 'text', placeholder: tPlaceholder('fullName') },
                     { name: 'officialId', label: tLabel('officialId'), type: 'text', placeholder: tPlaceholder('officialId') },
                     { name: 'email', label: tLabel('Email'), type: 'email',placeholder: tPlaceholder('Email') },
                   ].map(({ name, label, type,placeholder }) => (
                     <div key={name} className="flex flex-col gap-[6px]">
                       <label className="input-label">
                         {label}
                         <span className="required-label">*</span>
                       </label>
                       <input
                         name={name}
                         type={type}
                         className={`input-style input-focus ${
                           errors[name] ? '!border-[1px] !border-red-500' : ''
                         }`}
                         placeholder={placeholder}
                         value={formData[name]}
                         onChange={handleChange}
                       />
                       {errors[name] && (
                         <p className="text-red-500 text-sm">{errors[name]}</p>
                       )}
                     </div>
                   ))}

                   {/* Phone Input with Wrapper */}
                   <div className="flex flex-col gap-[6px]">
                     <p className="input-label">
                       {tLabel('phoneNumber')}<span className="required-label">*</span>
                     </p>
                     <div
                       className={`flex w-full items-center justify-between rounded-[8px] border-[1px] border-[#D0D5DD] ${
                         errors.phone ? 'border-red-500' : ''
                       }`}
                     >
                       <p className="input-label-currency border-r-[1px] border-[#D0D5DD] px-[14px]">+88</p>
                       <input
                         className="bg-white text-black placeholder:text-[#667085] py-[10px] font-inter text-[16px] not-italic font-normal leading-[24px] focus:!outline-none flex-grow px-[10px]"
                         name="phone"
                         onChange={handleChange}
                         placeholder="01xxx-xxxxxx"
                         type="number"
                         value={formData.phone}
                       />
                     </div>
                     {errors.phone && (
                       <p className="text-red-500 text-sm">{errors.phone}</p>
                     )}
                   </div>

                   {/* Message Input */}
                   <div className="flex flex-col gap-[6px]">
                     <label className="input-label">
                       {tLabel('message')}<span className="required-label">*</span>
                     </label>
                     <textarea
                       name="message"
                       rows="5"
                       className={`input-style input-focus ${
                         errors.message ? '!border-[1px] !border-red-500' : ''
                       }`}
                       placeholder={tPlaceholder('message')}
                       value={formData.message}
                       onChange={handleChange}
                     />
                     {errors.message && (
                       <p className="text-red-500 text-sm">{errors.message}</p>
                     )}
                   </div>

                   {/* Submit Button */}
                   <Button
                     title={isSubmitting ? `${t('clickButtonText')}...` : `${t('buttonText')}`}
                     type="primary"
                     className="!w-full"
                     disabled={isSubmitting}
                   />
                 </form>
                 </div>
               ) : (
                 <div className='flex flex-col align-middle h-full'>
                   <SubTitle title="Thank you for your message. We will get back to you soon"  className='mb-12' />
                       <Button
                       title={'Send another message'}
                       type="outline"
                       className="!w-full"
                       onClick={reverseStateHandler}
                     />
                 </div>
               )
              }
            </div>
            <Image priority
              src="/contact-banner.png"
              width={576}
              height={480}
              className="!lg:max-w-[576px] w-full !lg:max-h-[480px] !md:max-w-[476px] !md:max-h-[380px] h-full object-cover md:block hidden"
              alt="A navy ship is sailing on the river."
            />
          </div>
        </div>
      </div>
      <div className="space-container bg-[#1C3586]">
        <div className="bnrp-container">
          <CTA />
        </div>
      </div>
    </section>
  );
}


// 'use client';

// import React, { useState } from 'react';
// import SubTitle from '../components/SubTItle';
// import Button from '../components/button';
// import Image from 'next/image';
// import CTA from '../components/cta';

// export default function Page() {
//   const [formData, setFormData] = useState({
//     fullName: '',
//     officialId: '',
//     email: '',
//     phone: '',
//     message: '',
//   });

//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

// const handleSubmit = async (e) => {
//   e.preventDefault();
//   setIsSubmitting(true);

//   try {
//     const response = await fetch('https://pennsylvania-ignore-qld-comes.trycloudflare.com/api/v1/send-mail', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(formData),
//     });

//     if (!response.ok) {
//       const errorText = await response.text();
//       console.error('Server Error:', errorText);
//     } else {
//       console.log('Form submitted successfully!');
//     }
//   } catch (error) {
//     console.error('Fetch error:', error);
//   } finally {
//     setIsSubmitting(false);
//   }
// };


//   return (
//     <section>
//       <div className="lg:pb-[96px] md:pb-[76px] pb-[64px] lg:pt-[64px] pt-[54px]">
//         <div className="bnrp-container">
//           <div className="md:grid grid-cols-2 items-start lg:gap-[112px] gap-[50px] justify-center">
//             <div className="md:max-w-[500px] w-full">
//               <SubTitle title="Contact" />
//               <form className="mt-12 space-y-6" onSubmit={handleSubmit}>
//                 {[
//                   { name: 'fullName', label: 'Full Name', type: 'text' },
//                   { name: 'officialId', label: 'Official ID', type: 'text' },
//                   { name: 'email', label: 'Email', type: 'email' },
//                 ].map(({ name, label, type }) => (
//                   <div key={name} className="flex flex-col gap-[6px]">
//                     <label className="input-label">
//                       {label}
//                       <span className="required-label">*</span>
//                     </label>
//                     <input
//                       name={name}
//                       type={type}
//                       className="input-style input-focus"
//                       placeholder={`Enter your ${label.toLowerCase()}`}
//                       value={formData[name]}
//                       onChange={handleChange}
//                     />
//                   </div>
//                 ))}

//                 {/* Phone Input with Wrapper */}
//                 <div className="flex flex-col gap-[6px]">
//                   <label className="input-label">
//                     Phone number<span className="required-label">*</span>
//                   </label>
//                   <div className="border-[1px] border-[#D0D5DD] rounded-[8px] w-full flex justify-between items-center">
//                     <p className="input-label-currency border-r-[1px] border-[#D0D5DD] px-[14px] py-[10px]">+88</p>
//                     <input
//                       name="phone"
//                       type="number"
//                       placeholder="0100000-0000"
//                       className="bg-white text-black placeholder:text-[#667085] font-inter text-[16px] not-italic font-normal leading-[24px] focus:!outline-none flex-grow px-[10px]"
//                       value={formData.phone}
//                       onChange={handleChange}
//                     />
//                   </div>
//                 </div>

//                 {/* Message Input */}
//                 <div className="flex flex-col gap-[6px]">
//                   <label className="input-label">
//                     Message<span className="required-label">*</span>
//                   </label>
//                   <textarea
//                     name="message"
//                     rows="5"
//                     className="input-style input-focus"
//                     placeholder="Leave us a message..."
//                     value={formData.message}
//                     onChange={handleChange}
//                   />
//                 </div>

//                 {/* Submit Button */}
//                 <Button
//                   title={isSubmitting ? 'Submitting...' : 'Send message'}
//                   type="primary"
//                   className="!w-full"
//                   disabled={isSubmitting}
//                 />
//               </form>
//             </div>
//             <Image priority
//               src="/contact-banner.png"
//               width={576}
//               height={480}
//               className="!lg:max-w-[576px] w-full !lg:max-h-[480px] !md:max-w-[476px] !md:max-h-[380px] h-full object-cover md:block hidden"
//               alt="A navy ship is sailing on the river."
//             />
//           </div>
//         </div>
//       </div>
//       <div className="space-container bg-[#1C3586]">
//         <div className="bnrp-container">
//           <CTA />
//         </div>
//       </div>
//     </section>
//   );
// }
