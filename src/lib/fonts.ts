import { Poppins as FontSans, Poppins as FontMono } from "next/font/google"

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ['400', '700']
})

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: "300"
})

// import { Poppins } from 'next/font/google';

// const poppins = Poppins({ 
//   subsets: ['latin'],
//   weight: ['400', '700']
// });

// export default poppins;