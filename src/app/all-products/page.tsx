import Topbar from "@/components/topbar";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import Ceramics from "@/components/caramics-sec";
import Footer from "@/components/footer";
import Image from "next/image";
import { Input } from "@/components/ui/input";

export default function Allproducts() {
    return (
        <>
            <Topbar />
            <h1 className="text-3xl text-center pt-10 px-5 py-5">View all products</h1>
            <ul className="flex flex-col md:flex-row justify-between px-5">
                <li className="flex flex-wrap gap-8">
                    <Link href="" className="flex items-center gap-2">Category<ChevronDown /></Link>
                    <Link href="" className="flex items-center gap-2">Product type <ChevronDown /></Link>
                    <Link href="" className="flex items-center gap-2">Price <ChevronDown /></Link>
                    <Link href="" className="flex items-center gap-2">Brand <ChevronDown /></Link>
                </li>
                <li className="flex flex-wrap gap-9 mt-4 md:mt-0">
                    <Link href="" className="flex items-center gap-2">Sorted by:<ChevronDown /></Link>
                    <Link href="" className="flex items-center gap-2">Date added<ChevronDown /></Link>
                </li>
            </ul>
            <br />
            <Ceramics />
            <Ceramics />
            <Ceramics />
            {/* Button */}
            <div className="flex items-center justify-center pt-10">
                <button className="px-4 py-2 mb-5 bg-gray-300">View collection</button>
            </div>
            {/* 2nd part */}
            {/* hero-section */}
            <div className="flex flex-col lg:flex-row lg:justify-between lg:ml-20 px-5">
                <div className="flex justify-center mt-6 lg:mt-0">
                    <Image src={"/Image (1).png"} alt="right-img" width={600} height={600} className="max-w-full h-auto" />
                </div>
                {/* content right section */}
                <div className="lg:w-[600px] p-6 text-gray-500">
                    <h1 className="text-3xl">Join the club and get the benefits</h1>
                    <br />

                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat reprehenderit dolorem, ut veritatis
                        cupiditate aperiam.
                    </p>

                    <div className="flex w-full max-w-[400px] justify-between mt-32">
                            <Input placeholder="your@email.com" className="bg-gray-100 text-gray-900 border-none py-6 pl-6 w-[80%]" />
                            <button className="bg-gray-900 w-[35%] px-4 text-white">Sign up</button>
                        </div>
                </div>
            </div>

            <Footer />
        </>
    );
}
