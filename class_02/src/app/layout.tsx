// import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// import "./globals.css";

import { Html } from "next/document";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>{children}</body>
//     </html>
//   );
// }

//  function heading(){
//   return (
//     <html lang="en"><body>
//       <h1>hello</h1>
//     </body></html>
//   )
// }

// export default heading;


function rootRout(props:any) {
  
  return (
    <html><body>
      {/* <h1>Hello</h1> */}
      <h1>Common</h1>
      {props.children}
    
    </body></html>
  )
}

export default rootRout;