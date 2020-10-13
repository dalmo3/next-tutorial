import SiteLayout from 'components/SiteLayout';
import '../styles/globals.css';

export default function MyApp({ Component, pageProps }) {
  return (
    <SiteLayout>
      <Component {...pageProps} />
    </SiteLayout>
  );
}
