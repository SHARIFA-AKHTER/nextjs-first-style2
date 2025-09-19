// import styles from "./about.module.css"
// const AboutPage = () => {
//     return (
//         <div>
//             <h1 className={styles.text_style}>This is About Page</h1>
//         </div>
//     );
// };

// export default AboutPage;

import Image from "next/image";
import styles from "./about.module.css";

const AboutPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-6 px-4">
      {/* Title */}
      <h1 className={styles.text_style}>This is About Page</h1>

      {/* Responsive Image */}
      <div className="w-full max-w-3xl relative aspect-video">
        <Image
          src="/about-banner.jpg"
          alt="About Page Banner"
          fill
          className="rounded-2xl shadow-lg object-cover"
          sizes="(max-width: 768px) 100vw, 
                 (max-width: 1200px) 80vw, 
                 50vw"
        />
      </div>

      {/* Short Text */}
      <p className={`${styles.text_style} text-center px-2`}>
        Welcome to the About Page. Here you can learn more about us and what we
        do. We believe in building beautiful, modern web applications with
        Next.js!
      </p>
    </div>
  );
};

export default AboutPage;

