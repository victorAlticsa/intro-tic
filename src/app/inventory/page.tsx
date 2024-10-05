"use client"
import { useState } from 'react'
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
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {
    // ChevronLeft,
    // ChevronRight,
    PackageOpen,
    SlidersHorizontal,
} from "lucide-react"
import Link from 'next/link'
import { Label } from '@/components/ui/label'

// prenda:
// - categoría (polo, short, pantalón, etc)
// - size (s, m, xl, etc)
// - price
// - discount
// - estado de venta (true o false)
// - fecha de creación
// - código de vendedor
// - código de prenda
// - fecha de venta
// - ubicación (sección a1, b2, a2, etc)
// - color (rojo, azul, etc)
// - característica (rasgado, agujereado, oversize, etc)


interface IClothe {
    id: string;
    groupId: string;
    sellerId?: string;

    category: string;
    size: string;
    price: number;
    discount: number;
    isSold: boolean;
    manufactureDate: Date;
    saleDate?: Date; // Opcional, ya que puede no haberse vendido aún
    address: string;
    color: string;
    feature: string;
}

const clothes: IClothe[] = [
    {
        id: "P001",
        groupId: "P54",
        sellerId: "V001",
        category: "polo",
        size: "m",
        price: 25.99,
        discount: 5,
        isSold: false,
        manufactureDate: new Date("2024-01-15"),
        address: "a1",
        color: "rojo",
        feature: "oversize"
    },
    {
        id: "P002",
        groupId: "P55",
        // sellerId: "V002",
        category: "pantalón",
        size: "xl",
        price: 45.99,
        discount: 10,
        isSold: true,
        manufactureDate: new Date("2024-02-20"),
        saleDate: new Date("2024-03-01"),
        address: "b2",
        color: "azul",
        feature: "rasgado"
    }
    // Puedes agregar más prendas aquí
];

// const inventoryItems = [
//     { id: 1, name: "Classic White T-Shirt", category: "T-Shirts", size: "M", color: "White", quantity: 50, price: 19.99 },
//     { id: 2, name: "Slim Fit Jeans", category: "Jeans", size: "32", color: "Blue", quantity: 30, price: 59.99 },
//     { id: 3, name: "Summer Floral Dress", category: "Dresses", size: "S", color: "Multicolor", quantity: 25, price: 39.99 },
//     { id: 4, name: "Leather Jacket", category: "Outerwear", size: "L", color: "Black", quantity: 15, price: 129.99 },
//     { id: 5, name: "Cotton Polo Shirt", category: "Shirts", size: "XL", color: "Navy", quantity: 40, price: 29.99 },
//     { id: 6, name: "High-Waisted Shorts", category: "Shorts", size: "M", color: "Denim", quantity: 35, price: 34.99 },
//     { id: 7, name: "Striped Sweater", category: "Sweaters", size: "M", color: "Gray/White", quantity: 20, price: 49.99 },
//     { id: 8, name: "Yoga Pants", category: "Activewear", size: "S", color: "Black", quantity: 45, price: 44.99 },
//     { id: 9, name: "Button-Up Shirt", category: "Shirts", size: "L", color: "White", quantity: 30, price: 39.99 },
//     { id: 10, name: "Maxi Skirt", category: "Skirts", size: "M", color: "Floral", quantity: 18, price: 54.99 },
// ]

// const itemsPerPage = 10
// const totalPages = 5 // This would typically be calculated based on the total number of items

export default function InventoryPage() {
    // const [currentPage, setCurrentPage] = useState(1)
    const [editingProduct, setEditingProduct] = useState<IClothe | null>(null)

    const handleEditClick = (product: IClothe) => {
        setEditingProduct(product)
    }

    const handleSaveEdit = () => {
        // Here you would typically update the product in your database
        console.log("Saving edited product:", editingProduct)
        setEditingProduct(null)
    }


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
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-bold">Inventory</h1>
                    <Button>
                        <PackageOpen className="mr-2 h-4 w-4" />
                        Add New Product
                    </Button>
                </div>
                <div className="flex flex-col md:flex-row gap-4 mb-6">
                    <div className="flex-1">
                        <Input placeholder="Search products..." />
                    </div>
                    <div className="flex gap-2">
                        <Select>
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Category" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all">All Categories</SelectItem>
                                <SelectItem value="t-shirts">T-Shirts</SelectItem>
                                <SelectItem value="jeans">Jeans</SelectItem>
                                <SelectItem value="dresses">Dresses</SelectItem>
                                <SelectItem value="outerwear">Outerwear</SelectItem>
                            </SelectContent>
                        </Select>
                        <Button variant="outline">
                            <SlidersHorizontal className="mr-2 h-4 w-4" />
                            More Filters
                        </Button>
                    </div>
                </div>
                <div className="border rounded-lg">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Group Id</TableHead>
                                <TableHead>Category</TableHead>
                                <TableHead>Size</TableHead>
                                <TableHead>Color</TableHead>
                                {/* <TableHead>Quantity</TableHead> */}
                                <TableHead>Price</TableHead>
                                <TableHead>Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {clothes.map((item: IClothe) => (
                                <TableRow key={item.id}>
                                    {/* <TableCell>{item.name}</TableCell> */}
                                    <TableCell>{item.id}</TableCell>
                                    <TableCell>{item.category}</TableCell>
                                    <TableCell>{item.size}</TableCell>
                                    <TableCell>{item.color}</TableCell>
                                    {/* <TableCell>{item.quantity}</TableCell> */}
                                    <TableCell>${item.price.toFixed(2)}</TableCell>
                                    <TableCell>
                                        {/* <Button variant="ghost" size="sm">
                                            Edit
                                        </Button> */}
                                        <Dialog>
                                            <DialogTrigger asChild>
                                                <Button variant="ghost" size="sm" onClick={() => handleEditClick(item)}>
                                                    Edit
                                                </Button>
                                            </DialogTrigger>
                                            <DialogContent className="sm:max-w-[425px]">
                                                <DialogHeader>
                                                    <DialogTitle>Edit Product</DialogTitle>
                                                    <DialogDescription>
                                                        Make changes to the product here. Click save when youre done.
                                                    </DialogDescription>
                                                </DialogHeader>
                                                <div className="grid gap-4 py-4">
                                                    <div className="grid grid-cols-4 items-center gap-4">
                                                        <Label htmlFor="name" className="text-right">
                                                            Name
                                                        </Label>
                                                        <Input
                                                            id="name"
                                                            // value={editingProduct?.name}
                                                            onChange={(e) => setEditingProduct(prev => ({ ...prev!, name: e.target.value }))}
                                                            className="col-span-3"
                                                        />
                                                    </div>
                                                    <div className="grid grid-cols-4 items-center gap-4">
                                                        <Label htmlFor="category" className="text-right">
                                                            Category
                                                        </Label>
                                                        <Input
                                                            id="category"
                                                            value={editingProduct?.category}
                                                            onChange={(e) => setEditingProduct(prev => ({ ...prev!, category: e.target.value }))}
                                                            className="col-span-3"
                                                        />
                                                    </div>
                                                    <div className="grid grid-cols-4 items-center gap-4">
                                                        <Label htmlFor="size" className="text-right">
                                                            Size
                                                        </Label>
                                                        <Input
                                                            id="size"
                                                            value={editingProduct?.size}
                                                            onChange={(e) => setEditingProduct(prev => ({ ...prev!, size: e.target.value }))}
                                                            className="col-span-3"
                                                        />
                                                    </div>
                                                    <div className="grid grid-cols-4 items-center gap-4">
                                                        <Label htmlFor="color" className="text-right">
                                                            Color
                                                        </Label>
                                                        <Input
                                                            id="color"
                                                            value={editingProduct?.color}
                                                            onChange={(e) => setEditingProduct(prev => ({ ...prev!, color: e.target.value }))}
                                                            className="col-span-3"
                                                        />
                                                    </div>
                                                    <div className="grid grid-cols-4 items-center gap-4">
                                                        <Label htmlFor="quantity" className="text-right">
                                                            Quantity
                                                        </Label>
                                                        <Input
                                                            id="quantity"
                                                            type="number"
                                                            // value={editingProduct?.quantity}
                                                            onChange={(e) => setEditingProduct(prev => ({ ...prev!, quantity: parseInt(e.target.value) }))}
                                                            className="col-span-3"
                                                        />
                                                    </div>
                                                    <div className="grid grid-cols-4 items-center gap-4">
                                                        <Label htmlFor="price" className="text-right">
                                                            Price
                                                        </Label>
                                                        <Input
                                                            id="price"
                                                            type="number"
                                                            step="0.01"
                                                            value={editingProduct?.price}
                                                            onChange={(e) => setEditingProduct(prev => ({ ...prev!, price: parseFloat(e.target.value) }))}
                                                            className="col-span-3"
                                                        />
                                                    </div>
                                                </div>
                                                <DialogFooter>
                                                    <Button type="submit" onClick={handleSaveEdit}>Save changes</Button>
                                                </DialogFooter>
                                            </DialogContent>
                                        </Dialog>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
                {/* <div className="flex justify-between items-center mt-4">
                    <div className="text-sm text-muted-foreground">
                        Showing {(currentPage - 1) * itemsPerPage + 1} to {Math.min(currentPage * itemsPerPage, totalPages * itemsPerPage)} of {totalPages * itemsPerPage} items
                    </div>
                    <div className="flex items-center space-x-2">
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                            disabled={currentPage === 1}
                        >
                            <ChevronLeft className="h-4 w-4" />
                            Previous
                        </Button>
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                            disabled={currentPage === totalPages}
                        >
                            Next
                            <ChevronRight className="h-4 w-4" />
                        </Button>
                    </div>
                </div> */}
            </main>
        </div>
    )
}