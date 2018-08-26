//stores authentication credentials and redirects back to upload route in app
import { Component } from 'react';
import { setIdToken, setAccessToken } from '../utils/AuthService';

class Callback extends Component {
	componentDidMount() {
		setAccessToken();
		setIdToken();
		window.location.href = "/";
	}

	render() {
		return null;
	}
};

export default Callback;