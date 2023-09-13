import React from 'react'
import Skeleton  from 'react-loading-skeleton'
import Styled  from 'styled-components'


const MovieSkeleton = () => {
  return (
    <CardSkeleton>
        <Skeleton width={250} height={350} style={{flex:"1"}} count={5}/>
    </CardSkeleton>
  )
}
const CardSkeleton = Styled.div`
width:250px,
height:350px,
`

export default MovieSkeleton