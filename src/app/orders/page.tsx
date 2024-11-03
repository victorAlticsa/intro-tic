"use client"

import { useState } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {
    PackageOpen,
    LogOut,
    Settings,
    User,
    Search,
    Filter,
    ChevronDown,
} from "lucide-react"

// Mock data for orders
const orders = [
    { id: '1', customer: 'John Doe', date: '2023-06-01', total: 150.00, status: 'Completed' },
    { id: '2', customer: 'Jane Smith', date: '2023-06-02', total: 89.99, status: 'Processing' },
    { id: '3', customer: 'Bob Johnson', date: '2023-06-03', total: 249.50, status: 'Shipped' },
    { id: '4', customer: 'Alice Brown', date: '2023-06-04', total: 75.25, status: 'Pending' },
    { id: '5', customer: 'Charlie Davis', date: '2023-06-05', total: 199.99, status: 'Completed' },
]

export default function OrdersPage() {
    const [selectedOrder, setSelectedOrder] = useState<any>(null)

    const handleOrderClick = (order: any) => {
        setSelectedOrder(order)
    }

    return (
        <div className="flex flex-col min-h-screen">
            <header className="px-4 lg:px-6 h-14 flex items-center">
                <Link className="flex items-center justify-center" href="#">
                    <PackageOpen className="h-6 w-6" />
                    <span className="sr-only">Acme Inc</span>
                </Link>
                <nav className="ml-auto flex items-center gap-4 sm:gap-6">
                    <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
                        Dashboard
                    </Link>
                    <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
                        Inventory
                    </Link>
                    <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
                        Orders
                    </Link>
                    <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
                        Reports
                    </Link>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                                <Avatar className="h-8 w-8">
                                    <AvatarImage src="/avatars/01.png" alt="@johndoe" />
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
                    <h1 className="text-3xl font-bold">Orders</h1>
                    <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-2">
                            <Input placeholder="Search orders..." className="w-[300px]" />
                            <Button variant="outline" size="icon">
                                <Search className="h-4 w-4" />
                                <span className="sr-only">Search</span>
                            </Button>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Select>
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="Filter by status" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">All Statuses</SelectItem>
                                    <SelectItem value="completed">Completed</SelectItem>
                                    <SelectItem value="processing">Processing</SelectItem>
                                    <SelectItem value="shipped">Shipped</SelectItem>
                                    <SelectItem value="pending">Pending</SelectItem>
                                </SelectContent>
                            </Select>
                            <Button variant="outline">
                                <Filter className="mr-2 h-4 w-4" />
                                More Filters
                            </Button>
                        </div>
                    </div>
                    <Card>
                        <CardHeader>
                            <CardTitle>Recent Orders</CardTitle>
                            <CardDescription>Manage and view order details</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Order ID</TableHead>
                                        <TableHead>Customer</TableHead>
                                        <TableHead>Date</TableHead>
                                        <TableHead>Total</TableHead>
                                        <TableHead>Status</TableHead>
                                        <TableHead>Actions</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {orders.map((order) => (
                                        <TableRow key={order.id}>
                                            <TableCell>{order.id}</TableCell>
                                            <TableCell>{order.customer}</TableCell>
                                            <TableCell>{order.date}</TableCell>
                                            <TableCell>${order.total.toFixed(2)}</TableCell>
                                            <TableCell>
                                                <Badge variant={order.status === 'Completed' ? 'default' : 'secondary'}>
                                                    {order.status}
                                                </Badge>
                                            </TableCell>
                                            <TableCell>
                                                <Dialog>
                                                    <DialogTrigger asChild>
                                                        <Button variant="ghost" onClick={() => handleOrderClick(order)}>View Details</Button>
                                                    </DialogTrigger>
                                                    <DialogContent>
                                                        <DialogHeader>
                                                            <DialogTitle>Order Details</DialogTitle>
                                                            <DialogDescription>
                                                                Order ID: {selectedOrder?.id as any}
                                                            </DialogDescription>
                                                        </DialogHeader>
                                                        <div className="grid gap-4 py-4">
                                                            <div className="grid grid-cols-4 items-center gap-4">
                                                                <span className="font-medium">Customer:</span>
                                                                <span className="col-span-3">{selectedOrder?.customer}</span>
                                                            </div>
                                                            <div className="grid grid-cols-4 items-center gap-4">
                                                                <span className="font-medium">Date:</span>
                                                                <span className="col-span-3">{selectedOrder?.date}</span>
                                                            </div>
                                                            <div className="grid grid-cols-4 items-center gap-4">
                                                                <span className="font-medium">Total:</span>
                                                                <span className="col-span-3">${selectedOrder?.total.toFixed(2)}</span>
                                                            </div>
                                                            <div className="grid grid-cols-4 items-center gap-4">
                                                                <span className="font-medium">Status:</span>
                                                                <span className="col-span-3">
                                                                    <Badge variant={selectedOrder?.status === 'Completed' ? 'default' : 'secondary'}>
                                                                        {selectedOrder?.status}
                                                                    </Badge>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </DialogContent>
                                                </Dialog>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
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