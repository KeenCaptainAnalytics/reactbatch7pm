import React from 'react'

const BlogList = () => {
    let blogArr=[{id:1,name:"fooditem", url:"https://easymeals.qodeinteractive.com/wp-content/uploads/2020/05/h4-img-2.jpg",min:5,ease:"supereasy"},
        {id:2,name:"fooditem", url:"https://easymeals.qodeinteractive.com/wp-content/uploads/2020/05/h4-img-2.jpg",min:5,ease:"supereasy"},
        {id:3,name:"fooditem", url:"https://easymeals.qodeinteractive.com/wp-content/uploads/2020/05/h4-img-2.jpg",min:5,ease:"supereasy"},
        {id:4,name:"fooditem", url:"https://easymeals.qodeinteractive.com/wp-content/uploads/2020/05/h4-img-2.jpg",min:5,ease:"supereasy"},
        {id:5,name:"fooditem", url:"https://easymeals.qodeinteractive.com/wp-content/uploads/2020/05/h4-img-2.jpg",min:5,ease:"supereasy"},
        {id:6,name:"fooditem", url:"https://easymeals.qodeinteractive.com/wp-content/uploads/2020/05/h4-img-2.jpg",min:5,ease:"supereasy"}
    ]
  return (
    <div style={{display:'flex', flexWrap:"wrap", justifyContent:"space-evenly", gap: "50px", width:"80vw" ,margin:"auto"}}>
        {
            blogArr.map((ele)=>{
               return  <div style={{width:"300px"}}>
                    <img width={300} src={ele.url} alt="picturefooditem"/>
                    <h3>{ele.min}mins {ele.ease}</h3>
                    <h2>{ele.name}</h2>
                </div>
            })
        }

    </div>
  )
}

export default BlogList
