import React from 'react'

const Title = ({ title }) => {
    return (
        <h1 className="h-16 place-content-center absolute left-1/4 top-10 bg-primary-300 text-5xl text-gray-700 mb-4 w-8/12 rounded-xl">{title}</h1>
    )
}

export default Title