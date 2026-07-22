import { useState } from 'react'
import Navbar from '../components/Navbar'
import StarRating from '../components/StarRating'

const REVIEWS = [
    { id: 1, product: 'Aria Wireless Earbuds', customer: 'Alok Barik', rating: 5, text: 'Great sound quality, battery lasts all day.', date: 'Jul 18, 2026' },
    { id: 2, product: 'Horizon Steel Watch', customer: 'Aman Gupta', rating: 4, text: 'Looks premium, strap could be softer.', date: 'Jul 17, 2026' },
    { id: 3, product: 'Cove Canvas Backpack', customer: 'Neha Iyer', rating: 2, text: 'Zipper broke within a week of use.', date: 'Jul 16, 2026' },
    { id: 4, product: 'Lumen Desk Lamp', customer: 'Karan Mehta', rating: 5, text: 'Perfect brightness levels, love the design.', date: 'Jul 15, 2026' },
    { id: 5, product: 'Pulse Fitness Band', customer: 'Sara Khan', rating: 1, text: 'Heart rate readings are wildly inaccurate.', date: 'Jul 14, 2026' },
    { id: 6, product: 'Drift Ceramic Mug', customer: 'Vikram Rao', rating: 4, text: 'Keeps coffee hot for hours, sturdy build.', date: 'Jul 13, 2026' },
    { id: 7, product: 'Aria Wireless Earbuds', customer: 'Priya Nair', rating: 3, text: 'Good sound but connection drops sometimes.', date: 'Jul 12, 2026' },
]

const RATING_FILTERS = ['All', 5, 4, 3, 2, 1]

function SummaryCard({ label, value, sub }) {
    return (
        <div className="bg-green-100 border border-[#585858] rounded-2xl p-5 md:flex-1 md:min-w-37.5">
            <p className="font-body text-[12.5px] text-[#000000] m-0 mb-2">{label}</p>
            <p className="font-heading text-2xl font-semibold text-[#1B1B1F] m-0 tracking-tight">{value}</p>
            {sub && <p className="font-body text-xs text-[#000000] m-0 mt-1">{sub}</p>}
        </div>
    )
}

function AdminSide() {
    const [filter, setFilter] = useState('All')

    const filtered = filter === 'All' ? REVIEWS : REVIEWS.filter((r) => r.rating === filter)
    const totalReviews = REVIEWS.length
    const avgRating = (REVIEWS.reduce((sum, r) => sum + r.rating, 0) / totalReviews).toFixed(1)
    const lowRatingCount = REVIEWS.filter((r) => r.rating <= 2).length

    return (
        <div className="flex flex-col items-center w-full min-h-screen bg-[#FAF9F5]">
            <Navbar userName="Admin" />

            <main className="w-full max-w-280 px-4 md:px-8 py-8">
                <div className="mb-6">
                    <h1 className="font-heading text-2xl font-semibold text-[#1B1B1F] m-0 mb-1 tracking-tight">
                        Feedback overview
                    </h1>
                    <p className="font-body text-[13.5px] text-[#807E75] m-0">
                        Track ratings and reviews across all products.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:flex md:flex-wrap gap-4 mb-8">
                    <SummaryCard label="Total reviews" value={totalReviews} />
                    <SummaryCard label="Average rating" value={avgRating} sub="out of 5.0" />
                    <SummaryCard label="Low ratings (≤2★)" value={lowRatingCount} sub="needs attention" />
                    <SummaryCard label="This week" value="7" sub="new submissions" />
                </div>

                <div className="flex items-center gap-2 mb-4 flex-wrap">
                    {RATING_FILTERS.map((f) => (
                        <button
                            key={f}
                            onClick={() => setFilter(f)}
                            className={`font-body text-[13px] font-medium px-3.5 py-1.5 rounded-lg border cursor-pointer transition-colors duration-150 ${filter === f
                                ? 'bg-[#1F6F5C] border-[#1F6F5C] text-[#F4F2EA]'
                                : 'bg-white border-[#E6E4DC] text-[#5C5B54] hover:bg-[#F1EFE6]'
                                }`}
                        >
                            {f === 'All' ? 'All' : `${f}★`}
                        </button>
                    ))}
                </div>

                <div className="bg-white border border-[#E6E4DC] rounded-2xl overflow-hidden">
                    <div className="hidden md:grid grid-cols-[1.4fr_1fr_0.9fr_2fr_0.8fr] gap-4 px-5 py-3 border-b border-[#E6E4DC] bg-[#FAF9F5]">
                        <span className="font-body text-xs font-medium text-[#807E75]">Product</span>
                        <span className="font-body text-xs font-medium text-[#807E75]">Customer</span>
                        <span className="font-body text-xs font-medium text-[#807E75]">Rating</span>
                        <span className="font-body text-xs font-medium text-[#807E75]">Review</span>
                        <span className="font-body text-xs font-medium text-[#807E75]">Date</span>
                    </div>

                    {filtered.map((r) => (
                        <div
                            key={r.id}
                            className="flex flex-col md:grid md:grid-cols-[1.4fr_1fr_0.9fr_2fr_0.8fr] gap-1.5 md:gap-4 px-5 py-4 border-b border-[#E6E4DC] last:border-b-0"
                        >
                            <span className="font-body text-[13.5px] font-medium text-[#1B1B1F]">{r.product}</span>
                            <span className="font-body text-[13px] text-[#5C5B54]">{r.customer}</span>
                            <StarRating value={r.rating} size={13} />
                            <span className="font-body text-[13px] text-[#5C5B54] leading-snug">{r.text}</span>
                            <span className="font-body text-xs text-[#807E75]">{r.date}</span>
                        </div>
                    ))}

                    {filtered.length === 0 && (
                        <div className="px-5 py-10 text-center">
                            <p className="font-body text-[13.5px] text-[#807E75] m-0">No reviews match this filter.</p>
                        </div>
                    )}
                </div>
            </main>
        </div>
    )
}

export default AdminSide