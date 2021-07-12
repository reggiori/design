interface Props {
  name: string
}
export default ({ name }: Props) => {
  return <span className="material-icons-outlined">{name}</span>
}
