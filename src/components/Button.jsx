import PropTypes from 'prop-types'
const Button = ({ children, style }) => {
    return (
        <>
            <button
                className={`${style?.hidden ? 'hidden' : 'block'} button ${
                    style?.position || ''
                }`}
                style={{
                    backgroundColor: style?.bg_color,
                    color: style?.text_color,
                }}
            >
                {children}
            </button>
        </>
    )
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    style: PropTypes.shape({
        bg_color: PropTypes.string,
        text_color: PropTypes.string,
        hidden: PropTypes.bool,
        position: PropTypes.string,
    }),
}

export default Button
