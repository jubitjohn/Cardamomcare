import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import AboutUs from './aboutUs';

const Tab = createBottomTabNavigator();

function Footer() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="About Us" component={AboutUs} />
        </Tab.Navigator>
    );
}

export default Footer;