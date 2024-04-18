import {Image, Buttons, ButtonListItem} from './styledComponents'

const ButtonItem = props => {
  const {buttonDetails, onClickButton} = props
  const {id, imageUrl} = buttonDetails

  const onClickChoice = () => onClickButton(id)

  console.log(`${id.toLowerCase()}Button`)

  return (
    <ButtonListItem>
      <Buttons
        onClick={onClickChoice}
        data-testid={`${id.toLowerCase()}Button`}
        type="button"
      >
        <Image src={imageUrl} alt={id} />
      </Buttons>
    </ButtonListItem>
  )
}

export default ButtonItem
