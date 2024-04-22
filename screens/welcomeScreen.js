import { useNavigation } from "@react-navigation/native"
import { View, Text, SafeAreaView, Image } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"




export default function WelcomeScreen(){
    navigation = useNavigation();
    return(
        <SafeAreaView className="flex-1 bg-black ">
            <View className="flex-1 flex justify-around my-4">
                <Text
                className="text-3xl text-slate-200 font-bold text-center">
                    Let's Get Started!
                </Text>
                <View className="flex-row justify-center"> 
                    <Image source={require("../assets/welcoime.png")}
                    style={{width:250, height:250}}/>
                </View>

                <View className="space-y-4">
                    <TouchableOpacity onPress={()=> navigation.navigate("SignUp")}
                    className="py-3 bg-yellow-400 mx-7 rounded-xl">
                        <Text
                        className="text-center font-bold  text-xl text-gray-700">
                            Sign Up
                        </Text>
                    </TouchableOpacity>
                    <View className="flex-row justify-center">
                        <Text className="text-gray-700">Já possui conta </Text>
                        <TouchableOpacity onPress={()=> navigation.navigate("Login")}>
                            <Text className="text-yellow-400">Log in</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

        </SafeAreaView>
    )
}