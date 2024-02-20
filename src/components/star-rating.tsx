import React from "react"
import { StarIcon } from "@heroicons/react/24/solid"
import { StarIcon as StarEmpty } from "@heroicons/react/24/outline"

type StarRatingProps = {
  value?: number
}

const StarRating = ({value } : StarRatingProps ) => {
  const stars = []

  // Calculate the number of filled stars
  const filledStars = Math.floor(Number(value))

  // Create an array of star elements
  for (let i = 0; i < filledStars; i++) {
    stars.push(
      <span key={i} className="star">
        <StarIcon width={18} height={18} className="fill-yellow" />
      </span>
    )
  }

  // Fill the rest with empty stars
  const emptyStars = 5 - stars.length
  for (let i = 0; i < emptyStars; i++) {
    stars.push(
      <span key={`empty-${i}`} className="star">
        <StarEmpty width={18} height={18} className="stroke-yellow" />
      </span>
    )
  }

  return <div className="flex">{stars}</div>
}

export default StarRating
