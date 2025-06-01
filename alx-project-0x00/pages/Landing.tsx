import Card from "@/components/Card"

const Landing: React.FC =  () => {
  return (
    <div className="flex flex-col h-screen justify-center items-center text-4xl font-semibold">
      <h1 className="text-xl font-extralight">Landing Page</h1>
      <Card />
    </div>
  )
}
export default Landing