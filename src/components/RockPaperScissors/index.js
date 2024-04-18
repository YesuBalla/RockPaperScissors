import {Component} from 'react'
import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'
import ButtonItem from '../ButtonItem'

import 'reactjs-popup/dist/index.css'
import './index.css'

import {
  AppContainer,
  AppTitlesContainer,
  Titles,
  Heading,
  ScoreContainer,
  ScoreText,
  Score,
  ContentContainer,
  GameButtonsContainer,
  Image,
  //   PopupContainer,
  CustomButton,
  //   PopupContent,
  //   CloseButton,
  //   RulesImageContainer,
  GameResultView,
  ResultContainer,
  Result,
  ResultViewContentContainer,
  GameResultText,
} from './styledComponents'

class RockPaperScissors extends Component {
  state = {
    score: 0,
    resultView: false,
    randomChoiceUrl: '',
    yourChoiceUrl: '',
    gameResult: '',
  }

  onClickButton = id => {
    const {choicesList} = this.props
    const randomChoice =
      choicesList[Math.floor(Math.random() * choicesList.length)]
    const yourChoice = choicesList.filter(eachItem => eachItem.id === id)

    this.setState(() => ({
      randomChoiceUrl: randomChoice.imageUrl,
      yourChoiceUrl: yourChoice[0].imageUrl,
    }))
    if (yourChoice[0].id === randomChoice.id) {
      this.setState(prevState => ({
        gameResult: 'IT IS DRAW',
        resultView: !prevState.resultView,
      }))
    } else if (yourChoice[0].id === 'SCISSORS' && randomChoice.id === 'PAPER') {
      this.setState(prevState => ({
        score: prevState.score + 1,
        gameResult: 'YOU WON',
        resultView: !prevState.resultView,
      }))
    } else if (yourChoice[0].id === 'PAPER' && randomChoice.id === 'ROCK') {
      this.setState(prevState => ({
        score: prevState.score + 1,
        gameResult: 'YOU WON',
        resultView: !prevState.resultView,
      }))
    } else if (yourChoice[0].id === 'ROCK' && randomChoice.id === 'SCISSORS') {
      this.setState(prevState => ({
        score: prevState.score + 1,
        gameResult: 'YOU WON',
        resultView: !prevState.resultView,
      }))
    } else {
      this.setState(prevState => ({
        score: prevState.score - 1,
        gameResult: 'YOU LOSE',
        resultView: !prevState.resultView,
      }))
    }
  }

  onPlayAgain = () =>
    this.setState(prevState => ({resultView: !prevState.resultView}))

  render() {
    const {choicesList} = this.props
    const {
      score,
      resultView,
      yourChoiceUrl,
      randomChoiceUrl,
      gameResult,
    } = this.state

    return (
      <AppContainer>
        <AppTitlesContainer>
          <Titles>
            <Heading>
              Rock <br /> Paper <br /> Scissors
            </Heading>
          </Titles>
          <ScoreContainer>
            <ScoreText>Score</ScoreText>
            <Score>{score}</Score>
          </ScoreContainer>
        </AppTitlesContainer>
        <ContentContainer>
          {!resultView && (
            <GameButtonsContainer>
              {choicesList.map(eachItem => (
                <ButtonItem
                  buttonDetails={eachItem}
                  onClickButton={this.onClickButton}
                  key={eachItem.id}
                />
              ))}
            </GameButtonsContainer>
          )}
          {resultView && (
            <GameResultView>
              <ResultContainer>
                <Result>
                  <Heading>YOU</Heading>
                  <Image src={yourChoiceUrl} alt="your choice" />
                </Result>
                <Result>
                  <Heading>OPPONENT</Heading>
                  <Image src={randomChoiceUrl} alt="opponent choice" />
                </Result>
              </ResultContainer>
              <ResultViewContentContainer>
                <GameResultText>{gameResult}</GameResultText>
                <CustomButton onClick={this.onPlayAgain} type="button">
                  PLAY AGAIN
                </CustomButton>
              </ResultViewContentContainer>
            </GameResultView>
          )}
          {/* <PopupContainer>
            <Popup
              modal
              trigger={<CustomButton type="button">Rules</CustomButton>}
            >
              {close => (
                <PopupContent>
                  <CloseButton
                    type="button"
                    onClick={() => close()}
                    aria-label="closeButton"
                  >
                    <RiCloseLine size={25} />
                  </CloseButton>
                  <RulesImageContainer>
                    <Image
                      src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                      alt="rules"
                    />
                  </RulesImageContainer>
                </PopupContent>
              )}
            </Popup>
          </PopupContainer> */}
          <div className="popup-container">
            <Popup
              modal
              trigger={
                <button type="button" className="trigger-button">
                  Rules
                </button>
              }
            >
              {close => (
                <div className="popup-content">
                  <button
                    type="button"
                    className="close-button"
                    onClick={() => close()}
                    aria-label="closeButton"
                  >
                    <RiCloseLine size={25} />
                  </button>
                  <div className="rules-image-container">
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                      alt="rules"
                      className="rules-image"
                    />
                  </div>
                </div>
              )}
            </Popup>
          </div>
        </ContentContainer>
      </AppContainer>
    )
  }
}

export default RockPaperScissors
