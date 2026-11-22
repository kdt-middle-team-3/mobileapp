import { Stack } from 'expo-router'

export default function SubStackLayout() {
    return (
        <Stack
            screenOptions={{
                // headerShown: false,
                headerStyle: {backgroundColor: "#2F6FED"},
                headerTintColor: "#fff",
                headerTitleStyle: {
                    fontWeight: "bold"
                }
            }}
            // 스텍의 구성
        >
            <Stack.Screen name="index" options={{title: "담당 환자 목록"}} />
            <Stack.Screen name="[id]/index" options={{title: "환자 상세"}} />
        </Stack>
    )
}
