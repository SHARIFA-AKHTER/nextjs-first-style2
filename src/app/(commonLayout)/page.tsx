// import Link from "next/link";

// export default function HomePage() {
//   return (
//     <div className="text-center flex items-center justify-center flex-col gap-4 min-h-screen">
//       <h1 className="text-4xl">Welcome to Next.Js Home Page</h1>
      
//         {/* <Link prefetch = {false} href="/dashboard"> */}
//       <Link href="/dashboard">
//         <button>Dashboard</button>
//       </Link>
//     </div>
//   );
// }

"use client"

import { useRouter } from "next/navigation";



export default function HomePage() {
const router = useRouter()

  const handleNavigation = ()=>{
    router.push("/dashboard")
  }
  return (
    <div className="text-center flex items-center justify-center flex-col gap-4 min-h-screen">
      <h1 className="text-4xl">Welcome to Next.Js Home Page</h1>

        {/* <Link prefetch = {false} href="/dashboard"> */}
      
        <button onClick={handleNavigation}>Dashboard</button>
     
    </div>
  );
}
