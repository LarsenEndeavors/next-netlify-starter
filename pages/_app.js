import Layout from '../components/Layout'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@styles/globals.css';
import '@styles/styles.css';

function Application({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default Application
