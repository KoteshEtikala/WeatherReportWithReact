// // 30-04-2024(Components)

////Class Based Components
// import React from "react"
// class App extends React.Component{
//     render(){
//         console.log(this);
//         return <h1>Class Based Component</h1>
//     }
    
// }
// export default App

////Function Based Components
// import React from "react"
// const App=()=>{
//     console.log(this)
//     return <h1>I am function based components</h1>
// }
// export default App

////  01-05-2024 (JSX)
// import React from "react"
// import JavaScriptXtention from "./JSX/JavaScriptXtention"

// const App=()=>{
//     return <JavaScriptXtention/>
// }
// export default App

// // 02-05-2024 (useState)
// import React from "react"
// import State from "./State/State"

// const App=()=>{
//     return <State/>
// }
// export default App


// //Props
// import React from 'react'
// import ParentProps from './Props/ParentProps'

// const App = () => {
//   return (
//     <>
//       <ParentProps    om="hyd"/>
//     </>
//   )
// }

// export default App


// // 06-05-2024 (child props)
// import React from 'react'
// import ParentProps from './Props/ParentProps'

// const App=()=>{
//     return <ParentProps/>
// }
// export default App

// // Default ChildProps
// import React from 'react'
// import ParentProps from './Props/ParentProps'

// const App=()=>{
//     return <ParentProps/>
// }
// export default App

// // 07-05-2024 (Prop Types)

// import React from 'react'
// import ParentProps from './Props/ParentProps'

// const App = () => {
//   return (
//     <>
//       <ParentProps/>
//     </>
//   )
// }

// export default App

// // Prop Drilling
// import React from 'react'
// import ParentDrilling from './Props/PropDrilling/ParentDrilling'

// const App = () =>{
//   return (
//     <>
//      <ParentDrilling/> 
//     </>
//   )
// }

// export default App

// // 08-05-2024 (useContext)
// import React from 'react'
// import ParentContext from './Context/ParentContext'
// import { Details,Fun,BioData} from './Context/GlobalContext'


// const App = () => {
//   let greet=()=>{
//     console.log("Orange Army")
//   }
//   let obj={
//     name:'om',
//     age:22

//   }
//   console.log(Details)
//   return (
//     <div>
//       <Details.Provider value="Kotesh">
//        <Fun.Provider value={greet}>
//         <BioData.Provider valu={obj}>
//           <ParentContext/>
//         </BioData.Provider>
//        </Fun.Provider>
//       </Details.Provider>
//     </div>
//   )
// }
// export default App

////10-05-2024  STYLES(InlineCss and GlobalCSS)
// import React from 'react'
// import InlineCss from './Styles/InlineCss'
// import GlobalCss from './Styles/GlobalCss'
// import "./styles.css"

// const App = () => {
//   return (
//     <>
//       <InlineCss/>
//       <GlobalCss/>
//     </>
//   )
// }

// export default App

////STYLES (MOduleCSS)
// import React from 'react'
// import Layout from './Styles/Module/Layout'
// import "./styles.css"

// const App = () => {
//   return (
//     <div>
//       <Layout/>
//     </div>
//   )
// }

// export default App

// // 11-05-2024 CSS (Layout Task)
// import React from 'react'
// import LayoutTask from './Styles/Module/LayoutTask/LayoutTask'

// const App = () => {
//   return (
//     <div>
//       <LayoutTask/>
//     </div>
//   )
// }

// export default App

// // 14-05-2024 (Conditional Rendering)

// import React from 'react'
// import CRendering from './ConditionalRendering/CRendering'

// const App = () => {
//   return (
//     <div>
//       <CRendering/>
//     </div>
//   )
// }

// export default App

// //  15-05-2024 (UnControlled Forms)
// import React from 'react'
// import UnControld from './Forms/UnControlledForms/UnControld'

// const App = () => {
//   return (
//     <div>
//       <UnControld/>
//     </div>
//   )
// }

// export default App

// //  16-05-2024 (Controlled Forms)
// import React from 'react'
// import ControlledForms from './Forms/ControlledForms/ControlledForms'

// const App = () => {
//   return (
//     <div>
//       <ControlledForms/>
//     </div>
//   )
// }

// export default App

// // 20-05-2024 Life Cycle Methods

// import React from 'react'
// import LifeCylce from './LifeCycleMethods/LifeCycle'

// const App = () => {
//   return (
//     <div>
//       <LifeCylce/>
//     </div>
//   )
// }

// export default App
// // 21-05-2024  Error Boundary Phase

// import React from 'react'
// import Names from './LifeCycleMethods/Names'
// import ErrorBoundary from './LifeCycleMethods/ErrorBoundary'

// const App = () => {
//   return (
//     <div>
//       <ErrorBoundary>
//       <Names val='Kanna'/>
//       </ErrorBoundary>

//       <ErrorBoundary>
//       <Names val='Teja'/>
//       </ErrorBoundary>
      
//       <ErrorBoundary>
//       <Names val='Uday'/>
//       </ErrorBoundary>
//     </div>
//   )
// }

// export default App

// // 24-05-2024  useEffect
// import React from 'react'
// import Effect from './UseEffect/Effect'

// const App = () => {
//   return (
//     <div>
//       <Effect/>
//     </div>
//   )
// }

// export default App

// // 25-05-2024   HOC
// import React from 'react'
// import ParentHoc from './Higher Order Component/ParentHoc'

// const App = () => {
//   return (
//     <div>
//       <ParentHoc/>
//     </div>
//   )
// }

// export default App

// // 27-05-2024 Axios
// import React from 'react'
// import Axios from './Axios/Axios'

// const App = () => {
//   return (
//     <div>
//       <Axios/>
//     </div>
//   )
// }

// export default App

// // 28-05-2024 Portals
// import React from 'react'
// import Portal from './Portals/Portal'
// const App = () => {
//   return (
//     <>
//       <Portal/>
//     </>
//   )
// }

// export default App

// // 29-05-2024  Pure Components
// import React from 'react'
// import Pure from './Pure Components/Pure'
// import Regular from './Pure Components/Regular'

// const App = () => {
//   return (
//     <div>
//       <Pure/>
//       <Regular/>
//     </div>
//   )
// }

// export default App

// // Memo Component
// import React, { useState } from 'react'
// import Normal from './Memo/Normal'
// import MemoComponent from './Memo/MemoComponent'

// const App = () => {
//   let[data,setData]=useState({
//     name:"Prabhas"
// })

// let handleData=()=>{
//   setData({name:"Prabhas"})
// }
//   return (
//     <div>
//       <Normal val={data.name}/>
//       <MemoComponent val={data.name}/>
//       <button onClick={handleData}>Click To Change The State</button>
//     </div>
//   )
// }

// export default App
// // 30-05-2024 Use Memo
// import React from 'react'
// import UseMemoComponent from './Use Memo/UseMemoComponent'

// const App = () => {
//   return (
//     <div>
//       <UseMemoComponent/>
//     </div>
//   )
// }

// export default App

// // Use Call Back Hook
// import React from 'react'
// import CallBackParent from './Use Call Back/CallBackParent'

// const App = () => {
//   return (
//     <>
//       <CallBackParent/>
//     </>
//   )
// }

// export default App

// // 01-06-2024  Router
// import React from 'react'
// import { BrowserRouter,Routes,Route } from 'react-router-dom'
// import Home from './Router/Home'
// import Profile from './Router/Profile'
// import About from './Router/About'
// import Contact from './Router/Contact'
// import Services from './Router/Services'
// import PageNotFound from './Router/PageNotFound'
// import  "./Router.css"
// import UpdateProfile from './Router/UpdateProfile'
// import DeleteProfile from './Router/DeleteProfile'
// import MainProfile from './Router/MainProfile'

// const App = () => {
//   return (
//     <BrowserRouter>
//             <Routes>
//               <Route path='/' element={<Home/>}></Route>
//                 <Route path='/profile' element={<MainProfile/>}>
//                   <Route index element={<Profile/>}/>
//                   <Route path='/profile/deleteprofile' element={<DeleteProfile/>}/>
//                   <Route path='/profile/updateprofile' element={<UpdateProfile/>}/>
//                 </Route>
//               <Route path='/about' element={<About/>}></Route>
//               <Route path='/contact' element={<Contact/>}></Route>
//               <Route path='/services' element={<Services/>}></Route>
//               <Route path='*' element={<PageNotFound/>}></Route>
//             </Routes>
//     </BrowserRouter>
//   )
// }

// export default App

// // 05-06-2024 Router V6
// import React from 'react'
// import { createBrowserRouter,RouterProvider } from 'react-router-dom'
// import Home from './Router/Home'
// import Profile from './Router/Profile'
// import About from './Router/About'
// import Contact from './Router/Contact'
// import Services from './Router/Services'
// import PageNotFound from './Router/PageNotFound'
// import  "./Router.css"
// import UpdateProfile from './Router/UpdateProfile'
// import DeleteProfile from './Router/DeleteProfile'
// import MainProfile from './Router/MainProfile'

// let rout=createBrowserRouter([
//   {
//     path:"/",
//     element:<Home/>
//   },
//   {
//     path:"/profile",
//     element:<MainProfile/>,
//     children:[
//       {
//         index:true,
//         element:<Profile/>
//       },
//       {
//         path:"/profile/updateprofile",
//         element:<UpdateProfile/>
//       },
//       {
//         path:"/profile/deleteprofile",
//         element:<DeleteProfile/>
//       }
//     ]
//   },
//   {
//     path:"/about",
//     element:<About/>
//   },
//   {
//     path:"/contact",
//     element:<Contact/>
//   },
//   {
//     path:"/services",
//     element:<Services/>
//   },
//   {
//     path:"*",
//     element:<PageNotFound/>
//   }
// ])
// const App = () => {
//   return (
//     <>
//       <RouterProvider router={rout}/>
//     </>
//   )
// }

// export default App


// ! React Projects
// // ToDo-App
// import React from 'react'
// import ToDo from './React Projects/ToDo-App/ToDo'
// import './ToDo.css'
// const App = () => {
//   return (
//     <>
//         <ToDo/>
//     </>
//   )
// }

// export default App

// // Crud Operations
// import React from 'react'
// import {createBrowserRouter,RouterProvider  } from "react-router-dom"
// import Home from './Crud/Home'
// import Edit from './Crud/Edit'
// import Create from './Crud/Create'
// import Read from './Crud/Read'
// import PageNotFound from './Crud/PageNotFound'

// let route=createBrowserRouter([
//   {
//     path:"/",
//     element:<Home/>
//   },
//   {
//     path:`/edit/:id`,
//     element:<Edit/>
//   },
//   {
//     path:"/create",
//     element:<Create/>
//   },
//   {
//     path:"/read/:id",
//     element:<Read/>
//   },
//   {
//     path:"*",
//     element:<PageNotFound/>
//   }
// ])
// const App = () => {
//   return (
//     <>
//       <RouterProvider router={route}/> 
//     </>
//   )
// }

// export default App




// //Final Mock
import React from 'react'
import FinalMock from './ReactFinalMock/FinalMock'
import Demo from './Demo/Demo'

const App = () => {
  return (
    <div>
        <FinalMock/>
    </div>
  )
}

export default App


























