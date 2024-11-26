export default function hourFormat(dateString) { // 시간을 24시간식 표현 (HH : MM) 으로 변환한다.
    return `${ new Date(dateString).getHours().toString().padStart(2, '0') } : ${ new Date(dateString).getMinutes().toString().padStart(2, '0') }`
}