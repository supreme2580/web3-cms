import { PhotographIcon } from "@heroicons/react/outline"
import { useRef, useState } from "react"
import dynamic from "next/dynamic"
import { useRecoilState } from "recoil"
import { name, description, thumbnail as postThumbnail, thumbnailName, thumbnailType } from "../atoms/contentAtom"
import Footer from "./Footer"
const CreationPlace = dynamic(() => import("./CreationPlace"), {
    ssr: false
})

export default function ContentCreator() {
    const filePickerRef = useRef(null)
    const [thumbnail, setThumbnail] = useState(null)
    const [contentName, setContentName] = useRecoilState(name)
    const [contentDescription, setContentDescription] = useRecoilState(description)
    const [contentThumbnail, setContentThumbnail] = useRecoilState(postThumbnail)
    const [thumbNailName, setThumbNailName] = useRecoilState(thumbnailName)
    const [thumbNailType, setThumbNailType] = useRecoilState(thumbnailType)

    function getThumbnail(e) {
        const reader = new FileReader()
        let file = e.target.files[0]
        let type = file.type
        let name = file.name
        if (file) {
            reader.readAsDataURL(file)
        }
        reader.onload = (readEvent) => {
            if (type == "image/jpeg" || type == "image/jpg" || type == "image/png" || type == "image/webp") {
                setThumbnail(readEvent.target.result)
                setThumbNailName(name)
                setContentThumbnail(file)
                setThumbNailType(type)
            }
        }
    }
    return(
        <div className="flex-1 p-2.5 w-full">
            <div className="flex flex-col items-center justify-center space-y-4">
                <div className="max-w-2xl">
                    <h4 className="text-lg font-semibold">Name of post</h4>
                    <input
                        type="text"
                        placeholder="Enter name of post"
                        className="w-full sm:w-[400px] lg:w-[600px] border p-2.5 mt-2"
                        onChange={e => setContentName(e.target.value)}
                    />
                </div>
                <div className="max-w-2xl">
                    <h4 className="text-lg font-semibold">Description of post</h4>
                    <textarea
                        className="w-full h-32 sm:w-[400px] lg:w-[600px] border p-2.5 mt-2"
                        maxLength={500}
                        onChange={e => setContentDescription(e.target.value)}
                    />
                </div>
                <div>
                    {
                        thumbnail ? <img
                            src={thumbnail}
                            className="w-full sm:w-[400px] lg:w-[600px] h-64 object-contain cursor-pointer"
                            onClick={() => setThumbnail(null)}
                        /> : (
                            <div className="w-full sm:w-[400px] lg:w-[600px] h-40 bg-gray-200 flex flex-col items-center justify-center hover:cursor-pointer"
                                onClick={() => filePickerRef.current.click()}>
                                <PhotographIcon className="w-10 h-10" />
                                <h4 className="text-lg font-semibold">Enter post thumbnail</h4>
                                <input type="file" ref={filePickerRef} onChange={e => getThumbnail(e)} hidden />
                            </div>
                        )
                    }
                </div>
                <div className="max-w-2xl">
                    <h4 className="text-lg font-semibold">Create post</h4>
                    <div className="w-full sm:w-[400px] lg:w-[600px]">
                        <CreationPlace />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}