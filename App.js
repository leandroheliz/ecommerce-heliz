import { ThemeProvider } from 'styled-components';
import Store from './src/MyStore';
import { theme } from './src/Theme';
import { useFonts as OswaldFont, Oswald_400Regular } from '@expo-google-fonts/oswald';
import { useFonts as LatoFont, Lato_400Regular } from '@expo-google-fonts/lato';

export default function App() {

  const [oswaldLoaded] = OswaldFont({
    Oswald_400Regular
  });

  const [latoLoaded] = LatoFont({
    Lato_400Regular
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <Store />
    </ThemeProvider>
  );
}
