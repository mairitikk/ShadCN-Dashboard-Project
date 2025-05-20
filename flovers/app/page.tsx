import { Button } from "../components/ui/button"
import {CirclePlus} from "lucide-react"

const Homepage = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <Button variant="outline" size="lg">
        <CirclePlus />
        Vajuta siia</Button>
    </div>
  )
}
export default Homepage