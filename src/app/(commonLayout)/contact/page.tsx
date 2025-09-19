// import styles from "./contact.module.css"
// const ContactPage = () => {
//     return (
//         <div>
//             <h1 className={styles.text_style}> This is Contact Page </h1>
//         </div>
//     );
// };

// export default ContactPage ;

import Image from "next/image";
import styles from "./contact.module.css";

const ContactPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-6 px-4 bg-gray-50">
      {/* Title */}
      <h1 className={styles.text_style}>This is Contact Page</h1>

      {/* Image */}
      <div className="w-full max-w-3xl relative aspect-video">
        <Image
          src="/about-banner.jpg"
          alt="Contact Banner"
          fill
          className="rounded-2xl shadow-lg object-cover"
          sizes="(max-width: 768px) 100vw, 
                 (max-width: 1200px) 80vw, 
                 50vw"
        />
      </div>

      {/* Short Text */}
      <p className={styles.text_style}>
        Have any questions? Feel free to reach out to us. We are always here to help you 
        and provide the best support for your needs.
      </p>
    </div>
  );
};

export default ContactPage;
