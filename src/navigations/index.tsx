import { createStackNavigator } from "@react-navigation/stack";
import { RootStackParamList } from "./type";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RootNavigator from "./RootNavigator";

export default function Navigator() {
	return (
		<NavigationContainer>
			<RootNavigator />
		</NavigationContainer>
	);
}
