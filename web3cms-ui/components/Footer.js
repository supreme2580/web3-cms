import NigerianFlag from "./NigerianFlag"

const Footer = () => {
  return (
    <div className="w-full py-2.5 flex justify-center items-center space-x-2.5">
        <p className="font-semibold">Built by Nigerians</p>
        <NigerianFlag />
        <NigerianFlag />
        <NigerianFlag />
    </div>
  )
}

export default Footer