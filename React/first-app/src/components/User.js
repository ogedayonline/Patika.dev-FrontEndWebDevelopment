import PropTypes from "prop-types";

function User({ name, surname, age, isLogged, friends, adress }) {
  return (
    <>
      <h1>{isLogged ? `${name} ${surname} ${age}` : "Giriş Yapılmadı."}</h1>
      {adress.title} {adress.zip}
      {friends.map((friend) => (
        <div key={friend.id}>{friend.name}</div>
      ))}
    </>
  );
}

User.propTypes = {
  name: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired,
  age: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  isLogged: PropTypes.bool.isRequired,
  friends: PropTypes.array,
  adress: PropTypes.shape({
    title: PropTypes.string,
    zip: PropTypes.number,
  }),
};

User.defaultProps = {
  isLogged: false,
};

export default User;
