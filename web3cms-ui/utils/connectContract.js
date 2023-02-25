import abiJson from "./Web3Cms.json"
import { ethers } from "ethers"

function connectContract() {
    const contractAddress = "0xc01C9CC1489E17bC33d9d2514724aDD7C30A529C"
    const contractAbi = abiJson.abi
    let web3cmsContract
    try {
        const { ethereum } = window
        if (ethereum) {
            const provider = new ethers.providers.Web3Provider(ethereum)
            const signer = provider.getSigner()
            web3cmsContract = new ethers.Contract(contractAddress, contractAbi, signer)
        }
        else {
            console.log("Ethereum object does not exist")
        }
    } catch (error) {
        console.log("Error: ", error)
    }
    return web3cmsContract
}

export default connectContract