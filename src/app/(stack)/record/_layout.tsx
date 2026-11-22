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
            <Stack.Screen name="calendar/index" options={{title: "캘린더"}} />
            <Stack.Screen name="diary/index" options={{title: "일기 쓰기"}} />
            <Stack.Screen name="diary/[date]/index" options={{title: "일기 보기"}} />
            <Stack.Screen name="sleep/index" options={{title: "수면 기록"}} />
            <Stack.Screen name="exercise/index" options={{title: "운동 기록"}} />
            <Stack.Screen name="emotion/index" options={{title: "감정 기록"}} />
            <Stack.Screen name="goal/index" options={{title: "일일목표"}} />
        </Stack>
    )
}
