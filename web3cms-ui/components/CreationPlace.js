import ReactQuill from "react-quill"
import 'react-quill/dist/quill.snow.css'
import EditorToolbar, { modules, formats } from "./EditorToolbar"
import { useRecoilState } from "recoil"
import { content } from "../atoms/contentAtom"

export default function CreationPlace() {
    const [cmsContent, setCmsContent] = useRecoilState(content)
    const handleChange = value => {
        setCmsContent(value);
    };
    return(
        <div className="border">
            <EditorToolbar />
            <ReactQuill
                theme="snow"
                value={cmsContent}
                onChange={handleChange}
                placeholder={"Write something awesome..."}
                modules={modules}
                formats={formats}
                className="h-64"
            />
        </div>
    )
}