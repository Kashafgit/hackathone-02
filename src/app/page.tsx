import Brandsec from "@/components/brand-sec";
import Ceramics from "@/components/caramics-sec";
import Products from "@/components/products";
import Bottom from "@/components/last-sec";
import Chair from "./dandy-chair/page";
import { Input } from "@/components/ui/input"
import Footer from "@/components/footer";
import Topbar from "@/components/topbar";
import Hero from "@/components/hero";

import About from "./about/page";
import ShoppingCart from "./shopping cart/page";

export default function Home() {
  return (
    <>
    <Topbar/>
    
      <Hero/>
      <Brandsec />
      <Ceramics />
      <Products />
      <div className="bg-gray-100 py-10 px-6 sm:px-12 md:px-24 mt-20">
        <div className="bg-white py-10 px-6 sm:px-16 md:px-72">
          <h1 className="text-3xl text-center text-gray-900 py-8">Join the club and get the benefits</h1>
          <p className="text-center text-gray-700 mb-10">
            Sign up for newsletter and receive exclusive offers on new ranges, sales, pop-up stores, and more.
          </p>
          <div className="flex w-full max-w-[400px] justify-between mt-10">
            <Input placeholder="your@email.com" className="bg-gray-white text-gray-900 border-none py-6 pl-6 w-[80%]" />
            <button className=" bg-gray-900 w-[35%] px-4 text-gray-300">Sign up</button>
          </div>
        </div>
      </div>

      <Bottom />
      <Footer />
      <Chair />
      <About/>
      <ShoppingCart/>

    </>
  )
}