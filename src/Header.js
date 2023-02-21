import PropTypes from "prop-types";

function Header({ content, menu }) {
    return (
        <div className="header">
            <h1>{content.title}</h1>
            <span>{content.description}</span>
            <ul>
                {menu.map((item) => (
                    <li key={item.id}>
                        <a href={item.link}>{item.link}|{item.title}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

Header.propTypes = {
    menu: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            link: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired
        })
    ),
    content: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired
    }).isRequired,
}

Header.defaultProps = {
    content: {
        title: "defailt 1",
        description: "default 2",
    }
}


export default Header;