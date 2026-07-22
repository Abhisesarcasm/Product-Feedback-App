import { Star } from 'lucide-react'

function StarRating({ value, size = 15 }) {
    return (
        <div className="flex items-center gap-0.5">
            {[1, 2, 3, 4, 5].map((n) => {
                const filled = n <= Math.round(value)
                return (
                    <Star
                        key={n}
                        size={size}
                        fill={filled ? '#E8A23D' : 'none'}
                        color={filled ? '#E8A23D' : '#D8D6CC'}
                        strokeWidth={1.6}
                    />
                )
            })}
        </div>
    )
}

export default StarRating