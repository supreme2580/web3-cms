import { useRecoilValue } from "recoil"
import { Web3Storage } from "web3.storage"
import { name, description, thumbnail, thumbnailName, thumbnailType, content, reFetch } from "../atoms/contentAtom"
import connectContract from "../utils/connectContract"

export default function Publish() {
    const contentName = useRecoilValue(name)
    const contentDescription = useRecoilValue(description)
    const thumbNailName = useRecoilValue(thumbnailName)
    const contentThumbnail = useRecoilValue(thumbnail)
    const contentThumbnailType = useRecoilValue(thumbnailType)
    const cmsContent = useRecoilValue(content)
    async function uploadThumbnail() {
        document.getElementById("publish").innerHTML = "Publishing..."
        const blob = new Blob([contentThumbnail], { type: contentThumbnailType })
        const file = [new File([blob], thumbNailName)]
        const client = new Web3Storage({ token: process.env.NEXT_PUBLIC_WEB3STORAGE_TOKEN })
        return await client.put(file)
    }
    async function post() {
        const web3cmsContract = connectContract()
        if (thumbNailName != null && contentThumbnail != null && thumbnailType != null) {
            let cid = await uploadThumbnail()
            let url = "https://"+cid+".ipfs.w3s.link/"+thumbNailName
            if (cid) {
                console.log(cid)
                try {
                    let date = new Date()
                    if (web3cmsContract) {
                        document.getElementById("publish").innerHTML = "Publishing..."
                        const txn = await web3cmsContract.createNewBlogPost(contentName, contentDescription, url, cmsContent, date.toLocaleDateString())
                        let wait = txn.wait()
                        if (wait) {
                            setTimeout(() => {
                                document.getElementById("publish").innerHTML = "Published!"
                                setTimeout(() => {
                                    window.location.href = "/"
                                }, 10000);
                            }, 10000);
                        }
                        else {
                            document.getElementById("publish").innerHTML = "Publish"
                        }
                    }
                } catch (error) {
                    document.getElementById("publish").innerHTML = "Publish"
                    console.log(error)
                }
            }
            else {
                document.getElementById("publish").innerHTML = "Publish"
            }
        }
        else {
            try {
                let date = new Date()
                if (web3cmsContract) {
                    document.getElementById("publish").innerHTML = "Publishing..."
                    const txn = await web3cmsContract.createNewBlogPost(contentName, contentDescription, "", cmsContent, date.toLocaleDateString())
                    let wait = txn.wait()
                    if (wait) {
                        setTimeout(() => {
                            document.getElementById("publish").innerHTML = "Published!"
                            setTimeout(() => {
                                window.location.href = "/"
                            }, 10000);
                        }, 10000);
                    }
                    else {
                        document.getElementById("publish").innerHTML = "Publish Post"
                    }
                }
            } catch (error) {
                document.getElementById("publish").innerHTML = "Publish Post"
                console.log(error)
            }
        }
    }
    return(
        <div className="w-full fixed bottom-0 z-20 p-2.5 flex justify-end">
            <button className="bg-black text-white text-lg px-3 py-1.5 rounded-lg" onClick={() => post()} id="publish">Publish Post</button>
        </div>
    )
}