import React from "react"
import {RouterProvider, Route, createRoutesFromElements, createBrowserRouter} from 'react-router-dom'
import HomeLayout from './app/components/HomeLayout'
import Popular from './app/components/subs/Popular'
import Politics from './app/components/subs/Politics'
import Livestreamfail from './app/components/subs/LivestreamFail'
import Funny from './app/components/subs/Funny'
import Television from './app/components/subs/Television'
import Pics from './app/components/subs/Pics'
import Nostupidquestions from './app/components/subs/Nostupidquestions'
import Gym from './app/components/subs/Gym'
import Dogs from './app/components/subs/Dogs'
import Xqcow from './app/components/subs/Xqcow'
import Joerogan from './app/components/subs/Joerogan'
import ErrorElement from './app/components/ErrorElement'

const router = createBrowserRouter(createRoutesFromElements(

  <Route path="/" element={<HomeLayout/>}>
    <Route index element={<Popular />} />
    <Route path="politics" element={<Politics />} />
    <Route path="livestreamfail" element={<Livestreamfail />} />
    <Route path="funny" element={<Funny />} />
    <Route path="television" element={<Television />} />
    <Route path="pics" element={<Pics />} />
    <Route path="nostupidquestions" element={<Nostupidquestions />} />
    <Route path="gym" element={<Gym />} />
    <Route path="videos" element={<Dogs />} />
    <Route path="xqcow" element={<Xqcow />} />
    <Route path="joerogan" element={<Joerogan />} />
  

  
    <Route path='*' element={<ErrorElement/>}/>

  </Route>
))

export default function App() {


  return (
    <>
    <RouterProvider router={router} />
    
    </>
  )
}