import Link from "next/link"
import { Moon } from "lucide-react"
import { AvatarFallback } from "@radix-ui/react-avatar"
import { Avatar } from "@radix-ui/react-avatar"
import { AvatarImage } from "@radix-ui/react-avatar"

const Navbar = () => {
    return (
        <nav className='p-4 flex items-center justify-between'>
            {/*LEFT*/}
            collapseButton
            {/*RIGHT*/}
            <div className="flex items-center gap-4">
            <Link href="/">Dashboard</Link>
                <Moon></Moon>
                <Avatar>
  <AvatarImage src="https://github.com/shadcn.png" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>


            </div>
        </nav>
    )
}
export default Navbar