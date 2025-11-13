import PropTypes from 'prop-types';

const Greeting = (props) => {
  console.log('props', props);
  const {name, age, isTeacher} = props;

  //const teacherText = isTeacher ? '' : 'not';

  return (
    <>
      <div>
        Greetings, {name}. You are {age} years old. You are
        {isTeacher ? '' : ' not'} a teacher.
      </div>
    </>
  );
};

Greeting.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  isTeacher: PropTypes.bool,
};

export default Greeting;
