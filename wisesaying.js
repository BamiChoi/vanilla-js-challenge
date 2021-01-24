const wiseSaying = document.querySelector(".wiseSaying__text");
const wiseSayingBy = document.querySelector(".wiseSaying__by");

const WISESAYING_NUMBER = 10;

function genRandomNumber() {
    const randomNumber = Math.floor(Math.random()* WISESAYING_NUMBER) + 1;
    return randomNumber;
    
}

function paintWiseSaying(number) {

    if (number === 1 ){
        wiseSaying.innerText ='"늦었다고 생각할 때가 정말 늦었다. 당장 시작해라."'
        wiseSayingBy.innerText = '[거성 박명수]'
    } else if (number === 2 ){
        wiseSaying.innerText ='"사막이 아름다운 것은 어딘가에 물을 숨기고 있기 때문이다."'
        wiseSayingBy.innerText = '[생 택쥐페리]'
    } else if (number === 3 ){
        wiseSaying.innerText ='"해군이 아니라 해적이 돼라."'
         wiseSayingBy.innerText = '[스티븐 잡스]'
    } else if (number === 4 ){
        wiseSaying.innerText ='"길을 잃는다는 것은 곧, 길을 알게 된다는 것이다."'
         wiseSayingBy.innerText = '[동아프리카 속담]'
    } else if (number === 5 ){
        wiseSaying.innerText ='"삶을 사는데는 단 두가지 방법이 있다. 하나는 기적이 전혀 없다고 여기는 것이고, 또 다른 하나는 모든 것이 기적이라고 여기는 것이다."'
         wiseSayingBy.innerText = '[알버트 아인슈타인]'
    } else if (number === 6 ){
        wiseSaying.innerText ='"더 많이 사랑하는 것 외에 다른 사랑의 치료약은 없다."'
         wiseSayingBy.innerText = '[헨리 데이비드 소로우]'
    } else if (number === 7 ){
        wiseSaying.innerText ='"뛰어가려면 늦지 않게 가고 어차피 늦을 거라면 뛰어가지마라. 후회할 거라면 그렇게 살지 말고 그렇게 살거라면 절대 후회하지마라."'
         wiseSayingBy.innerText = '[무라카미 하루키]'
    } else if (number === 8 ){
        wiseSaying.innerText ='"매일이 행복하진 않지만 행복한 일은 매일 있어!"'
         wiseSayingBy.innerText = '[곰돌이 푸]'
    } else if (number === 9 ){
        wiseSaying.innerText ='"모르는게 아니야, 알 때까지 시간이 걸리는거야."'
         wiseSayingBy.innerText = '[보노보노]'
    } else if (number === 10 ){
        wiseSaying.innerText ='"사랑으로 행해진 일은 언제나 선악을 초월한다."'
         wiseSayingBy.innerText = '[프리드리히 니체]'
    }
    
}

function init() {
    const number = genRandomNumber()
    paintWiseSaying(number);
}

init()