import React from 'react'

const SectionLayout = (props,children) => {
  return (
    <div>
        <section className="bg-white dark:bg-gray-800">
            <div className="container px-6 py-8 mx-auto">
            <h2 className="text-4xl font-medium text-gray-800 dark:text-gray-100">{props.title}</h2>
            <p className="mt-4 text-gray-600 dark:text-gray-300">{props.description}</p>
            <div className="grid gap-6 mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {children}
            </div>
            </div>
        </section>
    </div>
  )
}

export default SectionLayout