import ModalInstruction from '../components/common/ModalInstruction';
import ModalSectionTitle from '../components/common/ModalSectionTitle';

const RescueDisclaimer = () => {
    return (
        <div>
            <div className="user-common-item-list">
                <ModalInstruction
                    instHeadline="잠깐!"
                    instContent="직접 구조하는 것보다 전문가의 도움을 청하는 편이 효과적일 수 있습니다. 구조 활동에 나서기 전에 아래와 같은 동물 보호 단체들에 먼저 연락을 취해 보세요."
                />

                <div className="list-animal-organizations">
                    <dl className="user-common-labeled-row">
                        <dt>
                            <span>뭐시기 보호단체</span>
                        </dt>

                        <dd>
                            <span>{'010-5555-5555'}</span>
                        </dd>
                    </dl>

                    <dl className="user-common-labeled-row">
                        <dt>
                            <span>무슨무슨 보호소</span>
                        </dt>

                        <dd>
                            <span>{'010-5555-5555'}</span>
                        </dd>
                    </dl>

                    <dl className="user-common-labeled-row">
                        <dt>
                            <span>저시기 구출단</span>
                        </dt>

                        <dd>
                            <span>{'010-5555-5555'}</span>
                        </dd>
                    </dl>
                </div>
            </div>

            <ModalSectionTitle sectionTitle="🚨 동물 구조 활동시 유의사항" />

            <div className="user-common-item-list">
                <dl className="rescue-disclaimer-block">
                    <dt>
                        <h6>무엇보다도 안전이 최우선입니다.</h6>
                    </dt>

                    <dd>
                        <p>
                            부상을 입거나 고립된 동물은 난폭한 반응을 보일 수
                            있으며, 특정한 동물의 경우 본래 공격적인 성질을 갖고
                            있을지도 모릅니다. 또한, 야생 동물로부터 상처를 입을
                            경우에는 독이나 병원체 감염 등의 가능성이 다분하므로
                            특별히 주의하셔야 합니다. 이에 더불어 다친 동물을
                            함부로 이동시키려 하다가 추가적인 부상을 입히거나
                            불필요한 스트레스를 가하게 될 수도 있습니다.
                        </p>

                        <p>
                            따라서 이러한 동물을 발견하셨을 때는 가급적 본인이
                            직접 구조 활동에 나서기보다는 가까운 동물 보호소,
                            동물 구호 단체, 지역 자치 단체의 담당 부서 등 해당
                            활동에 전문적 지식이 있는 곳에 도움을 요청하시어,
                            자기 자신과 동물 모두의 안전을 지켜 주시기 바랍니다.
                        </p>
                    </dd>
                </dl>

                <dl className="rescue-disclaimer-block">
                    <dt>
                        <h6>법적 제한 사항도 고려하세요.</h6>
                    </dt>

                    <dd>
                        <p>
                            보호종이나 천연기념물 보호법에 의해 보호받는 동물,
                            기타 야생 동물 및 동물 보호와 관련된 여러 법률에
                            의하여 일반인이 함부로 구조 활동을 하거나 보호해서는
                            안 되는 동물들을 발견하실 수도 있습니다. 물론 생명은
                            무엇보다도 소중한 것이지만, 허가받지 않은 개인이 할
                            수 있는 최선의 구조 활동은 무엇인지 신중하게
                            생각하신 후에 행동하시길 바랍니다.
                        </p>

                        <p>
                            또한 동물이 사유지에 머물러 있을 경우. 해당 사유지의
                            소유주가 동의하지 않은 상태에서 해당 지역에 함부로
                            진입하는 행위로 인해 위험하거나 난처한 상황에 처하게
                            될 수 있습니다. 먼저 이러한 사항을 확인하세요.
                        </p>
                    </dd>
                </dl>

                <dl className="rescue-disclaimer-block">
                    <dt>
                        <h6>구조 이후에는 무엇을 해야 하나요?</h6>
                    </dt>

                    <dd>
                        <p>
                            집에서 키울 수 있는 종류의 동물이 아니라면, 먼저
                            구조한 동물을 회복시키기에 적합한 시설로 이동시키는
                            것이 좋습니다. 말랑플레이스에서 야생 동물의 응급
                            처치나 치료에 능숙한 동물 병원 및 보호소를
                            찾아보세요.
                        </p>

                        <p>
                            일정 기간 동안 동물을 임시로 돌보아야 할 경우에는
                            이들이 안전하다고 느낄 수 있는 공간과 물, 적절한
                            음식 등을 제공하여 몸과 마음을 회복할 시간을 주세요.
                            진정된 동물은 이동시에 스트레스를 더 적게 받으며,
                            수술 및 치료를 준비하기가 더 수월합니다.
                        </p>

                        <p>
                            동물 구조는 한 순간의 관심으로 끝나는 것이 아니라
                            지속적인 관심을 필요로 하는 사회적 활동입니다.
                            버려지거나 거리에서 태어나 위험에 처하기 십상인
                            동물들을 입양하여 세상에 하나 뿐인 가족이 되어주는
                            것도 고려해 보세요.
                        </p>
                    </dd>
                </dl>
            </div>
        </div>
    );
};

export default RescueDisclaimer;
