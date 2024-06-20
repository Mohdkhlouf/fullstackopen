const Part = (props) => {
  console.log("part", props);
  return (
    <>
      <div>
        <p>
          <b>Part:</b> {props.courseContent.name}
        </p>
        <p>
          <b>Number of exercises:</b> {props.courseContent.exercises}
        </p>
      </div>
    </>
  );
};

export default Part;
