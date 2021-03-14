import React from 'react'
import PropTypes from 'prop-types'
import useJsonFetch from '../../hooks/useJsonFetch'
import ShowSpinner from '../ShowSpinner/ShowSpinner'
import styled from 'styled-components'

const Element = styled.div`
  width: 50%;
`

const Wrapper = styled.div`
  width: 100%;
  padding: 10px;
  border: 1px solid black;
`
const ImgWrapper = styled.div`
  height: 350px;
  margin-bottom: 10px;
  overflow: hidden;
`
const Img = styled.img`
  display: block;
  width: 100%;
  height: 350px;
  object-fit: cover;

  :hover {
    transform: scale(1.1);

    transition: transform 0.4s linear;
  }
`
const Item = styled.div`
  width: 100%;

  :not(:last-child)::after {
    content: '';
    display: block;
    width: 100%;
    height: 1px;
    margin: 10px 0;
    background-color: black;
  }
`

function Details(props) {
  const [loading, error, data] = useJsonFetch(
    `${process.env.REACT_APP_URL_DATA}/${props.info.id}.json`
  )
  return (
    <Element>
      {loading && <ShowSpinner />}
      {error && error.message}
      {!loading && data && (
        <Wrapper key={data.id}>
          <ImgWrapper>
            <Img src={data.avatar} alt="avatar" />
          </ImgWrapper>
          <Item>{data.name}</Item>
          {Object.keys(data.details).map((key, index) => (
            <Item key={index}>{key + ': ' + data.details[key]}</Item>
          ))}
        </Wrapper>
      )}
    </Element>
  )
}

Details.propTypes = {
  info: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }),
}

export default Details
