import React, { Component } from "react";
import "../../styles/home.scss";

export const Footer = () => (
	<footer className="footer mt-auto py-3 text-center">
		<p className="footerColor">
			<a href="https://www.linkedin.com/in/stewartgreengmdeep/">
				<i className="fab fa-linkedin 7x" />
			</a>
			<a href="https://github.com/GMDEEP">
				<i className="fab fa-github-square" />
			</a>
			<a href="https://twitter.com/GMDeep_onGithub">
				<i className="fab fa-twitter-square" />
			</a>
			Made with <i className="fa fa-heart text-danger" /> by
			{" GMDEEP"}
			<a href="http://www.4geeksacademy.com">4Geeks Academy</a>
		</p>
	</footer>
);
