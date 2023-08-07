import Button from "../button/button"

const SectionTitle = (props) => {
  return (
    <div className="section__title--text">
      <h2>{props.title}</h2>
      <p>{props.subTitle}</p>
    </div>
  )
}

export default SectionTitle