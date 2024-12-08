import { Search, ShoppingCart, UserCircle, Menu } from "lucide-react";
import Navbar from "./navbar";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"; 

export default function Topbar() {
    return (
        <>
            
            <div className="flex justify-between items-center p-4 border-b-2 border-gray-300">
                
                <div className="flex items-center justify-between w-full md:hidden">
               
                    <h2 className="text-[24px] font-bold">Avion</h2>

                    
                    <div className="flex items-center gap-4">
                     
                        <Search className="cursor-pointer" />

                     
                        <Sheet>
                            <SheetTrigger>
                                <Menu className="cursor-pointer" />
                            </SheetTrigger>
                            <SheetContent side="right" className="w-3/4">
                              
                                <Navbar vertical={true} />
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>

              
                <div className="hidden md:flex items-center justify-between w-full">
               
                    <Search className="cursor-pointer" />

          
                    <h2 className="text-[24px] font-bold mx-auto">Avion</h2>

                 
                    <div className="flex gap-6">
                        <ShoppingCart />
                        <UserCircle />
                    </div>
                </div>
            </div>

           
            <div className="hidden md:block">
                <Navbar />
            </div>
        </>
    );
}
