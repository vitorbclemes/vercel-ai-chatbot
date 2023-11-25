'use client';
import {useCompletion} from 'ai/react'

export default function Home() {
  const {
    completion,
    input,
    stop,
    isLoading,
    handleInputChange,
    handleSubmit,
  } = useCompletion({
    api: '/api/completion',
  });
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-900 to-blue-900">
      <div className="max-w-md w-full p-8 bg-gray-800 rounded-lg shadow-lg">
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            value={input}
            onChange={handleInputChange}
            placeholder="Ask a question"
            className="w-full px-4 py-2 rounded-md bg-gray-700 focus:outline-none focus:ring focus:border-blue-300 text-white"
          />
          <button onClick={stop} className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            Stop
          </button>
          <button
            disabled={isLoading}
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            {isLoading ? 'Loading...' : 'Send'}
          </button>
        </form>

        <div className="mt-8">
          <p className="text-white text-lg font-semibold">AI Result:</p>
          <div className="text-blue-300">{completion}</div>
        </div>
      </div>
    </div>
  )
}
