interface TitleProps {
    title: string
}
const Title = (props : TitleProps) => {
    return(
      <h1 className="text-3xl font-semibold">{props.title}</h1>
    )
}
export default Title;