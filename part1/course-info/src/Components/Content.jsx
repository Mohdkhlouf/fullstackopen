import Part from "./Part";

const Content = (props) => {
  return (
    <>
      <Part courseContent={props.course.parts[0]} />
      <Part courseContent={props.course.parts[1]} />
      <Part courseContent={props.course.parts[2]} />
    </>
  );
};
export default Content;
