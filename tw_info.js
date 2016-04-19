///////////////////////////////////////////////////////
// tw_info.js - 테일즈 관련 정보
///////////////////////////////////////////////////////

function init_tw_info() {
    // skill 입력
    addTwSkill(twCharName[6], "카드 스프레이", twSkillType[0], 145, 2.3, 10, 1.1);
    addTwSkill(twCharName[6], "댄싱 바이퍼", twSkillType[1], 130, 2.3, 10, 1.1);
    addTwSkill(twCharName[6], "댄싱 바이퍼 (어빌)", twSkillType[1], 160, 2.3, 10, 1.1);
    addTwSkill(twCharName[6], "스크래칭 스톰", twSkillType[0], 180, 2.7, 5, 1.2);

    // test
    for (i = 0; i < twSkillList.length; i++) {
        div = document.createElement("div");
        div.innerHTML = printTwSkill(twSkillList[i]);
        document.getElementsByTagName("BODY")[0].appendChild(div);
    }

}
    
// 캐릭터/아이템 정보 ///////////////////////////////////////////
var twCharName = new Array("나야트레이", "녹턴", "란지에", "로아미니", "루시안", "막시민", "밀라", "벤야", "보리스", "시벨린", "이솔렛", "이스핀", "이자크", "조슈아", "클로에", "티치엘");
var twSkillType = new Array("몰리복합 (SH)", "베기 (H)", "찌르기 (S)", "마법 (I)", "마검 (HI)", "마법 방어(M)");
var twSkillList = [];
function twCharSkill() {
    // ex: 밀라 - 카드 스프레이
    var character;          // twCharName[6]
    var name;               // "카드 스프레이"
    var type ;              // twSkillType[0]
    var damage;             // 145
    var critical;           // 2.3
    var times;              // 10
    var delay;              // 1.1

    var HPS;                // 일반 HPS
    var QHPS;               // 신속의 미학 기준 HPS
    
    // javascript에서는 내부 함수를 외부에서 못 읽어 ??!??
    // cpp class 처럼 하고 싶었는데 망함.
}
function addTwSkill(_char, _name, _type, _damage, _cri, _times, _delay) {
    temp = new twCharSkill();
    temp.character = _char;
    temp.name = _name;
    temp.type = _type;
    temp.damage = _damage;
    temp.critical = _cri;
    temp.times = _times;
    temp.delay = _delay;
    
    temp.HPS = Floor((_times / (Floor(_delay, 1) + 0.3)), 2);
    temp.QHPS = Floor((_times / (Floor(_delay*0.65, 1) + 0.3)), 2);
    
    twSkillList.push(temp);
}
function printTwSkill(s) { // for debug ..
    return s.character + "/" + s.name + "/" + s.type + "/" + s.damage + "%/" + s.critical + "/" +
            s.times + "/" + s.delay + "/" + s.HPS + "/" + s.QHPS;
}

// 아티팩트 타입
var itemArtifactType = new Array("none", "stat", "all", "ad", "stab", "hack", "ap", "int", "mr");
var itemArtifactList = [];
function itemArtifact(_type, _name, _value) {
    var type = _type;   // 아티팩트 종류 - 대미지, stat 증가
    var name = _name;   // 아티팩트 이름
    var value = _value; // 스탯 증가치 or 대미지 증가량 (%)
}
function addItemArtifact(_type, _name, _value) {
    itemArtifactList.push(new itemArtifact(_type, _name, _value));
}

// 계산 공식 관련 ////////////////////////////////////////

// 메뉴 출력 관련 ////////////////////////////////////////
var deviceStatList = new Array(
    "찌르기", "베기", "물리방어", "마법", "마법 방어", "명중", "회피", "민첩", "크리티컬");
var deviceList = new Array(
    "투구", "투구확장", "갑옷", "무기", "손목", "손목확장", "머리", "머리확장", "몸", "몸확장", "손", "신발", "기타", "아티팩트", "칭호");
var statList = new Array(
    "STAB", "HACK", "INT", "DEF", "MR", "DEX", "AGI");
var statMenuList = new Array(
    "원본 스탯", "신뢰의 물약", "축목의 물약", "몬스터 카드", "클럽 효과", "룬 스탯", "아티팩트", "기타 (ex:기합", "합계");
