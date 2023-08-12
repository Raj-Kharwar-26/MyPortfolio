import { Col } from "react-bootstrap";


export const ProjectCard = ({ title, description, imgUrl, redirectlink }) => {
  function redirecter(){
    window.location.href=redirectlink;
  }
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx" onClick={redirecter}>
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}
