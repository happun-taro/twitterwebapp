// JavaScript source code
var ua = navigator.userAgent.toLowerCase();

// iPhone
var isiPhone = (ua.indexOf('iphone') > -1);
// iPad
var isiPad = (ua.indexOf('ipad') > -1);
// Android
var isAndroid = (ua.indexOf('android') > -1) && (ua.indexOf('mobile') > -1);
// Android Tablet
var isAndroidTablet = (ua.indexOf('android') > -1) && (ua.indexOf('mobile') == -1);


// 使用例
if (isiPhone) {
        alert("当サイトを利用したウェブサイトの閲覧や情報収集については、情報がユーザーの需要に適合するものか否か、情報の保存や複製その他ユーザーによる任意の利用方法により必要な法的権利を有しているか否か、著作権、秘密保持、名誉毀損、品位保持および輸出に関する法規その他法令上の義務に従うことなど、ユーザーご自身の責任において行っていただきますようお願いいたします。")
        alert("当サイトの御利用につき、何らかのトラブルや損失・損害等につきましては一切責任を問わないものとします。");
}
if (isiPad) {
    alert("当サイトを利用したウェブサイトの閲覧や情報収集については、情報がユーザーの需要に適合するものか否か、情報の保存や複製その他ユーザーによる任意の利用方法により必要な法的権利を有しているか否か、著作権、秘密保持、名誉毀損、品位保持および輸出に関する法規その他法令上の義務に従うことなど、ユーザーご自身の責任において行っていただきますようお願いいたします。")
    alert("当サイトの御利用につき、何らかのトラブルや損失・損害等につきましては一切責任を問わないものとします。");
}
if (isAndroid) {
    alert("当サイトを利用したウェブサイトの閲覧や情報収集については、情報がユーザーの需要に適合するものか否か、情報の保存や複製その他ユーザーによる任意の利用方法により必要な法的権利を有しているか否か、著作権、秘密保持、名誉毀損、品位保持および輸出に関する法規その他法令上の義務に従うことなど、ユーザーご自身の責任において行っていただきますようお願いいたします。")
    alert("当サイトの御利用につき、何らかのトラブルや損失・損害等につきましては一切責任を問わないものとします。");
}
if (isAndroidTablet) {
    alert("当サイトを利用したウェブサイトの閲覧や情報収集については、情報がユーザーの需要に適合するものか否か、情報の保存や複製その他ユーザーによる任意の利用方法により必要な法的権利を有しているか否か、著作権、秘密保持、名誉毀損、品位保持および輸出に関する法規その他法令上の義務に従うことなど、ユーザーご自身の責任において行っていただきますようお願いいたします。")
    alert("当サイトの御利用につき、何らかのトラブルや損失・損害等につきましては一切責任を問わないものとします。");
}
else {
    alert("当サイトを利用したウェブサイトの閲覧や情報収集については、情報がユーザーの需要に適合するものか否か、情報の保存や複製その他ユーザーによる任意の利用方法により必要な法的権利を有しているか否か、著作権、秘密保持、名誉毀損、品位保持および輸出に関する法規その他法令上の義務に従うことなど、ユーザーご自身の責任において行っていただきますようお願いいたします。")
    alert("当サイトの御利用につき、何らかのトラブルや損失・損害等につきましては一切責任を問わないものとします。");
    location.href = "index.html";
}