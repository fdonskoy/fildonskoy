import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faGithub from '@fortawesome/fontawesome-free-brands/faGithub';
import faLinkedin from '@fortawesome/fontawesome-free-brands/faLinkedin';
import axios from 'axios';

class Main extends React.Component {
	state = {
		sender: '',
		senderEmail: '',
		message: '',
		formDisabled: false
	};

	handleSubmit = e => {
		e.preventDefault();
		const sender = this.state.sender;
		const senderEmail = this.state.senderEmail;
		const message = this.state.message;

		this.setState({
			formDisabled: true
		});
		axios({
			method: 'POST',
			url: `http://ec2-54-242-207-43.compute-1.amazonaws.com:3002/send`,
			data: {
				sender,
				senderEmail,
				message
			}
		})
			.then(response => {
				this.setState({
					formDisabled: false,
					message: ''
				});
				this.props.onCloseArticle();
			})
			.catch(err => {
				console.log('Failed to send');
			});
	};

	onSender = e => {
		this.setState({
			sender: e.target.value
		});
	};

	onSenderEmail = e => {
		this.setState({
			senderEmail: e.target.value
		});
	};

	onMessage = e => {
		this.setState({
			message: e.target.value
		});
	};

	handleReset = e => {
		e.preventDefault();
		this.setState({
			sender: '',
			senderEmail: '',
			message: ''
		});
	};

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
					<p>
						I'm a software engineer who enjoys providing value to people through
						web applications using modern languages and frameworks such as
						JavaScript with ReactJS. I work as a Frontend Engineer
						for Flexport. In the past, I have worked as a Frontend Engineer at Broadridge and at various fintech internships.
					</p>

					<h2 className="major">Skills</h2>
					<p>
						<strong>Languages</strong>: JavaScript, Kotlin, Java, C, HTML5, SASS/SCSS, CSS3, GraphQL, Ruby
						<br />
						<strong>Frameworks/Libraries</strong>: React, Spring, Jest/Enzyme, JUnit, Selenium, Aphrodite, Rails, Gatsby
						<br />
						<strong>Tools</strong>: Git, Webpack, NPM/Yarn, Gitlab CI/CD, AWS, Contentful, Netlify, Nginx, Flow
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
					<h5>Flexport – Frontend Engineer</h5>
						<h6>July 2019 - present</h6>
						<ul>
                        <li>Collaborated with brand design, product marketing, content, and demand gen to build an engaging Flexport brand experience</li>
                        <li>Built and maintained all pages of Flexport.com, including features such as global search</li>
                        <li>Ran A/B experiments with the signup flow and tracked conversions through Amplitude</li>
                        <li>Empowered Flexport's sales pipeline with generated leads using Salesforce and Marketo</li>
                        <li>Worked on product features within the client application such as a news module</li>
                        <li>Used React, GraphQL, Gatsby, Contentful, Netlify, Nginx, Relay, Flow, RoR, Aphrodite</li>

                        </ul>
            <br/>
					<h5>Broadridge Financial Services – Associate Frontend Engineer</h5>
					<h6>July 2017 - June 2019</h6>
                    <ul>
                    <li>Built a feature-rich UI portal that represents the aggregation of internal backend data for financial transactions such as trades. It features reports that users can customize, download, and share with their team, serviced by Ag-Grid as well as usage of internal APIs
                    </li>
                    <li>Used Kotlin/Spring on the backend and React/MobX on the frontend</li>
                    <li>Ensured code quality by using TDD, Domain Driven Design (DDD), and GitLab CI/CD</li>
                    <li>Implemented end to end test coverage with Unit tests (JUnit, Jest, Enzyme), Integration tests (Spring Cloud Contracts and JUnit), and Feature/UI tests (Fluentlenium/Selenium)</li>
                    </ul>
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
						<a target="_blank" href="https://www.flexport.com">
							Flexport.com
						</a>
						&nbsp;&nbsp;
					</h4>
					<h6>React, Gatsby, Contentful, Netlify, Git, HTML/CSS</h6>
					<p>
						This is the marketing site for Flexport. It's mostly served through static pages generated
						from Gatsby, powered by Contentful, and built through Netlify. I've worked across most pages on
						this site as well as created features such as global search.
					</p>
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
					<form method="post" onSubmit={this.handleSubmit}>
						<div className="field half first">
							<label htmlFor="name">Name</label>
							<input
								required
								type="text"
								name="name"
								id="name"
								value={this.state.sender}
								onChange={this.onSender}
							/>
						</div>
						<div className="field half">
							<label htmlFor="email">Email</label>
							<input
								required
								type="text"
								name="email"
								id="email"
								value={this.state.senderEmail}
								onChange={this.onSenderEmail}
							/>
						</div>
						<div className="field">
							<label htmlFor="message">Message</label>
							<textarea
								required
								name="message"
								id="message"
								rows="4"
								value={this.state.message}
								onChange={this.onMessage}
							/>
						</div>
						<ul className="actions">
							<li>
								{this.state.formDisabled ? (
									<div className="lds-ring">
										<div />
										<div />
										<div />
										<div />
									</div>
								) : (
									<input
										type="submit"
										value="Send Message"
										className="special"
									/>
								)}
							</li>
							<li>
								<input type="reset" value="Reset" onClick={this.handleReset} />
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
