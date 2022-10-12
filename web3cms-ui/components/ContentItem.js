export default function ContentItem({ title, id }) {
    return(
        <div className="p-2.5 hover:cursor-pointer hover:bg-gray-200/75" onClick={() => window.location.href = `/preview/${id}`}>
            <h3 className="text-base">{title}</h3>
        </div>
    )
}