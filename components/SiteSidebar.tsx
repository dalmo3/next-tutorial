/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Flex } from 'theme-ui';
import { LocalStyles } from './SiteTheme';

const styles: LocalStyles = {
  sidebar: {
    backgroundColor: 'whitesmoke',
    flexDirection: 'column',
    flex: '0 1 auto',
    minWidth: 320
  }
};

const SiteSidebar = ({ sx = {} }) => {
  return (
    <aside sx={{ ...sx, ...styles.sidebar }}>
      <Flex>Sidebar</Flex>
    </aside>
  );
};
export default SiteSidebar;
