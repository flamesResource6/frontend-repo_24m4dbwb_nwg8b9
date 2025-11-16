import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from '../components/Layout'
import Home from './Home'
import Creators from './Creators'
import Details from './Details'
import ComingSoon from './ComingSoon'

export default function Shell() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/creators" element={<Creators />} />
        <Route path="/details" element={<Details />} />
        <Route path="/gallery" element={<ComingSoon title="Gallery" />} />
        <Route path="/community" element={<ComingSoon title="Community" />} />
        <Route path="/shop" element={<ComingSoon title="Shop" />} />
      </Routes>
    </Layout>
  )
}
