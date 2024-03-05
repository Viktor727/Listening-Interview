import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import viteLogo from '/vite.svg';

export function AppBar() {
    return (
        <div className="flex bg-secondary p-4 items-center">
            <img src={viteLogo} alt="Vite Logo" className="h-16" />
            <Avatar className="ml-auto">
                <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
        </div>
    );
}
