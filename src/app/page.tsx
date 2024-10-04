"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  AlertCircle,
  ArrowUpRight,
  Box,
  DollarSign,
  PackageOpen,
  Search,
  ShoppingCart,
  TrendingUp,
  Users,
} from "lucide-react"

export default function HomeDashboard() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <PackageOpen className="h-6 w-6" />
          <span className="sr-only">Acme Inc</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
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
        </nav>
      </header>
      <main className="flex-1 p-4 md:p-6">
        <div className="grid gap-4 md:gap-8">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold">Inventory Dashboard</h1>
            <Button className="ml-auto" variant="outline">
              <Search className="mr-2 h-4 w-4" />
              Search Inventory
            </Button>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                <CardTitle className="text-sm font-medium">Total Products</CardTitle>
                <Box className="w-4 h-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1,234</div>
                <p className="text-xs text-muted-foreground">+10% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                <CardTitle className="text-sm font-medium">Total Value</CardTitle>
                <DollarSign className="w-4 h-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$45,231.89</div>
                <p className="text-xs text-muted-foreground">+20.1% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                <CardTitle className="text-sm font-medium">Low Stock Items</CardTitle>
                <AlertCircle className="w-4 h-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">23</div>
                <p className="text-xs text-muted-foreground">-5 from last week</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                <CardTitle className="text-sm font-medium">New Orders</CardTitle>
                <ShoppingCart className="w-4 h-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+573</div>
                <p className="text-xs text-muted-foreground">+201 from yesterday</p>
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Recent Activities</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <ArrowUpRight className="mr-2 h-4 w-4 text-muted-foreground" />
                    <div className="ml-2 space-y-1">
                      <p className="text-sm font-medium leading-none">New stock arrived: Summer T-shirts</p>
                      <p className="text-sm text-muted-foreground">2 hours ago</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Users className="mr-2 h-4 w-4 text-muted-foreground" />
                    <div className="ml-2 space-y-1">
                      <p className="text-sm font-medium leading-none">Inventory count completed: Jeans section</p>
                      <p className="text-sm text-muted-foreground">5 hours ago</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <TrendingUp className="mr-2 h-4 w-4 text-muted-foreground" />
                    <div className="ml-2 space-y-1">
                      <p className="text-sm font-medium leading-none">Sales report generated for Q2</p>
                      <p className="text-sm text-muted-foreground">1 day ago</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-4">
                <Button>
                  <PackageOpen className="mr-2 h-4 w-4" />
                  Add New Product
                </Button>
                <Button variant="outline">
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Process Orders
                </Button>
                <Button variant="outline">
                  <AlertCircle className="mr-2 h-4 w-4" />
                  View Low Stock Items
                </Button>
              </CardContent>
            </Card>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Low Stock Items</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Product Name</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Current Stock</TableHead>
                    <TableHead>Reorder Level</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Classic White T-Shirt</TableCell>
                    <TableCell>T-Shirts</TableCell>
                    <TableCell>15</TableCell>
                    <TableCell>20</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Slim Fit Jeans</TableCell>
                    <TableCell>Jeans</TableCell>
                    <TableCell>8</TableCell>
                    <TableCell>15</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Summer Floral Dress</TableCell>
                    <TableCell>Dresses</TableCell>
                    <TableCell>5</TableCell>
                    <TableCell>10</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}