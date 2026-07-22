import { useState } from 'react'
import { Star, User, LogOut } from 'lucide-react'

import Navbar from '../components/Navbar'
import ProductCard from '../components/ProductCard'
import ReviewModal from '../components/ReviewModal'


const PRODUCTS = [
    {
        id: 1,
        name: "Aria Wireless Earbuds",
        desc: "Crisp sound, all-day battery.",
        qty: "128 in stock",
        rating: 4.5,
        reviews: 212,
        image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&q=80",
    },
    {
        id: 2,
        name: "Horizon Steel Watch",
        desc: "Minimal dial, sapphire glass.",
        qty: "42 in stock",
        rating: 4.8,
        reviews: 96,
        image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=500&q=80",
    },
    {
        id: 3,
        name: "Cove Canvas Backpack",
        desc: "Water-resistant, 20L capacity.",
        qty: "76 in stock",
        rating: 4.2,
        reviews: 154,
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&q=80",
    },
    {
        id: 4,
        name: "Lumen Desk Lamp",
        desc: "Warm-to-cool adjustable glow.",
        qty: "9 in stock",
        rating: 4.6,
        reviews: 63,
        image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500&q=80",
    },
    {
        id: 5,
        name: "Pulse Fitness Band",
        desc: "Heart rate, sleep, and steps.",
        qty: "0 in stock",
        rating: 3.9,
        reviews: 301,
        image: "https://images.unsplash.com/photo-1576243345690-4e4b79b63288?w=500&q=80",
    },
    {
        id: 6,
        name: "Drift Ceramic Mug",
        desc: "Double-walled, keeps heat longer.",
        qty: "215 in stock",
        rating: 4.7,
        reviews: 88,
        image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=500&q=80",
    },
]


function CustomerSide() {
    const [selected, setSelected] = useState(null)

    return (
        <>
            <div className="main-wrapper flex flex-col items-center w-full min-h-screen px-4 md:px-8 py-8 bg-[#FAF9F5]">
                <Navbar userName="Alok" />

                <main className="w-full max-w-280 mt-6">
                    <div className="mb-5">
                        <h1 className="font-heading text-2xl font-semibold text-[#1B1B1F] m-0 mb-1 tracking-tight">
                            Browse products
                        </h1>
                        <p className="font-body text-[13.5px] text-[#807E75] m-0">
                            Select a product to leave a rating and review.
                        </p>
                    </div>

                    <div className="grid gap-4.5" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(230px, 1fr))' }}>
                        {PRODUCTS.map((p) => (
                            <ProductCard key={p.id} product={p} onSelect={setSelected} />
                        ))}
                    </div>
                </main>

                {selected && <ReviewModal product={selected} onClose={() => setSelected(null)} />}
            </div>
        </>
    )
}

export default CustomerSide