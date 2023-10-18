import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import {
  Image,
  Pressable,
  View,
  useColorScheme,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Colors from '../../constants/Colors';
import { FontAwesome5 } from '@expo/vector-icons';

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}


const Logo = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/almeelogo.png")}
        style={styles.logo}
        resizeMode="contain"
      />
    </View>
  );
};
export default function TabLayout() {
  //const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#5bc7cb',
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          headerLeft: () => <Logo />,
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
          headerRight: () => (
            <Link href="/" asChild>
            <Pressable>
              {({ pressed }) => (
                <View style={styles.container}>
                  <TouchableOpacity>
                    <FontAwesome5
                      name="search"
                      size={24}
                      color='#fc5555'
                      style={{  opacity: pressed ? 0.5 : 1 }}
                    />
                  </TouchableOpacity>
                </View>
              )}
            </Pressable>
          </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: 'sheet',
          headerLeft: () => <Logo />,
          tabBarIcon: ({ color }) => <TabBarIcon name="retweet" color={color} />,
        }}
      />
      <Tabs.Screen
        name="three"
        options={{
          title: 'Map',
          headerLeft: () => <Logo />,
          tabBarIcon: ({ color }) => <TabBarIcon name="map" color={color} />,
        }}
      />
    </Tabs>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    height: 60,
  },
  logo: {
    width: 40,
    height: 40,
  },
});