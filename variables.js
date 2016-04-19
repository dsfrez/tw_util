///////////////////////////////////////////////////////
// variables.js - 각종 잡다한 변수들 선언함
///////////////////////////////////////////////////////

var test_url = "index.html?ShowResultWindow=ShowResultWindow&ShowInputWindow=ShowInputWindow&uD0=&uD1=&uD2=&uD3=&uD4=&uD5=&uD6=&uD7=&uD8=&D0_0=18&D0_1=38&D0_2=32&D0_3=20&D0_4=26&D0_5=20&D0_6=20&D0_7=20&D0_8=20&D1_0=1&D1_1=2&D1_2=&D1_3=&D1_4=&D1_5=2&D1_6=2&D1_7=3&D1_8=&D2_0=&D2_1=&D2_2=127&D2_3=&D2_4=140&D2_5=&D2_6=63&D2_7=&D2_8=&D3_0=95&D3_1=195&D3_2=22&D3_3=23&D3_4=24&D3_5=27&D3_6=23&D3_7=17&D3_8=17&D4_0=46&D4_1=46&D4_2=&D4_3=&D4_4=7&D4_5=18&D4_6=&D4_7=&D4_8=&D5_0=5&D5_1=5&D5_2=1&D5_3=1&D5_4=1&D5_5=1&D5_6=5&D5_7=1&D5_8=1&D6_0=22&D6_1=36&D6_2=33&D6_3=24&D6_4=33&D6_5=22&D6_6=21&D6_7=20&D6_8=20&D7_0=4&D7_1=3&D7_2=&D7_3=&D7_4=&D7_5=2&D7_6=4&D7_7=&D7_8=&D8_0=21&D8_1=33&D8_2=25&D8_3=17&D8_4=25&D8_5=20&D8_6=21&D8_7=21&D8_8=21&D9_0=6&D9_1=6&D9_2=5&D9_3=&D9_4=&D9_5=2&D9_6=&D9_7=&D9_8=&D10_0=17&D10_1=29&D10_2=16&D10_3=17&D10_4=16&D10_5=24&D10_6=17&D10_7=16&D10_8=16&D11_0=16&D11_1=29&D11_2=17&D11_3=17&D11_4=16&D11_5=17&D11_6=16&D11_7=16&D11_8=16&D12_0=5&D12_1=23&D12_2=&D12_3=5&D12_4=&D12_5=&D12_6=5&D12_7=5&D12_8=5&D13_0=35&D13_1=53&D13_2=&D13_3=34&D13_4=33&D13_5=11&D13_6=14&D13_7=&D13_8=10&D14_0=5&D14_1=5&D14_2=3&D14_3=5&D14_4=5&D14_5=2&D14_6=3&D14_7=&D14_8=2&SFriend=21&SBuff=SBuff&SArtifact=&S0=88&SCard0=3&SClub0=&SRune0=10&SEtc0=&S1=180&SCard1=5&SClub1=&SRune1=10&SEtc1=&S2=1&SCard2=3&SClub2=&SRune2=&SEtc2=&S3=101&SCard3=4&SClub3=&SRune3=10&SEtc3=&S4=79&SCard4=3&SClub4=&SRune4=10&SEtc4=&S5=234&SCard5=2&SClub5=3&SRune5=10&SEtc5=&S6=200&SCard6=1&SClub6=3&SRune6=10&SEtc6=20";

// id  / class 선언 ////////////////////////////////////
// 사용자 입력

var idFormElement = "main_form";
var idInputMain = "input_main";
var idInputDevice = "input_device";
var idInputStatus = "input_status";
var idDeviceTable = "table_device";

id_friend = "id_friend";
name_friend = "SFriend";
id_bless = "id_bless";
name_bless = "SBless";
id_buff = "id_buff";
name_buff = "SBuff";
id_exorcist = "id_exorcist";
name_exorcist = "SExorcist";
id_artifact = "id_artifact";
name_artifact = "SArtifact";

var classInput = "class_input";

var clDivSmallFont = "div_small_font";
var clTableInput = "table_input";
var clTableInput2 = "table_input2";

// 결과 출력
var idResultMain = "result_main";

// 대미지 계산용 변수 /////////////////////////////////////
var deviceStatSum = new Array(deviceStatList.length);       // 계산된 장비 합
var charStatSum = new Array(statList.length);               // 계산된 캐릭터 최종 스탯
var cDeviceStatSum = new Array(deviceStatList.length);      // 사용자 입력 장비 합
var cCharStatSum = new Array(statList.length);              // 사용자 입력 캐릭터 최종 스탯

var valStatFriend;      // 신뢰의 물약 스탯 증가치
var isStatBless;        // 축복의 물약 사용 여부
var isStatBuff;         // 와블/법스 사용 여부
var isStatExorcist;     // 퇴마사의 은총 사용 여부
var valArtifact;        // 아티팩트 스탯 증가치 : TODO - 루틴 수정 할 것

// 캐릭터 공격력 증가
var useWeaponDrill;     // 무기연마 활성화
var useSubWeaponDrill;  // 보급무기연마 활성화
var useAwakenBuff;      // 각성의 비약 / 기합
// 최종 대미지 증가 계수
var valCharProperty;    // 캐릭터 속성 합계
var valDeviceAbility;   // 장비 어빌리티 합
var valJusticeLv;       // Rune 스킬 정의의 심판 Level
var etcBuff;            // 기타 증댐 버프 (%) - TODO 버서크등 옵션 추가해야함 