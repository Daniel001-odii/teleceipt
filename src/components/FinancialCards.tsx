import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"

const FinancialCards = () => {
    return (
        <div className="relative w-full max-w-[400px] h-[300px] sm:w-[400px] sm:h-[300px] min-w-[260px] min-h-[220px]">
            {/* Welcome Back Card */}
            <Card className="absolute top-0 right-0 w-80 bg-white/95 backdrop-blur-sm shadow-lg">
                <CardHeader className="pb-2">
                    <CardTitle className="text-sm text-muted-foreground">Welcome Back!</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="flex items-center justify-between">
                        <span className="text-lg font-semibold">My Balance</span>
                        <span className="text-sm text-green-600 font-medium">+10%</span>
                    </div>
                    <p className="text-2xl font-bold text-primary">$3,444 USD</p>
                </CardContent>
            </Card>

            {/* Main Financial Overview Card */}
            <Card className="absolute top-16 left-0 w-80 bg-white/95 backdrop-blur-sm shadow-lg">
                <CardHeader className="pb-2">
                    <CardTitle className="text-sm">Financial Overview</CardTitle>
                    <div className="flex gap-2 text-xs">
                        <button className="px-2 py-1 bg-primary text-white rounded">Daily</button>
                        <button className="px-2 py-1 text-muted-foreground hover:bg-muted rounded">Weekly</button>
                        <button className="px-2 py-1 text-muted-foreground hover:bg-muted rounded">Yearly</button>
                    </div>
                </CardHeader>
                <CardContent className="space-y-3">
                    <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Income</span>
                        <span className="font-semibold text-green-600">$40,000</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Expense</span>
                        <span className="font-semibold text-red-600">$1,369</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Deposit</span>
                        <span className="font-semibold text-green-600">$10,000</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Disbursements</span>
                        <span className="font-semibold text-red-600">$5,000</span>
                    </div>
                </CardContent>
            </Card>

        </div>
    )
}

export default FinancialCards
