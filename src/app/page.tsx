import { frontendApi } from "@/Api/FrontendApi";
import Carousal from "./_components/Carousal";
import Catagory from "./_components/_Pages/Catagory";
import Featured from "./_components/_Pages/Featured";

  const getHome= async()=>{
  const response = await frontendApi.getHomepage();
  return response.data.data
}




export default async function Home() {

  const response =  await getHome()
// console.log(response.category)

  // console.log("this is get category",response)
  return (
    <div  >
    <Carousal data={response.carousal} />
    <Catagory category={response.category} />
    <Featured featured={response.featured}/>
    </div>
  );
}
