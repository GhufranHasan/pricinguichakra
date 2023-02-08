"use client"
// import Image from 'next/image'
// import { Inter } from '@next/font/google'
// import styles from './page.module.css'

// const inter = Inter({ subsets: ['latin'] })
import { ChakraProvider } from "@chakra-ui/react"
import Features from "./Features";
import Header from "./Header";
import Pricing from "./Pricing";
// import Practice  from "./Practice";

export default function Home() {
  return (
    <ChakraProvider>
      {/* <Practice/> */}
      <Header/>
      <Pricing/>
      <Features/>
    </ChakraProvider>
  );
}
