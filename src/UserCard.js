import PropTypes from "prop-types";

function UserCard({ user, editUser, deleteUser }) {
    return (
        <div className="card">
            <h1>
                {user.firstName} {user.lastName}
            </h1>
            <p>id: {user.id}</p>
            <b>{user.position}</b>
            <div>
                <button type="button" onClick={editUser}>Edit</button>
                <button type="button" onClick={deleteUser}>Delete</button>
            </div>
        </div >
    );
}

UserCard.propTypes = {
    user: PropTypes.shape({
        id: PropTypes.number.isRequired,
        firstName: PropTypes.string.isRequired,
        lastName: PropTypes.string,
        position: PropTypes.string.isRequired,
    }).isRequired,
    editUser: PropTypes.func.isRequired,
    deleteUser: PropTypes.func.isRequired,
};

UserCard.defaultProps = {
    editUser: () => { console.log("default edit") },
    deleteUser: () => { console.log("default delete") },
};

export default UserCard;