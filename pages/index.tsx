import Image from "next/image";
import { Inter } from "next/font/google";
import { CheckOut } from "@/components/checkout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center ${inter.className}`}
    >
      <nav className="flex h-16 w-full shadow-2xl items-center mb-8 justify-between px-8">
        <div className="flex items-center">
          <h1 className=" mr-8 text-2xl font-bold text-blue-500">HealthyU</h1>
        </div>
      </nav>
      <div className="relative flex flex-col w-full mx-auto items-center justify-center">
        
        <p className="relative z-20 text-8xl font-bold text-center">
          Welcome to <span className="text-blue-500">HealthyU</span>
        </p>
        <p className="text-3xl pt-4 z-20  text-muted-foreground">
          Helping <span className="text-blue-500 font-bold">families</span> build{" "}
          <span className="text-blue-500 font-bold">plans</span> to{" "}
          <span className="text-blue-500 font-bold">live</span> healthy lives.
        </p>
        <div className="py-4">
        <CheckOut />
        </div>
        <div className=" py-4 z-0">
          <img src="familybeach.png" className="w-full " />
        </div>
      </div>
      <div className="relative flex justify-center gap-x-4 mb-14 mt-2 z-0">
        <Card className="flex w-[320px] h-auto border-0 relative flex-col justify-center items-center animate-fade-in grid-rows-2 bg-gray-50 z-0">
          <CardHeader>
            <img src="heart.png" className="mx-auto" />
          </CardHeader>
          <CardTitle className="flex justify-center p-2 py-4">
            <p className="font-semibold text-2xl text-gray-700 text-center">
              Trained staff is here to guide your growth
            </p>
          </CardTitle>
          <CardContent className="flex justify-center p-2 py-4">
            <p className="text-center">
              We hire the best who are here to help you focus on achieving your goals.
            </p>
          </CardContent>
          
        </Card>
        <Card className="flex w-[320px] h-auto border-0  relative flex-col justify-center items-center animate-fade-in grid-rows-2 bg-gray-50">
          <CardHeader>
            <img src="office.png" className="mx-auto" />
          </CardHeader>
          <CardTitle className="flex justify-center p-2 py-4">
            <p className=" font-semibold text-2xl text-gray-700 text-center">
              State of the art products and facilities 
            </p>
          </CardTitle>
          <CardContent className="flex justify-center p-2 py-4">
            <p className="text-center">
              Our facilities are designed to keep you and your family comfortable.
            </p>
          </CardContent>
         
        </Card>
        <Card className="flex w-[320px] h-auto border-0 relative flex-col justify-center items-center animate-fade-in grid-rows-2 bg-gray-50">
          <CardHeader>
            <img src="running.png" className="mx-auto" />
          </CardHeader>
          <CardTitle className="flex justify-center p-2 py-4">
            <p className="text-2xl text-gray-700 text-center">
              Test, grow, and measure your progress
            </p>
          </CardTitle>
          <CardContent className="flex justify-center p-2 py-4">
            <p className="text-center">
              State of the art measurement tooling to help you track your progress. 
            </p>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
