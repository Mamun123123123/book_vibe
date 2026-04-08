import React, { useEffect, useState } from 'react'

const ReadBooks = () => {
  const [books, setBooks] = useState([])
  const [readIds, setReadIds] = useState([])

  useEffect(() => {
    fetch("/booksData.json")
      .then(res => res.json())
      .then(data => setBooks(data))

    const stored = JSON.parse(localStorage.getItem("readBooks")) || []
    setReadIds(stored)
  }, [])

  const readBooks = books.filter(book =>
    readIds.includes(book.bookId)
  )

  return (
    <div className="min-h-screen bg-base-200 px-4 sm:px-6 lg:px-10 py-8">
      
      <div className="max-w-7xl mx-auto">
        
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 text-primary">
          📚 My Read Books
        </h2>

        {readBooks.length === 0 ? (
          <div className="text-center text-gray-500 text-base sm:text-lg">
            No books added yet 😢
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            
            {readBooks.map(book => (
              <div
                key={book.bookId}
                className="card bg-base-100 shadow-md hover:shadow-xl transition rounded-2xl overflow-hidden"
              >

                <figure className="h-52 sm:h-56 overflow-hidden">
                  <img
                    src={book.image}
                    alt={book.bookName}
                    className="w-full h-full object-cover hover:scale-110 transition duration-500"
                  />
                </figure>

                <div className="card-body p-4 sm:p-5">

                  <h2 className="card-title text-base sm:text-lg font-bold">
                    {book.bookName}
                  </h2>

                  <p className="text-xs sm:text-sm text-gray-500">
                    ✍️ {book.author}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-2">
                    <span className="badge badge-outline text-xs">
                      📂 {book.category}
                    </span>

                    <span className="badge badge-primary text-white text-xs">
                      ⭐ {book.rating}
                    </span>
                  </div>

                  <div className="card-actions justify-end mt-4">
                    <button className="btn btn-sm btn-outline btn-primary rounded-full w-full sm:w-auto">
                      View Details
                    </button>
                  </div>

                </div>
              </div>
            ))}

          </div>
        )}

      </div>
    </div>
  )
}

export default ReadBooks