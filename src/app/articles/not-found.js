'use client'

export default function ArticleNotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-gray-200 mb-2">404</h1>
        <h2 className="mb-4 text-3xl font-semibold text-gray-700">
          Article Not Found
        </h2>
        <p className="text-gray-500 text-lg">
          The article you're looking for might have been removed or relocated
        </p>
      </div>
    </div>
  )
} 