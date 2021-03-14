import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 35%;
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
  const onClick = (event) => {
    props.onClick(event.target)
  }

  return (
    <Wrapper>
      {props.list.map((el) => (
        <Item key={el.id} id={el.id} data-name={el.name} onClick={onClick}>
          {el.name}
        </Item>
      ))}
    </Wrapper>
  )
}

List.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
}

export default List
