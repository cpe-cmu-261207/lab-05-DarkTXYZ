type DoneTaskProps = {
    id: number;
    name: string;
}

const DoneTask = ({ id, name}: DoneTaskProps) => {
    return (
        <div className="flex justify-between h-8 items-center py-6 border-b">
            <span className="text-2xl">{name}</span>
        </div>
    )
}

export default DoneTask
