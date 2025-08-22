import Image from "next/image"; 
import Carousal from "./_components/Carousal";
import Catagory from "./_components/_Pages/Catagory";
import Featured from "./_components/_Pages/Featured";


export default function Home() {
  return (
    <div className="" >
    <Carousal/>
    <Catagory/>
    <Featured/>
    </div>
  );
}
