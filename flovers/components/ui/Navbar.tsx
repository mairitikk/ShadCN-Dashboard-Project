import Link from "next/link"
import { Moon } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { User } from "lucide-react"
import { Settings } from "lucide-react"
import { LogOut } from "lucide-react"



const Navbar = () => {
    return (
        <nav className='p-4 flex items-center justify-between'>
            {/*LEFT*/}
            collapseButton
            {/*RIGHT*/}
            <div className="flex items-center gap-4">
            <Link href="/">Dashboard</Link>
                <Moon></Moon>
               
                <DropdownMenu>
  <DropdownMenuTrigger> <Avatar>
  <AvatarImage src="https://avatars.githubusercontent.com/u/1486366" />
  <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    </DropdownMenuTrigger>
  <DropdownMenuContent sideOffset={10}>
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
                        <DropdownMenuItem>
                            <User className="h-[1.2rem] w-[1.2rem] mr-2"></User>
                            Profile
    </DropdownMenuItem>
                        <DropdownMenuItem>
                            <Settings className="h-[1.2rem] w-[1.2rem] mr-2"></Settings>
                            Settings
    </DropdownMenuItem>
                        <DropdownMenuItem>
                            <LogOut className="h-[1.2rem] w-[1.2rem] mr-2"></LogOut>
                            Logout</DropdownMenuItem>
    
  </DropdownMenuContent>
</DropdownMenu>



            </div>
        </nav>
    )
}
export default Navbar