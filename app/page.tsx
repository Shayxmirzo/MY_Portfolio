import FirstPart from "./components/FirstPart/firstPart"
import Secondpart from "./components/SecondPart/Secondpart"
import ThirfPart from "./components/ThirdPart/ThirfPart"
import ForthPart from "./components/FourthPart/ForthPart"


function page() {
  return (
    <div className="bg-black">
      <FirstPart />
      <Secondpart/>
      <ThirfPart />
      <hr className="text-[green] mt-8" />
      <ForthPart />

    </div>
  )
}

export default page