export default function getLatestLocation() {
    // localStorage에서 최종 좌표값이 있으면 좌표 객체를 반환한다.
    const isExist = localStorage.getItem('mallangMapLatestLocation');

    if (!!isExist === true) {
        const [lastLat, lastLng] = isExist
            .replaceAll(/[()/ /]/gim, '')
            .split(',');

        return { lat: Number(lastLat), lng: Number(lastLng) };
    } else {
        // 아무 값이 없으면 강남 한복판의 개꿀공원으로 이동한다.
        return { lat: 37.48796528597396, lng: 126.98758475187806 };
    }
}
