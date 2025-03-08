import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { WebView } from 'react-native-webview';

function HomeScreen() {
  const { top } = useSafeAreaInsets();

  console.log(top);

  return <WebView source={{ uri: 'http://192.168.0.41:5173' }} style={{ flex: 1 }} />;
}

export default HomeScreen;
