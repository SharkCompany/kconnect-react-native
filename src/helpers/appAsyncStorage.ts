import AsyncStorage from "@react-native-async-storage/async-storage";
import { LOCAL_STORAGE_ENUM } from "constants/storageConsts";

export const getLocalData = async (key: LOCAL_STORAGE_ENUM) => {
	try {
		const value = await AsyncStorage.getItem(key);
		if (value !== null) {
			return JSON.parse(value);
		}
		return "";
	} catch (e) {}
};

export const storeLocalData = async (key: LOCAL_STORAGE_ENUM, value: any) => {
	try {
		const jsonValue = JSON.stringify(value);
		await AsyncStorage.setItem(key, jsonValue);
	} catch (e) {}
};
