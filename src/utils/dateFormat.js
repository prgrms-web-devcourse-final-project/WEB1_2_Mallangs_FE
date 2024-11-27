export default function dateFormat(dateString) { // 날짜를 대한민국식 표현 (YYYY. MM. DD) 으로 변환한다.
    return new Date(dateString).toLocaleDateString('ko-KR', { year: 'numeric', month: '2-digit', day: '2-digit' });
}