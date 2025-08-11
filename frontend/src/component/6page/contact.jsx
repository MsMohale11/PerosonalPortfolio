// import React, { useRef } from "react";
// import { motion } from "framer-motion";
// import { MessageCircle } from "lucide-react";
// import {useNavigate} from "react-router-dom"

// export default function Contact() {
//   const contactRef = useRef();
//  const navigate = useNavigate();

//   const scrollToForm = () => {
//     contactRef.current?.scrollIntoView({ behavior: "smooth" });
//   };

//   const fieldVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: (i) => ({
//       opacity: 1,
//       y: 0,
//       transition: { delay: i * 0.1, type: "spring", stiffness: 100 },
//     }),
//     focus: {
//       scale: 1.02,
//       boxShadow: "0 0 8px rgba(147, 51, 234, 0.7)",
//       borderColor: "rgb(147 51 234)",
//     },
//   };

//   const buttonVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { delay: 0.6, type: "spring", stiffness: 100 },
//     },
//     hover: { scale: 1.05, backgroundColor: "#7e22ce" },
//     tap: { scale: 0.95 },
//   };

//   return (
//     <>
//       {/* Floating Icon */}
//       <div
//         className="fixed bottom-6 right-6 z-50 bg-purple-600 text-white p-4 rounded-full shadow-lg cursor-pointer hover:bg-purple-700 hover:shadow-[0_0_15px_rgba(147,51,234,0.6)] transition-all duration-300"
//         onClick={scrollToForm}
//         title="Contact Me"
//       >
//         <MessageCircle className="w-6 h-6" />
//       </div>

//       {/* Contact Section */}
//       <div
//         ref={contactRef}
//         className="min-h-screen bg-gradient-to-br from-purple-50 to-white flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
//       >
//         <div className="max-w-xl w-full space-y-8 bg-white p-8 rounded-lg shadow-lg border border-purple-100">
//           <div className="text-center">
//             <h1 className="text-4xl font-bold text-purple-800">Contact</h1>
//             <p className="mt-2 text-purple-600">
//               I'd love to{" "}
//               <span className="font-semibold text-purple-900">hear</span> from you!
//             </p>
//             <p className="text-sm text-purple-500 mt-1">
//               Fill out the form below and I'll get back to you as soon as possible. ✨
//             </p>
//           </div>

//           <form
//             action="https://formsubmit.co/khushboomohale123@gmail.com"
//             method="POST"
//             className="space-y-6"
//           >
//             <input type="hidden" name="_captcha" value="false" />
//             <input
//               type="hidden"
//               name="_next"
//               value="https://your-portfolio.netlify.app/thank-you"
//             />

//             {/* Name */}
//             <motion.div
//               custom={0}
//               variants={fieldVariants}
//               initial="hidden"
//               animate="visible"
//             >
//               <label className="block text-sm font-medium text-purple-800">
//                 Name
//               </label>
//               <motion.input
//                 type="text"
//                 name="name"
//                 required
//                 pattern="^[a-zA-Z\s]{2,30}$"
//                 title="Name must be 2-30 characters with only letters and spaces"
//                 placeholder="Your Name"
//                 className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none"
//                 whileFocus={fieldVariants.focus}
//                 transition={{ type: "spring", stiffness: 120 }}
//               />
//             </motion.div>

//             {/* Email */}
//             <motion.div
//               custom={1}
//               variants={fieldVariants}
//               initial="hidden"
//               animate="visible"
//             >
//               <label className="block text-sm font-medium text-purple-800">
//                 Email
//               </label>
//               <motion.input
//                 type="email"
//                 name="email"
//                 required
//                 placeholder="you@example.com"
//                 className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none"
//                 whileFocus={fieldVariants.focus}
//                 transition={{ type: "spring", stiffness: 120 }}
//               />
//             </motion.div>

//             {/* Phone */}
//             <motion.div
//               custom={2}
//               variants={fieldVariants}
//               initial="hidden"
//               animate="visible"
//             >
//               <label className="block text-sm font-medium text-purple-800">
//                 Phone Number
//               </label>
//               <motion.input
//                 type="tel"
//                 name="number"
//                 pattern={"^\\+?[0-9]{10,13}$"}
//                 title="Phone number must be 10-13 digits with optional +"
//                 placeholder="e.g. +91 9876543210"
//                 className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none"
//                 whileFocus={fieldVariants.focus}
//                 transition={{ type: "spring", stiffness: 120 }}
//               />
//             </motion.div>

//             {/* Message */}
//             <motion.div
//               custom={3}
//               variants={fieldVariants}
//               initial="hidden"
//               animate="visible"
//             >
//               <label className="block text-sm font-medium text-purple-800">
//                 Message
//               </label>
//               <motion.textarea
//                 name="message"
//                 required
//                 minLength={10}
//                 maxLength={500}
//                 placeholder="Type your message here..."
//                 className="mt-1 w-full px-4 py-2 h-32 border border-gray-300 rounded-md shadow-sm resize-none focus:outline-none"
//                 whileFocus={fieldVariants.focus}
//                 transition={{ type: "spring", stiffness: 120 }}
//               />
//             </motion.div>

//             {/* Submit */}
//             <motion.button
//               type="submit"
//               className="w-full bg-gradient-to-r from-purple-600 to-purple-800 text-white py-2 px-6 rounded-md shadow-md font-medium hover:shadow-lg hover:shadow-purple-300"
//               variants={buttonVariants}
//               initial="hidden"
//               animate="visible"
//               whileHover="hover"
//               whileTap="tap"
//             >
//               Send Message
//             </motion.button>
//           </form>

//           <h2 className="text-center text-sm text-purple-500 mt-6">
//             Thanks for reaching out! 
//           </h2>
//         </div>
//       </div>
//     </>
//   );
// }

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Contact() {
  const contactRef = useRef();
  const navigate = useNavigate();

  const scrollToForm = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const fieldVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, type: "spring", stiffness: 100 },
    }),
    focus: {
      scale: 1.02,
      boxShadow: "0 0 8px rgba(147, 51, 234, 0.7)",
      borderColor: "rgb(147 51 234)",
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.6, type: "spring", stiffness: 100 },
    },
    hover: { scale: 1.05, backgroundColor: "#7e22ce" },
    tap: { scale: 0.95 },
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);

  // Add FormSubmit hidden fields
  formData.append("_captcha", "false");

  try {
    const response = await fetch("https://formsubmit.co/modudeveloper@gmail.com", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      navigate("/thank-you"); // Navigate only if the form was successfully sent
    } else {
      console.error("FormSubmit error", await response.text());
      alert("There was a problem sending your message. Please try again.");
    }
  } catch (error) {
    console.error("Form submission failed", error);
    alert("An error occurred while submitting the form.");
  }
};


  return (
    <>
      {/* Floating Icon */}
      <div
        className="fixed bottom-6 right-6 z-50 bg-purple-600 text-white p-4 rounded-full shadow-lg cursor-pointer hover:bg-purple-700 hover:shadow-[0_0_15px_rgba(147,51,234,0.6)] transition-all duration-300"
        onClick={scrollToForm}
        title="Contact Me"
      >
        <MessageCircle className="w-6 h-6" />
      </div>

      {/* Contact Section */}
      <div
        ref={contactRef}
        className="min-h-screen bg-gradient-to-br from-purple-50 to-white flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-xl w-full space-y-8 bg-white p-8 rounded-lg shadow-lg border border-purple-100">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-purple-800">Contact</h1>
            <p className="mt-2 text-purple-600">
              I'd love to{" "}
              <span className="font-semibold text-purple-900">hear</span> from you!
            </p>
            <p className="text-sm text-purple-500 mt-1">
              Fill out the form below and I'll get back to you as soon as possible. ✨
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <motion.div custom={0} variants={fieldVariants} initial="hidden" animate="visible">
              <label className="block text-sm font-medium text-purple-800">Name</label>
              <motion.input
                type="text"
                name="name"
                required
                pattern="^[a-zA-Z\s]{2,30}$"
                title="Name must be 2-30 characters with only letters and spaces"
                placeholder="Your Name"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none"
                whileFocus={fieldVariants.focus}
              />
            </motion.div>

            {/* Email */}
            <motion.div custom={1} variants={fieldVariants} initial="hidden" animate="visible">
              <label className="block text-sm font-medium text-purple-800">Email</label>
              <motion.input
                type="email"
                name="email"
                required
                placeholder="you@example.com"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none"
                whileFocus={fieldVariants.focus}
              />
            </motion.div>

            {/* Phone */}
            <motion.div custom={2} variants={fieldVariants} initial="hidden" animate="visible">
              <label className="block text-sm font-medium text-purple-800">Phone Number</label>
              <motion.input
                type="tel"
                name="number"
                pattern={"^\\+?[0-9]{10,13}$"}
                title="Phone number must be 10-13 digits with optional +"
                placeholder="e.g. +91 9876543210"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none"
                whileFocus={fieldVariants.focus}
              />
            </motion.div>

            {/* Message */}
            <motion.div custom={3} variants={fieldVariants} initial="hidden" animate="visible">
              <label className="block text-sm font-medium text-purple-800">Message</label>
              <motion.textarea
                name="message"
                required
                minLength={10}
                maxLength={500}
                placeholder="Type your message here..."
                className="mt-1 w-full px-4 py-2 h-32 border border-gray-300 rounded-md shadow-sm resize-none focus:outline-none"
                whileFocus={fieldVariants.focus}
              />
            </motion.div>

            {/* Submit */}
            <motion.button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-purple-800 text-white py-2 px-6 rounded-md shadow-md font-medium hover:shadow-lg hover:shadow-purple-300"
              variants={buttonVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              whileTap="tap"
            >
              Send Message
            </motion.button>
          </form>

          <h2 className="text-center text-sm text-purple-500 mt-6">
            Thanks for reaching out! 
          </h2>
        </div>
      </div>
    </>
  );
}
