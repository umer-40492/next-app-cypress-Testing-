import Image from 'next/image'
import React from 'react'
import { FaStar } from "react-icons/fa";

function Card({data}) {
  return (
        <div data-testid={`card-${data.id}`} className="shadow-lg mb-12 w-full h-fit rounded-3xl" > 
          <Image className="rounded-t-3xl w-full h-1/3" src={data.image} alt="" width={100} height={100} />
          <div className="py-6 px-4">
          <h2 className="font-bold">{data.name}</h2>
          <div className="flex gap-10 mt-4">
            <div className="flex gap-2 items-baseline">
            <FaStar className="text-gray-500"/>
            <p className="text-gray-500 font-semibold">{data.rating}</p>
            </div>
            <div className="text-gray-500 font-semibold"> 
              {data.cookTimeMinutes} - {data.prepTimeMinutes} min
            </div>
          </div>
          </div>
        </div>
  )
}

export default Card