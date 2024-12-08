import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { Input } from "./ui/input";

export default function Footer() {
    return (
        <>
            <footer className="bg-[var(--bg-color)] p-10">
                <div className="flex flex-col lg:flex-row justify-between text-white">
                    <div className="flex flex-col lg:flex-row lg:gap-32 text-white mb-6 lg:mb-0">
                        <div>
                            <ul className="space-y-5">
                                <li>Menu</li>
                                <li>New arrivals</li>
                                <li>Best sellers</li>
                                <li>Recently viewed</li>
                                <li>Popular this week</li>
                                <li>All Products</li>
                            </ul>
                        </div>
                        <div>
                            <ul className="space-y-5">
                                <li>Crockery</li>
                                <li>Furniture</li>
                                <li>Homeware</li>
                                <li>Plant pots</li>
                                <li>Chairs</li>
                                <li>Crockery</li>
                            </ul>
                        </div>
                        <div>
                            <ul className="space-y-5">
                                <li>Our company</li>
                                <li>About us</li>
                                <li>Vacancies</li>
                                <li>Contact us</li>
                                <li>Privacy</li>
                                <li>Return policy</li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex flex-col items-center lg:items-start">
                        <p>Join our mailing list</p>
                        <div className="flex w-full max-w-[400px] justify-between mt-10">
                            <Input placeholder="your@email.com" className="bg-gray-900 text-gray-200 border-none py-6 pl-6 w-[80%]" />
                            <button className="bg-white w-[35%] px-4 text-gray-600">Sign up</button>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row justify-between items-center border-t-2 border-gray-300 mt-5 pt-6">
                    <div>
                        <h4 className="text-white">Copyright 2022 Avion LTD</h4>
                    </div>
                    <div className="flex gap-6 mt-6 lg:mt-0">
                        <Linkedin className="text-white" />
                        <Facebook className="text-white" />
                        <Instagram className="text-white" />
                        <Twitter className="text-white" />
                    </div>
                </div>
            </footer>
        </>
    );
}
