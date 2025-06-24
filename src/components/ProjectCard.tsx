type ProjectProps ={
    title: String;
    description: String;
}
export default function ProjectCard ({title,description}: ProjectProps){
    return (
        <div className="bg-white rounded-lg shadow-md p-4">
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p> 
        </div>
    )
}