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
            <Stack.Screen name="today/index" options={{title: "오늘의 상담"}} />
            <Stack.Screen name="history/index" options={{title: "지난 상담 기록"}} />
            <Stack.Screen name="history/[id]/index" options={{title: "상담 내용"}} />
        </Stack>
    )
}
