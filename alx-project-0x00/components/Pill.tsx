import { PillProps } from "@/interfaces";

const Pill: React.FC<PillProps> = ({title}) => {
  return (
    <div className="flex justify-center items-center bg-orange-600 px-3 w-auto h-[30px] rounded-full">
      <p className="text-[10px]">{title}</p>
    </div>
  )
}

export default Pill;