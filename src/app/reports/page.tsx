"use client"

import Link from 'next/link'
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { PackageOpen, LogOut, Settings, User } from "lucide-react"
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    LineElement,
    PointElement,
    ArcElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js'
import { Bar, Line, Pie } from 'react-chartjs-2'

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    LineElement,
    PointElement,
    ArcElement,
    Title,
    Tooltip,
    Legend
)

const salesData = {
    labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
    datasets: [
        {
            label: 'Sales',
            data: [4000, 3000, 5000, 4500, 6000, 5500, 20000, 1000, 5000, 6000, 4500, 10000],
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
    ],
}

const categoryData = {
    labels: ['Polos', 'Jeans', 'Vestidos', 'Casacas'],
    datasets: [
        {
            data: [400, 300, 300, 200],
            backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
        },
    ],
}

const inventoryData = {
    labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
    datasets: [
        {
            label: 'In Stock',
            data: [500, 600, 750, 800, 900, 1000, 500, 600, 2000, 500, 100, 500],
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
        {
            label: 'Low Stock',
            data: [50, 40, 30, 20, 15, 10, 50, 20, 60, 70, 5, 10],
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
    ],
}

export default function ReportsPage() {
    const [activeTab, setActiveTab] = useState('sales')

    return (
        <div className="flex flex-col min-h-screen">
            <header className="px-4 lg:px-6 h-14 flex items-center">
                <Link className="flex items-center justify-center" href="#">
                    <PackageOpen className="h-6 w-6" />
                    <span className="sr-only">Acme Inc</span>
                </Link>
                <nav className="ml-auto flex items-center gap-4 sm:gap-6">
                    <Link className="text-sm font-medium hover:underline underline-offset-4" href="/">
                        Dashboard
                    </Link>
                    <Link className="text-sm font-medium hover:underline underline-offset-4" href="/inventory">
                        Inventory
                    </Link>
                    <Link className="text-sm font-medium hover:underline underline-offset-4" href="/orders">
                        Orders
                    </Link>
                    <Link className="text-sm font-medium hover:underline underline-offset-4" href="/reports">
                        Reports
                    </Link>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                                <Avatar className="h-8 w-8">
                                    <AvatarImage src="https://github.com/shadcn.png" alt="@johndoe" />
                                    <AvatarFallback>JD</AvatarFallback>
                                </Avatar>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-56" align="end" forceMount>
                            <DropdownMenuLabel className="font-normal">
                                <div className="flex flex-col space-y-1">
                                    <p className="text-sm font-medium leading-none">John Doe</p>
                                    <p className="text-xs leading-none text-muted-foreground">john@example.com</p>
                                </div>
                            </DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                                <User className="mr-2 h-4 w-4" />
                                <span>Profile</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Settings className="mr-2 h-4 w-4" />
                                <span>Settings</span>
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                                <LogOut className="mr-2 h-4 w-4" />
                                <span>Log out</span>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </nav>
            </header>
            <main className="flex-1 py-6 px-4 md:px-6">
                <div className="flex flex-col gap-4">
                    <h1 className="text-3xl font-bold">Reports</h1>
                    <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                        <TabsList>
                            <TabsTrigger value="sales">Sales</TabsTrigger>
                            <TabsTrigger value="inventory">Inventory</TabsTrigger>
                            <TabsTrigger value="categories">Categories</TabsTrigger>
                        </TabsList>
                        <TabsContent value="sales" className="space-y-4">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Monthly Sales</CardTitle>
                                    <CardDescription>Overview of sales performance over the last 6 months</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="h-[300px]">
                                        <Bar
                                            data={salesData}
                                            options={{
                                                responsive: true,
                                                maintainAspectRatio: false,
                                                scales: {
                                                    y: {
                                                        beginAtZero: true
                                                    }
                                                }
                                            }}
                                        />
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>
                        <TabsContent value="inventory" className="space-y-4">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Inventory Levels</CardTitle>
                                    <CardDescription>Track in-stock and low-stock items over time</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="h-[300px]">
                                        <Line
                                            data={inventoryData}
                                            options={{
                                                responsive: true,
                                                maintainAspectRatio: false,
                                                scales: {
                                                    y: {
                                                        beginAtZero: true
                                                    }
                                                }
                                            }}
                                        />
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>
                        <TabsContent value="categories" className="space-y-4">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Sales by Category</CardTitle>
                                    <CardDescription>Distribution of sales across product categories</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="h-[300px]">
                                        <Pie
                                            data={categoryData}
                                            options={{
                                                responsive: true,
                                                maintainAspectRatio: false,
                                            }}
                                        />
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>
                    </Tabs>
                </div>
            </main>
            <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
                <p className="text-xs text-muted-foreground">
                    &copy; {new Date().getFullYear()} Acme Inc. All rights reserved.
                </p>
                <nav className="sm:ml-auto flex gap-4 sm:gap-6">
                    <Link href="#" className="text-xs hover:underline underline-offset-4">
                        Terms of Service
                    </Link>
                    <Link href="#" className="text-xs hover:underline underline-offset-4">
                        Privacy
                    </Link>
                </nav>
            </footer>
        </div>
    )
}