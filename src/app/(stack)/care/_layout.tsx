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
            <Stack.Screen name="request/index" options={{title: "진료 요청"}} />
            <Stack.Screen name="waiting/index" options={{title: "병원 연락 대기"}} />
            <Stack.Screen name="chat/[id]/index" options={{title: "예약 채팅"}} />
            <Stack.Screen name="confirm/[id]/index" options={{title: "진료 예약 확정"}} />
            <Stack.Screen name="after/[id]/index" options={{title: "진료 후 선택"}} />
        </Stack>
    )
}
