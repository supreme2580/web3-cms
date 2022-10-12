import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function Navbar() {
    return(
        <div className="w-ful bg-black text-white h-16 px-5 flex justify-between items-center">
            <h3 className="text-xl font-semibold">Web3cms</h3>
            <ConnectButton />
        </div>
    )
}