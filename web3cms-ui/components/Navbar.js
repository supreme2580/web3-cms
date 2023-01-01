import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function Navbar() {
    return(
        <div className="flex items-center justify-between h-16 px-5 text-white bg-black w-ful">
            <h3 className="text-xl font-semibold">Web3cms</h3>
            <div className="p-0.5 rounded-md ring-2 ring-blue">
                <ConnectButton />
            </div>
        </div>
    )
}