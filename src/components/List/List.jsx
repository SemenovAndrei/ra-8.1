import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 25%;
  padding: 10px;
  border: 1px solid black;
`
const Item = styled.div`
  cursor: pointer;

  :not(:last-child)::after {
    content: '';
    display: block;
    width: 100%;
    height: 1px;
    margin: 10px 0;
    background-color: black;
  }
`

function List(props) {
  console.log(props)

  return (
    <Wrapper>
      {props.list.map((el) => (
        <Item>{el.name}</Item>
      ))}
    </Wrapper>
  )
}

List.propTypes = {}

export default List
