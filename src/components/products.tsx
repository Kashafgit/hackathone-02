import { PoundSterling } from "lucide-react"
import Image from "next/image"
export default function Products(){
    return(
        <>
        <div className="px-20 py-2">
            <h1 className="text-left text-gray-500 md:text-2xl">Our Popular Products</h1>
            <div className="flex flex-col md:flex-row justify-center gap-5 py-5">
                <div>
                    <Image src={"/Large.png"} alt="large-sofa" width={620} height={190} />
                    <div className="text-gray-600">
                            <h3 className="pt-4 text-[20px]">The Dandy Chair</h3>
                            <p className="text-[18px] flex pt-2">
                                <PoundSterling />250</p>
                        </div>
                </div>
                <div>
                    <Image src={"/Parent (3).png"} alt="large-sofa" width={300} height={190}/>
                    <div className="text-gray-600">
                            <h3 className="pt-4 text-[20px]">The Dandy Chair</h3>
                            <p className="text-[18px] flex pt-2">
                                <PoundSterling />250</p>
                        </div>
                </div>
                <div>
                    <Image src={"/Parent (4).png"} alt="large-sofa" width={300} height={190}/>
                    <div className="text-gray-600">
                            <h3 className="pt-4 text-[20px]">The Dandy Chair</h3>
                            <p className="text-[18px] flex pt-2">
                                <PoundSterling />250</p>
                        </div>
                </div>
                
            </div>
            <div className="flex items-center justify-center pt-10">
                <button className="px-4 py-2 bg-gray-300">View collection</button>
                </div>
        </div>
        
        </>
    )
}