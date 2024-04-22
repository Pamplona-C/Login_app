import { View, Text, Image, TouchableOpacity } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import {Feather} from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/native"
import { TextInput } from "react-native-gesture-handler";
import { AntDesign } from '@expo/vector-icons';


export default function LoginScreen(){
    navigation = useNavigation();
    return(
        <View className="flex-1 bg-black">
            <SafeAreaView >
                <TouchableOpacity onPress={()=> navigation.goBack()}
                className="flex-row bg-yellow-400 w-10 h-10 ml-10 mt-10 rounded-full items-center justify-center">
                    <Feather name="arrow-left" size={24} color="black" />
                </TouchableOpacity>

                <View className="flex-row justify-center my-8"> 
                    <Image source={require("../assets/welcome.png")}
                    style={{width:150, height:150}}/>
                </View>
            </SafeAreaView>

            <View className="flex-1 bg-white pt-8 px-8" style={{borderTopRightRadius:50, borderTopLeftRadius:50}}>
                <View className="form space-y-2">

                    <Text className="text-gray-700 ml-4">Email</Text>
                    <TextInput
                        
                        placeholder="Email"
                        className="p-4 bg-gray-100 text-gray-700 rounded-2xl"
                    ></TextInput>

                    <Text className="ml-4" >Senha</Text>
                    <TextInput
                        secureTextEntry
                        
                        placeholder="Senha"
                        className="p-4 bg-gray-100 text-gray-700 rounded-2xl"
                    ></TextInput>

                    <TouchableOpacity className="flex items-end mb-5">
                        <Text
                            className="text-gray-700"
                        >Esqueceu a Senha ?</Text>
                    </TouchableOpacity>

                    <TouchableOpacity className="py-3 bg-yellow-400 rounded-xl">
                        <Text
                            className="font-xl font-bold text-center text-gray-700"
                        >
                            Login
                        </Text>
                    </TouchableOpacity>

                    
                    <Text className="text-center font-bold text-xl p-5">Or</Text>
                        
                    <View className="flex-row justify-around p-5">
                            <TouchableOpacity>
                            <AntDesign name="google" size={30} color="black" />
                            </TouchableOpacity>
                            <TouchableOpacity>
                            <AntDesign name="facebook-square" size={30} color="blue" />
                            </TouchableOpacity>
                            <TouchableOpacity>
                            <AntDesign name="apple1" size={30} color="gray" />
                            </TouchableOpacity>
                    </View>
                    <View className="flex-row justify-center">
                        <Text className="text-gray-700">Não possui conta ? </Text>
                        <TouchableOpacity onPress={()=> navigation.navigate("SignUp")}>
                            <Text className="text-yellow-400">Cria Conta</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
        </View>
    )
}