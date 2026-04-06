import React, { use } from 'react'

const booksPromise = fetch("/booksData.json").then(res => res.json())

const AllBooks = () => {
  const books = use(booksPromise)

  return (
    <div className="px-4 md:px-10 py-10">
      
      {/* Title */}
      <h2 className='font-bold text-3xl md:text-4xl text-center mb-10'>
        📚 All Books
      </h2>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">

        {books.map((item, index) => (
          <div 
            key={index}
            className="card bg-base-100 w-full max-w-sm shadow-lg hover:shadow-2xl transition duration-300 rounded-2xl"
          >

            {/* Image */}
            <figure className="px-4 pt-4">
              <img
                src={item.image}
                alt={item.bookName}
                className="rounded-xl h-52 w-full object-cover"
              />
            </figure>

            {/* Card Body */}
            <div className="card-body">

              {/* Tags */}
              <div className='flex flex-wrap gap-2 mb-2'>
                {item.tags.map((tag, i) => (
                  <div key={i} className="badge badge-success badge-outline text-xs">
                    {tag}
                  </div>
                ))}
              </div>

              {/* Title */}
              <h2 className="card-title text-lg font-semibold">
                {item.bookName}
              </h2>

              {/* Author */}
              <p className="text-gray-500 text-sm">
                ✍️ {item.author}
              </p>

              {/* Bottom Info */}
              <div className="card-actions flex justify-between items-center border-t border-dashed pt-4 mt-2">

                <div className="badge badge-outline">
                  {item.category}
                </div>

                <div className="badge badge-primary text-white">
                   {item.rating} ⭐
                </div>

              </div>
            </div>
          </div>
        ))}

      </div>
    </div>
  )
}

export default AllBooks