javascript:(function(){
/*var importJs=document.createElement('script');
importJs.setAttribute("type","text/javascript");
importJs.setAttribute("src", 'https://ajax.microsoft.com/ajax/jquery/jquery-3.4.1.min.js');
document.getElementsByTagName("head")[0].appendChild(importJs);*/
function sleep(delay) {
  var start = (new Date()).getTime();
  while ((new Date()).getTime() - start < delay) {
    continue;
  }
}
var ans=[
"对手与球篮之间","15","敏捷度","无冲击力形式","11","葛菲顾俊","8","太极拳","60","5","举重","慢跑或慢走","短促，突然","套路运动","①②③④","13X13的正方形","12","天津","60米计时跑","心理","①②③④","【九大道馆】","体育锻炼","1919","波浪动作","球弹起后的上升期","受到竞赛规则的制约以不伤害对方为原则","落地","两步一吸两步一呼或者三步一吸三步一呼","违反体育道德犯规","2000-2500","可齐可乱","英国伦敦","1999","右架左推","UP","8个","攻彼弱点、避彼锋芒","4.7g","60","210","英国","南密北稀","前脚掌","3","面向两手扶把杆站立","抄防","game","1922","气功、站桩","0.2","1988","强烈，均衡，恰当，和谐","7-11","①③④","1980","永远不能","1987年","1.20—1.40米","1932","个人锦标赛和集体锦标赛","8","1","应判越位犯规","温布尔敦网球公开赛","50CM","五劳七伤往后瞧","3","10","特技","29","跆拳道","场上队长","脚跟","动作和音乐","4-5米","立拳","极点","张德培","对","错","对","错","错","对","错","对","对","对","对","错","错","对","对","对","对","对","错","错","对"

];
var s=$("input[type='radio']");
var nam=[];
var op=[];
for (i=0;i<s.length;++i)
{
	nam.push($("input[type='radio']").eq(i).attr("name"));
	op.push($("input[type='radio']").eq(i).next("label").text());
}
var num=-1,fg=0,bef="-1";
for (i=0;i<s.length;++i)
{
	if (nam[i]!=bef)
	{
		++num;
		fg=0;
		bef=nam[i];
	} 
	if (fg==1) continue;
	if (op[i].includes(ans[num])==true)
	{
		fg=1;
		$("input[type='radio']").eq(i).attr("checked",'checked');
		/*$("input[type='radio']").eq(i).click();*/
		$("input[type='radio']").eq(i).click();
		/*$("li[id=\""+nam[i].substring(0,nam[i].length-2)+"\"]").attr("class","done");*/
	}
}
})();