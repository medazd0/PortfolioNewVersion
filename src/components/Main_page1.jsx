import React from 'react'

function Main_page1() {
  return (
    <main className="flex-1 bg-white dark:bg-gray-900 text-black dark:text-white p-6 m-5 rounded-lg">
      <section id="home" className="mb-8">
        <h1 className="text-3xl font-bold">Welcome to my portfolio</h1>
        <p className="text-gray-600 dark:text-gray-400">
          This is the home section.
        </p>
      </section>

      <section id="about" className="mb-8">
        <h2 className="text-2xl font-bold">About Me</h2>
        <p>Developer & DevOps enthusiast with Spring + React + Docker.</p>
      </section>

      {/* Add more sections like Projects, Contact */}
    </main>
  )
}

export default Main_page1