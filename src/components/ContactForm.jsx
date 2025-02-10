import React, { useState, useRef } from 'react';
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ContactForm() {
  const form = useRef();
  // const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  // const [status, setStatus] = useState('');
  const [rocketAnimated, setRocketAnimated] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    
    // const formData = new FormData(form.current);
    // const fromName = formData.get("from_name");
    // const fromEmail = formData.get("from_email");
    // formData.set("from_name", `${fromName} <${fromEmail}>`);
    
    emailjs
    .sendForm(
    "service_entvitq", 
    "template_xhas4qh", 
    form.current,
    "g_11IuTMI8h-asr48" 
    )
    .then(
    () => {
      toast.success("Email sent successfully!", {
        position: 'top-center',
        autoClose: 1000,
      });  
    console.log("Email sent successfully!");
    form.current.reset();
    },
    (error) => {
      toast.error(error.text, {
        position: "top-center",
        autoClose: 1000,
      });
    console.log("Failed to send email:", error.text);
    }
     );
    };

  return (
    <section
      id="contact"
      style={{
        backgroundImage: "url('/images/key-1.jpg')",
        padding: '50px',
        maxWidth: '2800px',
        textAlign: 'center',
        color: 'white',
        backgroundColor: 'rgba(0, 0, 0, 0.15)',
        borderRadius: '0',
      }}
    >
      <h2
        style={{
          fontSize: '3rem',
          fontWeight: 'bold',
          marginBottom: '40px',
          color: '#608BC1',
          textShadow: '2px 2px 5px rgba(0, 0, 0, 0.8), 3px 3px 10px rgba(255, 255, 255, 0.4)',
          fontFamily: "'Raleway', sans-serif",
        }}
      >
        Contact Me
      </h2>

      <form
        ref={form}
        onSubmit={sendEmail}
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          maxWidth: '400px',
          margin: '0 auto',
        }}
      >
        <input
          type="text"
          placeholder="Name"
          name="from_name"
          required
          style={{ padding: '10px', color: 'black', borderRadius: '5px', border: 'none' }}
        />
        <input
          type="email"
          placeholder="Email"
          name="to_name"
          required
          style={{ padding: '10px', color: 'black', borderRadius: '5px', border: 'none' }}
        />
        <textarea
          placeholder="Message"
          name="message"
          rows="4"
          required
          style={{
            padding: '10px',
            color: 'black',
            borderRadius: '5px',
            border: 'none',
            resize: 'none',
          }}
        ></textarea>
        <button
          type="submit"
          disabled={rocketAnimated} 
          style={{
            backgroundColor: '#608BC1',
            color: 'white',
            padding: '10px',
            borderRadius: '15px',
            border: 'none',
            cursor: rocketAnimated ? 'not-allowed' : 'pointer',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          Submit
          {rocketAnimated && (
            <span
            style={{
              position: 'absolute',
              top: '50%',
              right: '30',
              animation: 'rocketLeftToRightFast 13s ease-in-out forwards', 
              fontSize: '1.5rem',
            }}
          >
            🛫
          </span>
          
          )}
        </button>
        {/* {status && <p style={{ marginTop: '10px' }}>{status}</p>} */}
      </form>

      <style>
        {`
          @keyframes rocketLeftToRightFast {
            0% {
              transform: translateY(-50%) translateX(0);
              opacity: 1;
            }
            100% {
              transform: translateY(-50%) translateX(120%);
              opacity: 0;
            }
          }
        `}
      </style>

    </section>
  );
}

export default ContactForm;

// import React, { useRef, useState } from "react";
// import emailjs from "@emailjs/browser";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const ContactForm =()=> {
//   const form = useRef();
//   const [rocketAnimated, setRocketAnimated] = useState(false);

//   const sendEmail = (e) => {
//     e.preventDefault();
    
//     setRocketAnimated(true);
//     emailjs
//       .sendForm(
//         "service_entvitq",
//         "template_xhas4qh",
//         form.current,
//         "g_11IuTMI8h-asr48"
//       )
//       .then(
//         () => {
//           toast.success("Email sent successfully!", {
//             position: "top-center",
//             autoClose: 1000,
//           });
//           form.current.reset();
//           setRocketAnimated(false);
//         },
//         (error) => {
//           toast.error(error.text, {
//             position: "top-center",
//             autoClose: 1000,
//           });
//           setRocketAnimated(false);
//         }
//       );
//   };

//   return (
//     <section
//       id="contact"
//       className="bg-cover bg-center bg-no-repeat py-12 px-4 md:px-8 lg:px-16 text-white text-center"
//       style={{ backgroundImage: "url('/images/key-1.jpg')" }}
//     >
//       <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-400 drop-shadow-lg font-raleway">
//         Contact Me
//       </h2>

//       <form
//         ref={form}
//         onSubmit={sendEmail}
//         className="flex flex-col gap-4 max-w-md mx-auto"
//       >
//         <input
//           type="text"
//           placeholder="Name"
//           name="from_name"
//           required
//           className="p-3 text-black rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
//         />
//         <input
//           type="email"
//           placeholder="Email"
//           name="to_name"
//           required
//           className="p-3 text-black rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
//         />
//         <textarea
//           placeholder="Message"
//           name="message"
//           rows="4"
//           required
//           className="p-3 text-black rounded-md border border-gray-300 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
//         ></textarea>
//         <button
//           type="submit"
//           disabled={rocketAnimated}
//           className={`bg-blue-500 text-white p-3 rounded-lg shadow-md transition-all duration-300 ${rocketAnimated ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-600"}`}
//         >
//           Submit
//           {rocketAnimated && (
//             <span className="absolute right-4 animate-moveRocket">🛫</span>
//           )}
//         </button>
//       </form>

//       <style>
//         {`
//           @keyframes moveRocket {
//             0% { transform: translateX(0); opacity: 1; }
//             100% { transform: translateX(120%); opacity: 0; }
//           }
//           .animate-moveRocket {
//             animation: moveRocket 2s ease-in-out forwards;
//           }
//         `}
//       </style>
//     </section>
//   );
// }

// export default ContactForm;

