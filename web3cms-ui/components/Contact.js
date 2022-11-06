import { ChatAlt2Icon } from "@heroicons/react/outline"

const Contact = () => {
  return (
    <div className="w-full fixed bottom-0 z-20 p-2.5 flex justify-end">
        <button className="bg-black text-white text-lg px-3 py-1.5 rounded-lg" id="publish"><ChatAlt2Icon className="w-12 h-12 text-white" /></button>
    </div>
  )
}

export default Contact