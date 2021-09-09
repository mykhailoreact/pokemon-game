import React from 'react';
import s from './style.module.css';

const FooterBlock = () => {
	return (
		<React.Fragment>
			<footer>
			    <div className={s.wrapper}>
			        <h3>THANKS FOR VISITING</h3>
			        <p>© 2021 #ReactMarathon.</p>
			    </div>
			</footer>
		</React.Fragment>
	);
}

export default FooterBlock;
