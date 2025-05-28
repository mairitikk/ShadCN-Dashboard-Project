import { ScrollArea } from "@radix-ui/react-scroll-area"
import { Card } from "./ui/card"
import { Checkbox } from "@radix-ui/react-checkbox"

const TodoList = () => {
    return (
        <div className="">
          Calender
            {/*LIST*/}
            <ScrollArea className="max-h-[400px] mt-4 overflow-y-auto">
                {/*LIST ITEM*/}
                <Card>
                    <div className="flex items-center gap-4">
                        <Checkbox></Checkbox>
                    </div>
                </Card>
            </ScrollArea>
        </div>
    )
}
export default TodoList