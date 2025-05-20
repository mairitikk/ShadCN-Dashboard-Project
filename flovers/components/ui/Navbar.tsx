"use client"
import Link from "next/link"
import { Moon, Sun } from "lucide-react"
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
import { Button } from "./button"
import { useTheme } from "next-themes"




const Navbar = () => {
    const { theme, setTheme } = useTheme();
    return (
        <nav className='p-4 flex items-center justify-between'>
            {/*LEFT*/}
            collapseButton
            {/*RIGHT*/}
            <div className="flex items-center gap-4">
            <Link href="/">Dashboard</Link>
            {/*Theme Menu*/}
                 <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
               
                <DropdownMenu>
                        {/*USER MENU*/}
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
                        <DropdownMenuItem variant="destructive">
                            <LogOut className="h-[1.2rem] w-[1.2rem] mr-2"></LogOut>
                            Logout</DropdownMenuItem>
    
  </DropdownMenuContent>
</DropdownMenu>



            </div>
        </nav>
    )
}
export default Navbar