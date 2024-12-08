import Link from "next/link";
import Image from "next/image";

import Ceramics from "@/components/caramics-sec";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Search, ShoppingCart, UserCircle, Menu, TruckIcon, PoundSterling } from "lucide-react";
import Brandsec from "@/components/brand-sec";
import { Input } from "@/components/ui/input";
import Footer from "@/components/footer";

export default function Chair() {
    return (
        <>

            <div className="flex p-3 mt-10 bg-[var(--bg-color)] justify-center">
                <TruckIcon className="text-white mr-4" />
                <p className="text-center text-white text-sm sm:text-base">
                    Free delivery on all orders over £50 with code easier checkout
                </p>
            </div>

            {/* Navbar */}
            <div className="flex justify-between py-5 items-center px-4 lg:px-10">
                <h2 className="text-[24px] font-bold">Avion</h2>

                {/* Desktop Menu */}
                <ul className="hidden lg:flex text-center text-gray-400 gap-4">
                    <li>
                        <Link href={"/"}>Plant pots</Link>
                    </li>
                    <li>
                        <Link href={"/"}>Ceramics</Link>
                    </li>
                    <li>
                        <Link href={"/"}>Tables</Link>
                    </li>
                    <li>
                        <Link href={"/"}>Chairs</Link>
                    </li>
                    <li>
                        <Link href={"/"}>Crockery</Link>
                    </li>
                    <li>
                        <Link href={"/"}>Tableware</Link>
                    </li>
                    <li>
                        <Link href={"/"}>Cutlery</Link>
                    </li>
                </ul>

                {/* Icons */}
                <div className="hidden lg:flex space-x-4">
                    <Search className="cursor-pointer" />
                    <ShoppingCart className="cursor-pointer" />
                    <UserCircle className="cursor-pointer" />
                </div>


                <Sheet>
                    <SheetTrigger>
                        <Menu className="cursor-pointer lg:hidden" />
                    </SheetTrigger>
                    <SheetContent side="right" className="w-3/4">
                        <ul className="flex flex-col text-center text-gray-400 gap-4">
                            <li>
                                <Link href={"/"}>Plant pots</Link>
                            </li>
                            <li>
                                <Link href={"/"}>Ceramics</Link>
                            </li>
                            <li>
                                <Link href={"/"}>Tables</Link>
                            </li>
                            <li>
                                <Link href={"/"}>Chairs</Link>
                            </li>
                            <li>
                                <Link href={"/"}>Crockery</Link>
                            </li>
                            <li>
                                <Link href={"/"}>Tableware</Link>
                            </li>
                            <li>
                                <Link href={"/"}>Cutlery</Link>
                            </li>
                        </ul>
                    </SheetContent>
                </Sheet>
            </div>
            {/* hero-section */}
            <div className="flex flex-col lg:flex-row lg:justify-between lg:ml-20">
                <div className="flex justify-center mt-6 lg:mt-0">
                    <Image src={"/Image Left.png"} alt="right-img" width={600} height={600} />
                </div>
                <div className="lg:w-[600px] p-6 text-gray-500">
                    <h1 className="text-3xl">The Dandy Chair</h1>
                    <br />
                    <p className="flex text-2xl"><PoundSterling />250</p>
                    <br />
                    <h5 className="text-xl text-gray-600">Description</h5>
                    <br />
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat reprehenderit dolorem, ut veritatis
                        cupiditate aperiam.
                    </p>
                    <br />
                    <ul className="ml-5">
                        <li className="list-disc">Premium material</li>
                        <li className="list-disc">handmade upholstery</li>
                        <li className="list-disc">Quality timeless classis</li>
                    </ul>
                    <br />
                    <p className="text-gray-500 ">Dimension
                    </p>
                    <br />
                    <div className="flex w-40 justify-between">
                        <p>Height</p>
                        <p>Width</p>
                        <p>Depth</p>
                    </div>
                    <br />
                    <div className="flex w-40 justify-between">
                        <p>110cm</p>
                        <p>75cm</p>
                        <p>50cm</p>
                    </div>
                    <div className="lg:ml-20 mt-7 flex items-center justify-between">
                        <p className="flex gap-8">Amount
                            <button className="bg-gray-200 px-4 ">- &nbsp; 1 &nbsp; +</button>
                        </p>

                        <button className="bg-[var(--bg-color)] text-white px-5 py-2  lg:w-auto">Add to Cart</button>
                    </div>
                </div>


            </div>
            <Ceramics />
            <Brandsec />
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
            <Footer />
        </>
    );
}
