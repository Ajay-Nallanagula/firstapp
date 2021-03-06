import React from 'react'
import FakeText from '../FakeText'

const Category = (props)=>{
    const {history} = props
    return(
        <>
        <h1>Category Page</h1>
        <div><FakeText/></div>
        <div><button onClick={()=>history.push("/contact")}>Go to Contact</button></div>
        <div><button onClick={()=>history.push("/contact/someName")}>Go to Contact Param</button></div>
        <div><button onClick={()=>history.push("/about")}>Go to About</button></div>
        </>
    )
}

export default Category