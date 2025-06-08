import React from 'react'
import Layout from '@/components/layouts/Layout'

const Home = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Welcome to Splash App</h1>
        <p className="text-gray-700 mb-6">
          This is a sample application built with Next.js and Tailwind CSS. Explore the features and enjoy the experience!
        </p>
        <p className="text-gray-600">
          For more information, check out the documentation or contact us.
        </p>
      </div>
    </Layout>
  )
}

export default Home;
