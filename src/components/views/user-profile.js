import React, { Fragment } from 'react';

export default props => {
	return (
		<Fragment className="user-profile">
			<img src={props.imageUrl} alt={props.name} />
			<div className="details">
				<h1>{props.name}</h1>
				<a href={`http://twitter.com${props.twitter}`}> @{props.twitter}</a>
				<p>
					<strong>{props.workOn}</strong>
				</p>
				<h3>Github Repos:</h3>
				<ul className="repos">
					{props.repos.map(repo => {
						return (
							<li key={repo.id}>
								<a href={repo.html_url}>{repo.name}</a>
							</li>
						);
					})}
				</ul>
			</div>
		</Fragment>
	);
};
