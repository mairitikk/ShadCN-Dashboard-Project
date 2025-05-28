import AppAreaChart from "@/components/AppAreaChart"
import AppBarChart from "@/components/AppBarChart"
import AppPieChart from "@/components/AppPieChart"
import CardList from "@/components/CardList"
import TodoList from "@/components/TodoList"


const Homepage = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-4">
      <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-1 2xl:col-span-2"><AppBarChart></AppBarChart></div>
      <div className="bg-primary-foreground p-4 rounded-lg"><CardList title="Lates Transaction"></CardList></div>
      <div className="bg-primary-foreground p-4 rounded-lg"><AppPieChart></AppPieChart></div>
      <div className="bg-primary-foreground p-4 rounded-lg"><TodoList></TodoList></div>
      <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-1 2xl:col-span-2"><AppAreaChart></AppAreaChart></div>
      <div className="bg-primary-foreground p-4 rounded-lg"><CardList title="Popular Content"></CardList></div>
    </div>
  )
}
export default Homepage