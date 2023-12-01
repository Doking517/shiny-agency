import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import colors from '../../utils/style/colors'

const CardLabel = styled.span`
  color: #5843e4;
  font-size: 22px;
  font-weight: bold;
  font-weight: 400;
  margin-left: 15px;
`
const CardTitle = styled.span`
  font-size: 25px;
  font-weight: 400;
  flex-shrink: 0;
  width: 210px;
  height: 29px;
  text-align: center;
`

const CardImg = styled.img`
  height: 148px;
  width: 148px;
  border-radius: 50%;
`
const CardWrapper = styled.div`
  padding: 32px;
  display: flex;
  gap: 35px;
  flex-direction: column;
  background-color: ${colors.backgroundLight};
  border-radius: 30px;
  width: 339px;
  height: 334px;
  transition: 200ms;
  &:hover {
    cursor: pointer;
    box-shadow: 2px 2px 2px 10px #e2e3e9;
  }
`

function Card({ label, title, picture }) {
  return (
    <CardWrapper>
      <CardLabel>{label}</CardLabel>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '34px',
        }}
      >
        <CardImg src={picture} alt="freelance" />
        <CardTitle>{title}</CardTitle>
      </div>
    </CardWrapper>
  )
}

Card.propTypes = {
  label: PropTypes.string,
  title: PropTypes.string.isRequired,
  picture: PropTypes.string,
}

export default Card
