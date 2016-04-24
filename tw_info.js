///////////////////////////////////////////////////////
// tw_info.js - 테일즈 관련 정보
///////////////////////////////////////////////////////

function initTwInfo() {
    // skill 정보 입력
    addTwSkill(TW_CHAR_NAME[6], TW_SKILL_TYPE[0], 145, 2.3, 10, 1.1, "카드 스프레이");
    addTwSkill(TW_CHAR_NAME[6], TW_SKILL_TYPE[1], 130, 2.3, 10, 1.1, "댄싱 바이퍼");
    addTwSkill(TW_CHAR_NAME[6], TW_SKILL_TYPE[1], 160, 2.3, 10, 1.1, "댄싱 바이퍼 (어빌)");
    addTwSkill(TW_CHAR_NAME[6], TW_SKILL_TYPE[0], 180, 2.7,  5, 1.2, "스크래칭 스톰");

    addTwSkill(TW_CHAR_NAME[4], TW_SKILL_TYPE[0], 165, 2.3, 11, 1.5, "원무");

    addTwArtifact(TW_ARTI_TYPE[5], TW_ARTI_COND[3], 15, "眞-이그니스의 보옥");
    addTwArtifact(TW_ARTI_TYPE[1], TW_ARTI_COND[3], 20, "改-그래시아의 심장");
    addTwArtifact(TW_ARTI_TYPE[1], TW_ARTI_COND[3], 30, "眞-그래시아의 심장");
    addTwArtifact(TW_ARTI_TYPE[2], TW_ARTI_COND[3], 15, "眞-암페르카의 무혼");

    // TODO: delete this !! - test print
    getCharacterList();

    testSkillList();
    //testArtifactList();
}

function getCharacterList() {
    list = [];
    for (i = 0; i < TW_CHAR_NAME.length; i++)
        for (j = 0; j < twSkillList.length; j++)
            if (twSkillList[j].getCharacter() == TW_CHAR_NAME[i]) {
                list.push(TW_CHAR_NAME[i]);
                break;
            }
    return list;
}

// test
function testSkillList() {
    for (i = 0; i < twSkillList.length; i++) {
        div = document.createElement("div");
        div.innerHTML = twSkillList[i].toString();
        document.getElementsByTagName("BODY")[0].appendChild(div);
    }
}
// test
function testArtifactList() {
    for (i = 0; i < twArtifactList.length; i++) {
        div = document.createElement("div");
        div.innerHTML = twArtifactList[i].toString();
        document.getElementsByTagName("BODY")[0].appendChild(div);
    }    
}
    
// 캐릭터/아이템 정보 ///////////////////////////////////////////
var TW_CHAR_NAME = new Array("나야트레이", "녹턴", "란지에", "로아미니", "루시안", "막시민",
                             "밀라", "벤야", "보리스", "시벨린", "이솔렛",
                             "이스핀", "이자크", "조슈아", "클로에", "티치엘");
var TW_SKILL_TYPE = new Array("물리복합 (SH)", "베기 (H)", "찌르기 (S)", "마법 (I)", "마검 (HI)", "마법 방어(M)");

var TW_ARTI_TYPE = new Array("",
    "모든 스탯 상승", "모든 스킬 대미지 상승", "물리 복합 공격력 상승", "찌르기 공격력 상승","베기 공격력 상승",
    "마법 및 백마법 공격력 상승", "마법 공격력 상승", "백마법 공격력 상승", "회피율 상승", "명중률 상승",
    "이동속도 증가", "나쁜 상태 이상에 걸릴 확률 감소", "크리티컬 확률 증가", "일정 공격 대미지를 HP로 전환", "체력 회복 버프 발동");
var TW_ARTI_COND = new Array("",
    "사용 시", "착용 시", "착용 후 스킬 사용 시", "피격 시");

function TwCharSkill(twchar, type, damage, cri, times, delay, name) {
    var HPS = Floor((times / (Floor(delay, 1) + 0.3)), 2);
    var QHPS = Floor((times / (Floor(delay*0.65, 1) + 0.3)), 2);

    // TODO: set하는 함수 추가해야할까? + HPS, QHPS 재연산
    // 당분간은 상수형 data로 써야겠음.
    return {
        // ex: 밀라 - 카드 스프레이
        getName: function()         { return name; },   // "카드 스프레이"
        getCharacter: function()    { return twchar; }, // TW_CHAR_NAME[6]
        getType: function()         { return type; },   // TW_SKILL_TYPE[0]
        getDamage: function()       { return damage; }, // 145
        getCritical: function()     { return cri; },    // 2.3
        getTimes: function()        { return times; },  // 10
        getDelay: function()        { return delay; },  // 1.1

        getHPS: function()          { return HPS; },
        getQHPS: function()         { return QHPS; },
        toString: function() {
            return twchar + "/" + name + "/" + type + "/" + damage + "%/" + cri + "/" +
                times + "/" + delay + "/" + HPS + "/" + QHPS;
        }
    }
}

function TwArtifact(type, cond, value, name, etc) {
    var valueStr = ""; // for debugging
    switch(type) {
        case TW_ARTI_TYPE[2]:
        case TW_ARTI_TYPE[3]:
        case TW_ARTI_TYPE[4]:
        case TW_ARTI_TYPE[5]:
        case TW_ARTI_TYPE[6]:
        case TW_ARTI_TYPE[7]:
        case TW_ARTI_TYPE[8]:
        case TW_ARTI_TYPE[12]:
        case TW_ARTI_TYPE[14]:
            valueStr = value+"%";
            break;
        default:
            valueStr = value;
    }

    return {
        getType: function()         { return type; },
        getName: function()         { return name; },
        getValue: function()        { return value; },
        getCondition: function()    { return cond; },
        getEtc: function()          { return etc; },
        toString: function() {
            return name + ": " + cond + " " + type + " (" + valueStr + ")";
        }
    }
}

var twSkillList = [];
function addTwSkill(twchar, type, damage, cri, times, delay, name) {
    twSkillList.push(TwCharSkill(twchar, type, damage, cri, times, delay, name));
}
var twArtifactList = [];
function addTwArtifact(type, cond, value, name) {
    twArtifactList.push(TwArtifact(type, cond, value, name, ""));
}
function addTwArtifactEx(type, cond, value, name, etc) {
    twArtifactList.push(TwArtifact(type, cond, value, name, etc));
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
