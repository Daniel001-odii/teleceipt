import { Button } from "./ui/button"

const AppHeader = () => {
    return (
        <div className="p-5">
            <header className="flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-primary">Teleceipt</span>
                </div>

            </header>
        </div>
    )
}

export default AppHeader;