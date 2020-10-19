import SiteLayout from 'components/SiteLayout';
import SiteTheme from 'components/SiteTheme';
import '../styles/globals.css';

export default function MyApp({ Component, pageProps }) {
  return (
    <SiteTheme>
      <SiteLayout>
        <Component {...pageProps} />
      </SiteLayout>
    </SiteTheme>
  );
}
