import styled from 'styled-components'

export const AppContainer = styled.div`
  background-color: #223a5f;
  min-height: 100vh;
  font-family: 'Bree Serif';
  color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 0px;
`

export const AppTitlesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: solid 2px #ffffff;
  width: 70%;
  border-radius: 13px;
`

export const Titles = styled.div`
  margin: 20px;
`

export const Heading = styled.h1`
  font-size: 18px;
  margin: 4px;
  font-weight: 500;
`

export const ScoreContainer = styled.div`
  background-color: #ffffff;
  padding: 15px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px;
`

export const ScoreText = styled.p`
  font-size: 20px;
  color: #223a5f;
  margin: 0px;
  font-weight: 500;
`

export const Score = styled.p`
  color: #223a5f;
  font-size: 25px;
  margin: 0px;
  font-family: 'Roboto';
  font-weight: bold;
`

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 70%;
`

export const GameButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  list-style-type: none;
  width: 70%;
  margin: 10% 5%;
`

export const Image = styled.img`
  width: 100%;
`
export const PopupContainer = styled.div`
  align-self: flex-end;
`

export const CustomButton = styled.button`
  background-color: #ffffff;
  border-radius: 5px;
  color: #223a5f;
  padding: 10px 15px;
  border: none;
  outline: none;
  cursor: pointer;
  margin-top: 20px;
  font-family: 'Bree Serif';
  font-weight: 500;
`
export const PopupContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center
  align-items: center;
`
export const CloseButton = styled.button`
  align-self: flex-end;
  border: none;
  outline: none;
  cursor: pointer;
  margin-bottom: 20px;
`
export const RulesImageContainer = styled.div`
  width: 80%;
  align-self: center;
`
export const GameResultView = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10% 5%;
`

export const ResultContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Result = styled.div`
  width: 35%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ResultViewContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`
export const GameResultText = styled.p`
  font-size: 25px;
  margin: 4px;
`
