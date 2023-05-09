<!--//



// Business Overview

$(document).ready(function () {
	$("a.SimpleModalTh").click(function(e){
		e.preventDefault();
		// load the  form using ajax
		var currentHref	=	this.href;
		$.get(currentHref, function(data){
			// create a modal dialog with the data
			$(data).modal({
				close: true,
				overlayId: 'ModalOverlay',
				containerId: 'ModalContainer',
				iframeId: 'ModalIframe'
			});
			
			     if (currentHref.indexOf("01.php")>-1) { showTabBu("/th/02business_overview/data.php?F=_tp_01_data_01.html"); }
			else if (currentHref.indexOf("02.php")>-1) { showTabBu("/th/02business_overview/data.php?F=_tp_02_data_01.html"); }
			else if (currentHref.indexOf("03.php")>-1) { showTabBu("/th/02business_overview/data.php?F=_tp_03_data_01.html"); }
			else if (currentHref.indexOf("04.php")>-1) { showTabBu("/th/02business_overview/data.php?F=_tp_04_data_01.html"); }
			else if (currentHref.indexOf("05.php")>-1) { showTabBu("/th/02business_overview/data.php?F=_tp_05_data_01.html"); }
			else if (currentHref.indexOf("06.php")>-1) { showTabBu("/th/02business_overview/data.php?F=_tp_06_data_01.html"); }			
		});
	});



	$("a.SimpleModalEn").click(function(e){
		e.preventDefault();
		// load the  form using ajax
		var currentHref	=	this.href;
		$.get(currentHref, function(data){
			// create a modal dialog with the data
			$(data).modal({
				close: true,
				overlayId: 'ModalOverlay',
				containerId: 'ModalContainer',
				iframeId: 'ModalIframe'
			});
			
			     if (currentHref.indexOf("01.php")>-1) { showTabBu("/en/02business_overview/data.php?F=_tp_01_data_01.html"); }
			else if (currentHref.indexOf("02.php")>-1) { showTabBu("/en/02business_overview/data.php?F=_tp_02_data_01.html"); }
			else if (currentHref.indexOf("03.php")>-1) { showTabBu("/en/02business_overview/data.php?F=_tp_03_data_01.html"); }
			else if (currentHref.indexOf("04.php")>-1) { showTabBu("/en/02business_overview/data.php?F=_tp_04_data_01.html"); }
			else if (currentHref.indexOf("05.php")>-1) { showTabBu("/en/02business_overview/data.php?F=_tp_05_data_01.html"); }
			else if (currentHref.indexOf("06.php")>-1) { showTabBu("/en/02business_overview/data.php?F=_tp_06_data_01.html"); }			
		});
	});


});



function showBusinessOverviewTh (selObj) {
	if (selObj.options[selObj.selectedIndex].value != "") {

		var currentHref	=	selObj.options[selObj.selectedIndex].value;
		$.get(currentHref, function(data){
			// create a modal dialog with the data
			$(data).modal({
				close: true,
				overlayId: 'ModalOverlay',
				containerId: 'ModalContainer',
				iframeId: 'ModalIframe'
			});			
			     if (currentHref.indexOf("01.php")>-1) { showTabBu("/th/02business_overview/data.php?F=_tp_01_data_01.html"); }
			else if (currentHref.indexOf("02.php")>-1) { showTabBu("/th/02business_overview/data.php?F=_tp_02_data_01.html"); }
			else if (currentHref.indexOf("03.php")>-1) { showTabBu("/th/02business_overview/data.php?F=_tp_03_data_01.html"); }
			else if (currentHref.indexOf("04.php")>-1) { showTabBu("/th/02business_overview/data.php?F=_tp_04_data_01.html"); }
			else if (currentHref.indexOf("05.php")>-1) { showTabBu("/th/02business_overview/data.php?F=_tp_05_data_01.html"); }
			else if (currentHref.indexOf("06.php")>-1) { showTabBu("/th/02business_overview/data.php?F=_tp_06_data_01.html"); }			
		});

	}
}



function showBusinessOverviewEn (selObj) {
	if (selObj.options[selObj.selectedIndex].value != "") {

		var currentHref	=	selObj.options[selObj.selectedIndex].value;
		$.get(currentHref, function(data){
			// create a modal dialog with the data
			$(data).modal({
				close: true,
				overlayId: 'ModalOverlay',
				containerId: 'ModalContainer',
				iframeId: 'ModalIframe'
			});			
			     if (currentHref.indexOf("01.php")>-1) { showTabBu("/en/02business_overview/data.php?F=_tp_01_data_01.html"); }
			else if (currentHref.indexOf("02.php")>-1) { showTabBu("/en/02business_overview/data.php?F=_tp_02_data_01.html"); }
			else if (currentHref.indexOf("03.php")>-1) { showTabBu("/en/02business_overview/data.php?F=_tp_03_data_01.html"); }
			else if (currentHref.indexOf("04.php")>-1) { showTabBu("/en/02business_overview/data.php?F=_tp_04_data_01.html"); }
			else if (currentHref.indexOf("05.php")>-1) { showTabBu("/en/02business_overview/data.php?F=_tp_05_data_01.html"); }
			else if (currentHref.indexOf("06.php")>-1) { showTabBu("/en/02business_overview/data.php?F=_tp_06_data_01.html"); }			
		});

	}
}






function showTabBu(strUrl) {
	//hideAllBu();
	$('#BuContainner').hide();
	$.get(strUrl, function(data){		
		$('#BuContainner').html(data);
		$('#BuContainner').fadeIn();
	});
}
// /Business Overview






var strCfgAjaxLoaderImage		=	"/images/icon/ajax-loader.gif";
var strCfgAjaxLoaderImageBig	=	"/images/icon/ajax-loader-big.gif";



function PopUpWindow(URL, N, W, H, S) { // name, width, height, scrollbars
	var winleft	=	(screen.width - W) / 2;
	var winup	=	(screen.height - H) / 2;
	winProp		=	'width='+W+',height='+H+',left='+winleft+',top='+winup+',scrollbars='+S+',resizable' + ',status=yes'
	Win			=	window.open(URL, N, winProp)
	if (parseInt(navigator.appVersion) >= 4) { Win.window.focus(); }
}



function confirmBox(strUrl) {
	PopUpWindow(strUrl,'SHConfirmBox',500,150,'no');
}


function alphaCheck(objTextField,strDefaultValue) {
	var Sender	=	objTextField.value;
	var alphaRE = /^[a-zA-Z0-9]+$/;
	if (!alphaRE.test(Sender) && Sender != ""){
		alert("only a-z, A-Z, 0-9");
		objTextField.value = strDefaultValue;
	}
}


function setFormValue(objName,strValue){
/* by LookHin (khwanchai1979 [at] hotmail.com) */
	var arrObj = document.getElementsByName(objName);
	for(i=0;i<arrObj.length;i++){
		arrObjCheck = arrObj[i];
		if(arrObjCheck.type == "text" || arrObjCheck.type == "textarea" || arrObjCheck.type == "hidden") arrObjCheck.value = strValue;
		if(arrObjCheck.type == "select-one") for(j=0;j<arrObjCheck.length;j++) if(arrObjCheck.options[j].value == strValue) arrObjCheck.options[j].selected = true;
		if(arrObjCheck.type == "select-multiple") for(j=0;j<arrObjCheck.length;j++) if(strValue.indexOf("|"+arrObjCheck.options[j].value+"|")  > -1) arrObjCheck.options[j].selected = true;
		if(arrObjCheck.type == "radio") if(arrObjCheck.value == strValue) arrObjCheck.checked = true;
		if(arrObjCheck.type == "checkbox") if(arrObjCheck.value == strValue) arrObjCheck.checked = true;
	}
}



function jumpMenu(targ,selObj,restore){   
	if (selObj.options[selObj.selectedIndex].value != "") {
		eval(targ+".location='"+selObj.options[selObj.selectedIndex].value+"'");
		if (restore) selObj.selectedIndex=0;
	}
}

function replaceString (strString,strFind,strReplace) {
	while (strString.indexOf(strFind)>-1) {
		intPosition= strString.indexOf(strFind);
		strString = "" + (strString.substring(0, intPosition) + strReplace + 
		strString.substring((intPosition + strFind.length), strString.length));
	}
	return strString;
}


var httpRequest = false;
function makeRequest(url) {
	httpRequest = false;

	if (window.XMLHttpRequest) { // Mozilla, Firefox, Opera, etc. 
		httpRequest = new XMLHttpRequest();
		if (httpRequest.overrideMimeType) {
			httpRequest.overrideMimeType('text/xml');
		}
	} else if (window.ActiveXObject) { // IE
		try {
			httpRequest = new ActiveXObject("Msxml2.XMLHTTP");
		} catch (e) {
			try {
			httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
			} catch (e) {}
		}
	}

	if (!httpRequest) {
		alert('Cannot create an XMLHTTP instance');
		return false;
	}
	httpRequest.onreadystatechange = getContents;
	httpRequest.open('GET', url, true);
	httpRequest.send(null);
}

/*
function getContents() {
	if (httpRequest.readyState == 4) {
		if (httpRequest.status == 200) {
			var xmlDoc = httpRequest.responseXML;

			if (window.ActiveXObject) { // IE
				var strData1 = xmlDoc.getElementsByTagName("root")[0].childNodes.item(0).childNodes.item(0);
			}
			else { // Mozilla, Firefox, Opera, etc. 
				var strData1 = xmlDoc.getElementsByTagName("root")[0].childNodes.item(1).childNodes.item(0);
			}
			document.getElementById('divRoundId').innerHTML = strData1.data;
		}
		else {
			alert('There was a problem with the request.');
		}
	}
}
*/

function setDiv (strDivName,strDivData) {
	if (document.getElementById(strDivName)) {
		document.getElementById(strDivName).innerHTML = strDivData;
	}

}

function getDiv (strDivName) {
	if (document.getElementById(strDivName)) {
		return document.getElementById(strDivName).innerHTML;
	}
}

function clearDiv (strDivName) {
	if (document.getElementById(strDivName)) {
		document.getElementById(strDivName).innerHTML = '';
	}
}

function hideDiv (strDivName) {
	if (document.getElementById(strDivName)) {
		document.getElementById(strDivName).style.display = 'none';
	}
}

function showDiv (strDivName) {
	if (document.getElementById(strDivName)) {
		document.getElementById(strDivName).style.display = '';
	}
}

function showAjaxLoader (strDivName) {
	if (document.getElementById(strDivName)) {
		document.getElementById(strDivName).innerHTML = '<img src="'+ strCfgAjaxLoaderImage +'" align="absmiddle" border="0">';
	}
}

function showAjaxLoaderBig (strDivName) {
	if (document.getElementById(strDivName)) {
		document.getElementById(strDivName).innerHTML = '<img src="'+ strCfgAjaxLoaderImageBig +'" align="absmiddle" border="0">';
	}
}

function getDivDisplay (strDivName) {
	if (document.getElementById(strDivName)) {
		return document.getElementById(strDivName).style.display;
	}
}

var intIDivTemp = 0;
function setDivTemp () {
	intIDivTemp++;
	return "divTemp" + intIDivTemp;
}

function preloadImages() {
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

preloadImages(strCfgAjaxLoaderImage,strCfgAjaxLoaderImageBig);




function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}

function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}















function Set_Cookie( name, value, expires, path, domain, secure ) 
{
// set time, it's in milliseconds
var today = new Date();
today.setTime( today.getTime() );

/*
if the expires variable is set, make the correct 
expires time, the current script below will set 
it for x number of days, to make it for hours, 
delete * 24, for minutes, delete * 60 * 24
*/
if ( expires )
{
expires = expires * 1000 * 60 * 60 * 24;
}
var expires_date = new Date( today.getTime() + (expires) );

document.cookie = name + "=" +escape( value ) +
( ( expires ) ? ";expires=" + expires_date.toGMTString() : "" ) + 
( ( path ) ? ";path=" + path : "" ) + 
( ( domain ) ? ";domain=" + domain : "" ) +
( ( secure ) ? ";secure" : "" );
}


// this function gets the cookie, if it exists
function Get_Cookie( name ) {
	
var start = document.cookie.indexOf( name + "=" );
var len = start + name.length + 1;
if ( ( !start ) &&
( name != document.cookie.substring( 0, name.length ) ) )
{
return null;
}
if ( start == -1 ) return null;
var end = document.cookie.indexOf( ";", len );
if ( end == -1 ) end = document.cookie.length;
return unescape( document.cookie.substring( len, end ) );
}
	
// this deletes the cookie when called
function Delete_Cookie( name, path, domain ) {
if ( Get_Cookie( name ) ) document.cookie = name + "=" +
( ( path ) ? ";path=" + path : "") +
( ( domain ) ? ";domain=" + domain : "" ) + ";expires=Thu, 01-Jan-1970 00:00:01 GMT";
}

/*
<script type="text/javascript">
Set_Cookie( 'test', 'it works', '', '/', '', '' );
if ( Get_Cookie( 'test' ) ) alert( Get_Cookie('test'));
Delete_Cookie('test', '/', '');
( Get_Cookie( 'test' ) ) ? alert( Get_Cookie('test')) : 
alert( 'it is gone');
</script>
*/


//-->
