import React from 'react'

const About = () => {
    return (
        <>
            <section className="bg-blue-100 dark:bg-gray-900 h-screen">
                <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                    <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">what we do?</h2>
                        <p className="mb-4">We are a leading innovator in traffic management solutions. We specialize in revolutionizing the way traffic flows, ensuring safer, more efficient, and sustainable transportation networks. Our comprehensive suite of cutting-edge technologies and services is designed to tackle the complex challenges of modern urban mobility.</p>
                        <p>Our mission is to create cities where people can move freely and confidently, while reducing the negative impacts of congestion and pollution.</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-8">
                        <img className="w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png" alt="office content 1" />
                        <img className="mt-4 w-full lg:mt-10 rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png" alt="office content 2" />
                    </div>
                </div>
            </section >
        </>
    )
}

export default About