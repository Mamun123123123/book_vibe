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
    <div className="min-h-screen bg-base-200 p-6 md:p-10">

      <h2 className="text-4xl font-bold text-center mb-10 text-primary">
        📚 My Read Books
      </h2>

      {readBooks.length === 0 ? (
        <div className="text-center text-gray-500 text-lg">
          No books added yet 😢
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {readBooks.map(book => (
            <div
              key={book.bookId}
              className="card bg-base-100 shadow-xl hover:shadow-2xl transition duration-300 rounded-2xl overflow-hidden"
            >

              
              <figure className="h-46 p-4  overflow-hidden">
                <img
                  src={book.image}
                  alt={book.bookName}
                  className="w-full h-full rounded-2xl object-cover hover:scale-110 transition duration-500"
                />
              </figure>

              
              <div className="card-body">

                <h2 className="card-title text-lg font-bold">
                  {book.bookName}
                </h2>

                <p className="text-sm text-gray-500">
                  ✍️ {book.author}
                </p>

                <div className="flex flex-wrap gap-2 mt-2">
                  <span className="badge badge-outline">
                    📂 {book.category}
                  </span>

                  <span className="badge badge-primary text-white">
                    ⭐ {book.rating}
                  </span>
                </div>

                <div className="card-actions justify-end mt-4">
                  <button className="btn btn-sm btn-outline btn-primary rounded-full">
                    View Details
                  </button>
                </div>

              </div>
            </div>
          ))}

        </div>
      )}

    </div>
  )
}

export default ReadBooks