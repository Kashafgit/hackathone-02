import Footer from "@/components/footer";
import Topbar from "@/components/topbar";
import { PoundSterling } from "lucide-react";
import Image from "next/image";

export default function ShoppingCart() {
    return (
        <>
            <Topbar />
            <h1 className="text-gray-700 text-3xl px-5 sm:px-10 text-center sm:text-left">Your Shopping Cart</h1>

            {/* Product 1 */}
            <div className="flex flex-col sm:flex-row justify-between px-5 sm:px-10 py-5 border-b">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
                    {/* Image */}
                    <Image
                        src={"/Product Image.png"}
                        alt="Graystone Vase"
                        width={100}
                        height={150}
                        className="w-24 h-36 sm:w-auto sm:h-auto"
                    />
                    {/* Content */}
                    <div className="text-gray-900 text-center sm:text-left">
                        <h3 className="text-lg font-bold">Graystone Vase</h3>
                        <p className="text-sm text-gray-500 py-2">
                            A timeless ceramic vase with a tri-color grey glaze.
                        </p>
                        <div className="flex items-center justify-center sm:justify-start text-lg">
                            <PoundSterling />85
                        </div>
                    </div>
                </div>
                {/* Quantity */}
                <div className="text-center sm:text-right mt-4 sm:mt-0">
                    <span className="text-gray-700 font-medium">Quantity: 1</span>
                </div>
            </div>

            {/* Product 2 */}
            <div className="flex flex-col sm:flex-row justify-between px-5 sm:px-10 py-5 border-b">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
                    {/* Image */}
                    <Image
                        src={"/Product Image (1).png"}
                        alt="Basic White Vase"
                        width={100}
                        height={150}
                        className="w-24 h-36 sm:w-auto sm:h-auto"
                    />
                    {/* Content */}
                    <div className="text-gray-900 text-center sm:text-left">
                        <h3 className="text-lg font-bold">Basic White Vase</h3>
                        <p className="text-sm text-gray-500 py-2">
                            Beautiful and simple, perfect for classic collections.
                        </p>
                        <div className="flex items-center justify-center sm:justify-start text-lg">
                            <PoundSterling />125
                        </div>
                    </div>
                </div>
                {/* Quantity */}
                <div className="text-center sm:text-right mt-4 sm:mt-0">
                    <span className="text-gray-700 font-medium">Quantity: 1</span>
                </div>
            </div>

            {/* Footer Note */}
            <p className="text-gray-900 py-4 px-5 sm:px-10 text-center sm:text-left">
                Taxes and shipping are calculated at checkout!
            </p>
            <Footer/>
        </>
    );
}
