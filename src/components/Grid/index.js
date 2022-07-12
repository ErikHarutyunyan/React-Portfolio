import React, {useEffect, useRef} from 'react'
// Components
import Card from "../Card"
// Styles
import {Wrapper, Contents, Title, Underline} from "./Grid.styles"

const Grid = ({projects, allCategories}) => {

  const newItems = projects.filter((item) => item.category === allCategories)


  const ref = useRef(null);
  useEffect(() =>{
    if(ref.current) {
      ref.current.style = "animation: animateOpacityImage 1s ease forwards;"
      setTimeout(() => {
        if(ref && ref.current ){
          ref.current.style = ""
        }
      }, 500);
    }
  },[newItems])

  return (
    <>
      {
        allCategories && allCategories !== 'all' 
        ? (
          <Wrapper>
            <Title>
              <h2>{allCategories} Projects</h2>
              <Underline />
            </Title>
            <Contents ref={ref}>
            {
              newItems.map((project) =>{
                const {id, title, img, url='/'} = project
                
                return <Card key={id} title={title} img={img} url={url}/>
              })
            }
            </Contents>
          </Wrapper>
          ) 
        : null
        }

    </>
  )
}

export default Grid
