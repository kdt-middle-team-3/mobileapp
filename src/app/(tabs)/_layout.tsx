import { Ionicons } from "@expo/vector-icons"
import { Tabs } from 'expo-router'

export default function _layout() {
    return (
        <Tabs screenOptions={{headerShown: false, tabBarActiveTintColor: "#2F6FED"}}>
            <Tabs.Screen
                name="home"
                options={{
                    title: "홈",
                    tabBarIcon: ({color, size, focused}) => (
                        <Ionicons 
                            name={focused ? "home" : "home-outline"}
                            size={size}
                            color={color as any}
                        />
                    )
                }}
            />
            <Tabs.Screen
                name="chat"
                options={{
                    title: "대화",
                    tabBarIcon: ({color, size, focused}) => (
                        <Ionicons 
                            name={focused ? "chatbubble-ellipses" : "chatbubble-ellipses-outline"}
                            size={size}
                            color={color as any}
                        />
                    )
                }}
            />
            <Tabs.Screen
                name="character"
                options={{
                    title: "캐릭터",
                    tabBarIcon: ({color, size, focused}) => (
                        <Ionicons 
                            name={focused ? "happy" : "happy-outline"}
                            size={size}
                            color={color as any}
                        />
                    )
                }}
            />
            <Tabs.Screen
                name="my"
                options={{
                    title: "마이",
                    tabBarIcon: ({color, size, focused}) => (
                        <Ionicons 
                            name={focused ? "person" : "person-outline"}
                            size={size}
                            color={color as any}
                        />
                    )
                }}
            />
        </Tabs>
    )
}
