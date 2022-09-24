import React from 'react'
import { MainContainer } from './style';

const Container = ({children, className}) => {
  return (
    <MainContainer className={className}>{children}</MainContainer>
  )
}

export default Container;