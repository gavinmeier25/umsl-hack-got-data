import React from 'react'
import styled from 'styled-components'


export const HeadShotRounded = styled.img`
  width: auto;
  height: auto;
  max-width: 150px;
  padding: auto;
  margin: auto;
  border-radius: 150px;
`
export const HeadShotSquared = styled.img`
  width: auto;
  height: auto;
  max-width: 150px;
  padding: auto;
  margin: auto;
`

export default props =>  {
    if (!props.rounded) {
        return (<HeadShotSquared src={props.headShot} /> )     
    }
    else {
        return (<HeadShotRounded src={props.headShot} /> )
    }

} 

