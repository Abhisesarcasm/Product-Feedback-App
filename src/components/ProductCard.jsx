import StarRating from "./StarRating"


function ProductCard({ product, onSelect }) {
    const outOfStock = product.qty.startsWith('0')

    return (
        <div className="group bg-white border border-[#E6E4DC] rounded-2xl overflow-hidden flex flex-col transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
            <div className="overflow-hidden h-40 bg-[#F1EFE6]">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
            </div>

            <div className="p-4 pb-4 flex flex-col gap-2 flex-1">
                <h3 className="font-heading text-[15.5px] font-semibold text-[#1B1B1F] m-0 tracking-tight">
                    {product.name}
                </h3>
                <p className="font-body text-[13px] text-[#807E75] m-0 leading-snug">
                    {product.desc}
                </p>

                <div className="flex items-center gap-1.5 mt-0.5">
                    <StarRating value={product.rating} />
                    <span className="font-body text-[12.5px] text-[#807E75]">
                        {product.rating.toFixed(1)} ({product.reviews})
                    </span>
                </div>

                <span className={`font-body text-xs font-medium ${outOfStock ? 'text-[#B4432E]' : 'text-[#4C7A5C]'}`}>
                    {outOfStock ? 'Out of stock' : product.qty}
                </span>

                <button
                    onClick={() => onSelect(product)}
                    className="mt-auto w-full py-2.5 rounded-lg border-none bg-[#1F6F5C] text-[#F4F2EA] font-body font-medium text-[13.5px] cursor-pointer transition-colors duration-150 hover:bg-[#195A4A]"
                >
                    Select
                </button>
            </div>
        </div>
    )
}


export default ProductCard