import { useState } from 'react'
import StarInput from './StarInput'

function ReviewModal({ product, onClose }) {
    const [rating, setRating] = useState(0)
    const [text, setText] = useState('')
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = () => {
        if (rating === 0) return
        setSubmitted(true)
        setTimeout(() => {
            onClose()
        }, 1100)
    }

    return (
        <div
            onClick={onClose}
            className="fixed inset-0 bg-black/45 flex items-center justify-center z-50 p-4 animate-[fadeIn_150ms_ease]"
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className="bg-white rounded-2xl w-full max-w-105 p-6 shadow-2xl animate-[slideUp_200ms_ease]"
            >
                {submitted ? (
                    <div className="text-center py-6">
                        <div className="w-11 h-11 mx-auto mb-3 rounded-full bg-[#E1F0E5] flex items-center justify-center text-[#2F6B41] text-xl">
                            ✓
                        </div>
                        <p className="font-heading font-semibold text-base m-0">Review submitted</p>
                        <p className="font-body text-[13px] text-[#807E75] mt-1">
                            Thanks for the feedback.
                        </p>
                    </div>
                ) : (
                    <>
                        <div className="flex gap-3 items-center mb-4.5">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-12 h-12 rounded-lg object-cover"
                            />
                            <div>
                                <p className="font-heading font-semibold text-[15px] m-0">{product.name}</p>
                                <p className="font-body text-[12.5px] text-[#807E75] m-0">Write a review</p>
                            </div>
                        </div>

                        <p className="font-body text-[12.5px] font-medium text-[#5C5B54] mb-2">
                            Your rating
                        </p>
                        <StarInput value={rating} onChange={setRating} />

                        <p className="font-body text-[12.5px] font-medium text-[#5C5B54] mt-4.5 mb-2">
                            Your review
                        </p>
                        <textarea
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            placeholder="Share detail on quality, fit, or how you used it..."
                            rows={4}
                            className="w-full border border-[#E6E4DC] rounded-[10px] px-3 py-2.5 font-body text-[13.5px] text-[#1B1B1F] resize-none outline-none box-border focus:border-[#1F6F5C]"
                        />

                        <div className="flex gap-2.5 mt-5">
                            <button
                                onClick={onClose}
                                className="flex-1 py-2.5 rounded-lg border border-[#E6E4DC] bg-transparent font-body font-medium text-[13.5px] text-[#5C5B54] cursor-pointer"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleSubmit}
                                disabled={rating === 0}
                                className={`flex-1 py-2.5 rounded-lg border-none text-[#F4F2EA] font-body font-medium text-[13.5px] ${rating === 0 ? 'bg-[#B9CFC4] cursor-not-allowed' : 'bg-[#1F6F5C] cursor-pointer'}`}
                            >
                                Submit review
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}

export default ReviewModal