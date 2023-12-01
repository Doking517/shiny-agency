import React from 'react'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import ErrorImage from '../../assets/ErrorImage.png'

const StyledWrapper = styled.div`
  margin-top: 25px;
  margin-left: 65px;
  margin-right: 62px;
  width: 1313px;
  height: 824px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 35px;
  align-items: center;
  background-color: ${colors.backgroundLight};
`
const ErrorHeader = styled.h1`
  text-align: center;
  font-size: 31px;
  font-weight: 700;
  flex-shrink: 0;
  color: ${colors.lightTextColor};
`

function Error() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <StyledWrapper>
        <ErrorHeader>Oups ...</ErrorHeader>
        <img src={ErrorImage} alt="error" width={875} height={476} />
        <ErrorHeader>Il semblerait qu’il y ait un problème</ErrorHeader>
      </StyledWrapper>
    </div>
  )
}

export default Error
