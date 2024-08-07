type Props = {content: string}

const Button = ({content}:Props) => {
  return (
    <>
      <button>{content}</button>
    </>
  )
}

export default Button;