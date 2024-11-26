import React, { useState, useRef } from 'react';
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ContactForm() {
  const form = useRef();
  // const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  // const [status, setStatus] = useState('');
  const [rocketAnimated, setRocketAnimated] = useState(false);

  // const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setRocketAnimated(true);
  //   try {
  //     await submitContactForm(formData);
  //     setStatus('Form submitted successfully!');
  //     setFormData({ name: '', email: '', message: '' }); 
  //   } catch (error) {
  //     setStatus('Failed to submit the form. Please try again.');
  //     console.error('Submission error:', error);
  //   } finally {
  //     setRocketAnimated(false); 
  //   }
  // };

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

// import React, { useRef } from "react";
// import emailjs from "@emailjs/browser";

// const ContactForm = () => {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     
//     const formData = new FormData(form.current);
//     const fromName = formData.get("from_name");
//     const fromEmail = formData.get("from_email");
//     formData.set("from_name", `${fromName} <${fromEmail}>`);

//     emailjs
//       .sendForm(
//         "service_8khrh7q", 
//         "template_0tip5gy", 
//         form.current,
//         "ftj7l61wGTTjuB3vJ" 
//       )
//       .then(
//         () => {
//           console.log("Email sent successfully!");
//           form.current.reset();
//         },
//         (error) => {
//           console.log("Failed to send email:", error.text);
//         }
//       );
//   };

//   return (
//     <section
//       className="p-8"
//       id="contact_form"
//       style={{
//         backgroundImage: "url('/images/background.jpg')", 
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundRepeat: "no-repeat",
//       }}
//     >
//       <form
//         ref={form}
//         onSubmit={sendEmail}
//         className="bg-white bg-opacity-90 p-6 rounded-lg shadow-lg max-w-md mx-auto"
//       >
//         <h2 className="text-2xl font-bold mb-4 text-center text-blue-600">
//           Contact Me
//         </h2>
//         <div className="flex flex-col gap-4">
//           <input
//             className="rounded-lg p-2 text-center border border-gray-300"
//             type="text"
//             placeholder="Name"
//             name="from_name"
//             required
//           />
//           <input
//             className="rounded-lg p-2 text-center border border-gray-300"
//             type="email"
//             placeholder="Email"
//             name="to_name"
//             required
//           />
//           <textarea
//             className="rounded-lg p-2 text-center border border-gray-300"
//             placeholder="Message"
//             name="message"
//             rows="4"
//             required
//           ></textarea>
//           <button className="bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition">
//             Submit
//           </button>
//         </div>
//       </form>
//     </section>
//   );
// };

// export default ContactForm;