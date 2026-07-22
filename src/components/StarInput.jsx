import { useState } from 'react'
import { Star } from 'lucide-react'

function StarInput({ value, onChange }) {
    const [hover, setHover] = useState(0)
    return (
        <div className="flex gap-1.5">
            {[1, 2, 3, 4, 5].map((n) => {
                const active = n <= (hover || value)
                return (
                    <button
                        key={n}
                        type="button"
                        aria-label={`Rate ${n} star`}
                        onClick={() => onChange(n)}
                        onMouseEnter={() => setHover(n)}
                        onMouseLeave={() => setHover(0)}
                        className={`bg-transparent border-none p-0.5 cursor-pointer leading-none transition-transform duration-150 ${active ? 'scale-110' : 'scale-100'}`}
                    >
                        <Star
                            size={30}
                            fill={active ? '#E8A23D' : 'none'}
                            color={active ? '#E8A23D' : '#D8D6CC'}
                            strokeWidth={1.4}
                        />
                    </button>
                )
            })}
        </div>
    )
}

export default StarInput