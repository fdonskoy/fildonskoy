import PropTypes from 'prop-types';

const Footer = props => (
	<footer id="footer" style={props.timeout ? { display: 'none' } : {}}>
		<p className="copyright">
			Looking forward to hearing from you!
			<br />
			fildonskoy at gmail dot com
		</p>
	</footer>
);

Footer.propTypes = {
	timeout: PropTypes.bool
};

export default Footer;
