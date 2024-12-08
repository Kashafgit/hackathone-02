import Link from "next/link";

export default function Navbar({ vertical = false }) {
    return (
        <div className={`p-4 ${vertical ? "flex flex-col gap-4" : "flex justify-center items-center"}`}>
            <ul className={`flex ${vertical ? "flex-col" : "gap-6"} text-center text-gray-400`}>
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
        </div>
    );
}
