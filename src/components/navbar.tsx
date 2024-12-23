import Link from "next/link";

export default function Navbar({ vertical = false }) {
    return (
        <div className={`p-4 ${vertical ? "flex flex-col gap-4" : "flex justify-center items-center"}`}>
            <ul className={`flex ${vertical ? "flex-col" : "gap-6"} text-center text-gray-400`}>
                <li>
                    <Link href={"/"}>Home</Link>
                </li>
                <li>
                    <Link href={"/about"}>About </Link>
                </li>
                <li>
                    <Link href={"/product-listing"}>Chairs</Link>
                </li>
                <li>
                    <Link href={"/shopping-cart "}>Shopping baskets</Link>
                </li>
                <li>
                    <Link href={"/"}>Product listing</Link>
                </li>
                <li>
                    <Link href={"/all-products"}>All Products</Link>
                </li>
                <li>
                    <Link href={"/"}>Cutlery</Link>
                </li>
            </ul>
        </div>
    );
}
