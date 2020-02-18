import React, { Component } from "react"

import styles from './withErrorHandler.module.css'


const withErrorHandler = (WrappedComponent, axios) => {
	return class extends Component {
		state = {
			error: null
		}

		componentWillMount() {
			this.reqInterceptor = axios.interceptors.request.use(req => {
				this.setState({ error: null })
				return req
			})
			this.resInterceptor = axios.interceptors.response.use(
				res => res,
				error => {
					this.setState({ error: error })
				}
			)
		}

		componentWillUnmount() {
			// Ejecting interceptors to avoid memory leaks when reusing this wrapper component in other places of the app
			axios.interceptors.request.eject(this.reqInterceptor)
			axios.interceptors.response.eject(this.resInterceptor)
		}

		errorConfirmedHandler = () => {
			this.setState({ error: null })
		}

		render() {
			return (
				<React.Fragment>
          <p className={styles.Error}>{this.state.error ? this.state.error.message : null}</p>
					<WrappedComponent {...this.props} />
				</React.Fragment>
			)
		}
	}
}

export default withErrorHandler
