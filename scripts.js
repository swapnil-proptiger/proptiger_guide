




function list(link,content){
    this.link=link;
    this.content=content;
    
    
}

list.prototype.createlist=function() {
    
    var firstnav= document.getElementsByClassName("navi")[0];
    var li=document.createElement("li");
    li.className="inl";
    var a=document.createElement("a");
    a.href=this.link;
    a.className="navitem";
    a.appendChild(document.createTextNode(this.content));
    li.appendChild(a);
    firstnav.insertBefore(li,firstnav.childNodes[0]);

    
    return firstnav;
}

function creaList() {
    var obj1=new list('https://www.proptiger.com/guide',"ALL");
    obj1.createlist();
    var obj2=new list('https://www.proptiger.com/guide/buy-sell-move-property',"BUY & SELL");
    obj2.createlist();
    var obj3=new list('https://www.proptiger.com/guide/city',"CITY");
    obj3.createlist();
    var obj4=new list('https://www.proptiger.com/guide/living',"LIVING");
    obj4.createlist();
    var obj5=new list('https://www.proptiger.com/guide/nri',"NRI");
    obj5.createlist();
    var obj6=new list('https://www.proptiger.com/guide/news-views',"NEWS & VIEWS");
    obj6.createlist();
    var obj7=new list('https://www.proptiger.com/guide/legal-taxes-laws',"LEGAL");
    obj7.createlist();
    var obj8=new list('https://www.proptiger.com/guide/budget-real-estate-all-you-need-to-know',"BUDGET 2018");
    obj8.createlist();
}






function createHeader(){

	var container= document.createElement('div');

	var heading1= document.createElement('div');

	var centered=document.createElement('div');

	var cent2=document.createElement('div');

	var cent3=document.createElement('span');


	container.className="container";

	heading1.className="heading1";

	centered.className="centered";

	cent2.className="cent2";

	cent3.className="cent3";


	document.getElementsByTagName("header")[0].appendChild(container);

	document.getElementsByClassName("container")[0].appendChild(heading1);

	document.getElementsByClassName("heading1")[0].appendChild(centered);

	document.getElementsByClassName("centered")[0].innerHTML="PROPGUIDE - A Complete Property Guide";

	document.getElementsByClassName("heading1")[0].appendChild(cent2);

	document.getElementsByClassName("cent2")[0].innerHTML="#happy";

	document.getElementsByClassName("cent2")[0].appendChild(cent3);

	document.getElementsByClassName("cent3")[0].innerHTML="home";






}

createHeader();
creaList();



