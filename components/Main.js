import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faGithub from '@fortawesome/fontawesome-free-brands/faGithub';
import faLinkedin from '@fortawesome/fontawesome-free-brands/faLinkedin';

class Main extends React.Component {
	render() {
		let close = (
			<div
				className="close"
				onClick={() => {
					this.props.onCloseArticle();
				}}
			/>
		);

		return (
			<div
				id="main"
				style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
			>
				<article
					id="intro"
					className={`${this.props.article === 'intro' ? 'active' : ''} ${
						this.props.articleTimeout ? 'timeout' : ''
					}`}
					style={{ display: 'none' }}
				>
					<h2 className="major">Intro</h2>
					{/* <span className="image main">
						<img src="/static/images/pic01.jpg" alt="" />
					</span> */}
					<p>
						I'm a software engineer who enjoys providing value to people through
						web applications using modern languages and frameworks such as
						JavaScript with ReactJS. I work as a Associate Frontend Developer
						for Broadridge. In the past, I have worked in Software Engineering
						internships at various fintech companies.
					</p>

					<h2 className="major">Skills</h2>
					<p>
						<strong>Languages</strong>: JavaScript (ES6), Kotlin, Java, Bash, C,
						HTML5, SASS/SCSS
						<br />
						<strong>Frameworks/Libraries</strong>: React, Spring, Jest/Enzyme,
						JUnit, Selenium
						<br />
						<strong>Tools</strong>: Git, Webpack, Babel, Gradle/Maven, Npm/Yarn,
						Gitlab CI/CD
					</p>

					<h2 className="major">Education</h2>
					<p>
						B.A. Computer Science from Rutgers University - New Brunswick (2017)
					</p>
					{close}
				</article>

				<article
					id="work"
					className={`${this.props.article === 'work' ? 'active' : ''} ${
						this.props.articleTimeout ? 'timeout' : ''
					}`}
					style={{ display: 'none' }}
				>
					<h2 className="major">Work</h2>
					{/* <span className="image main">
						<img
							style={{ maxHeight: '300px' }}
							src="/static/images/pic02.jpg"
							alt=""
						/>
          </span> */}
					<h5>Broadridge Financial Services – Associate Frontend Engineer</h5>
					<h6>July 2017 - present</h6>
					<p>
						- Built back office financial software portal in Kotlin/Spring on
						the backend and React/MobX on the frontend using TDD (test driven
						development), DDD (domain driven design), and CI/CD (continuous
						integration / continuous delivery)
						<br />- Core member of dedicated team in partnership with Pivotal
						Labs. <br />- Built critical features and contributed to overall
						architecture of application. <br />- Developed all features using
						Test Driven Development. <br />- Ensured end to end test coverage
						with Unit tests (JUnit, Jest, Enzyme), Integration tests (Spring
						Cloud Contracts and JUnit), and Feature/UI tests (Fluentlenium,
						flavor of Selenium) <br />- Onboarded multiple additional developers
						primarily using pair programming Design patterns / techniques used
						included: dependency inversion principle in tangent with Domain
						Driven Design, MVC, dependency injection to stub for tests, contract
						testing
						<br />- Extracted UI components from the main app and deployed as
						NPM package <br />- R&D for demos and POCs of internal UI libraries
						built with React & Storybook <br />- Frontend developer for an
						internal tool used to discover knowledge gaps across different
						departments, JavaScript with jQuery, using AJAX requests to render
						updates
					</p>
					{close}
				</article>

				<article
					id="projects"
					className={`${this.props.article === 'projects' ? 'active' : ''} ${
						this.props.articleTimeout ? 'timeout' : ''
					}`}
					style={{ display: 'none' }}
				>
					<h2 className="major">Projects</h2>
					{/* <span className="image main">
						<img src="/static/images/pic03.jpg" alt="" />
          </span> */}
					<h4>
						<a target="_blank" href="http://www.sohotreasures.com">
							Soho Treasures
						</a>
					</h4>
					<h6>React, Node, Python, AWS (EC2/S3/Route53), Git, HTML/CSS</h6>
					<p>
						This is an antique furniture business that I designed and coded for
						a client, from scratch. It's a static site that is capable of self
						updating. There is a micro EC2 instance that hosts the node mailer
						as well as a cronjob for starting a medium EC2 instance. On startup,
						this medium instance scrapes the data and pushes the result to the
						sites resource, before shutting itself down.
					</p>
					<h4>
						<a target="_blank" href="https://fdonskoy.github.io">
							Don Steakhouse
						</a>
						&nbsp;&nbsp;
						<a target="_blank" href="https://github.com/fdonskoy/DonSteakhouse">
							<FontAwesomeIcon icon={faGithub} />
						</a>
					</h4>
					<h6>React, Hyperapp, Git, HTML/CSS</h6>
					<p>
						This is a fake restaurant site that I built using React with
						Hyperapp. It was my first introduction with React and was modeled
						off of a design by LoganCee from dribbble.com.
					</p>
					{close}
				</article>

				<article
					id="contact"
					className={`${this.props.article === 'contact' ? 'active' : ''} ${
						this.props.articleTimeout ? 'timeout' : ''
					}`}
					style={{ display: 'none' }}
				>
					<h2 className="major">Contact</h2>
					<form method="post" action="#">
						<div className="field half first">
							<label htmlFor="name">Name</label>
							<input type="text" name="name" id="name" />
						</div>
						<div className="field half">
							<label htmlFor="email">Email</label>
							<input type="text" name="email" id="email" />
						</div>
						<div className="field">
							<label htmlFor="message">Message</label>
							<textarea name="message" id="message" rows="4" />
						</div>
						<ul className="actions">
							<li>
								<input type="submit" value="Send Message" className="special" />
							</li>
							<li>
								<input type="reset" value="Reset" />
							</li>
						</ul>
					</form>
					<ul className="icons">
						<li>
							<a
								target="_blank"
								href="https://www.linkedin.com/in/fil-donskoy/"
							>
								<FontAwesomeIcon icon={faLinkedin} />
							</a>
						</li>
						<li>
							<a target="_blank" href="https://github.com/fdonskoy">
								<FontAwesomeIcon icon={faGithub} />
							</a>
						</li>
					</ul>
					{close}
				</article>
			</div>
		);
	}
}

Main.propTypes = {
	route: PropTypes.object,
	article: PropTypes.string,
	articleTimeout: PropTypes.bool,
	onCloseArticle: PropTypes.func,
	timeout: PropTypes.bool
};

export default Main;
