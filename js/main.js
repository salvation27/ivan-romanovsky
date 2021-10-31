// $(".teach_acc_open").fadeIn(1000);
let wowanim1 = document.querySelector('.teach_acc_open1');
let wowanim2 = document.querySelector('.teach_acc_open2');
let wowanim3 = document.querySelector('.teach_acc_open3');
let box1 = document.querySelector('.teach_acc_text1');
let box2 = document.querySelector('.teach_acc_text2');
let box3 = document.querySelector('.teach_acc_text3');
let header = document.querySelector('#header');
let text1 = document.querySelector('.header_mid_title');
let text2 = document.querySelector('.header_mid_title_2');
let btn_thank = document.querySelector('.mod_srvices_button');
let modal = document.querySelector('#mod_srvices')
let check1 = document.querySelector('.free_cheсk_1');
let check2 = document.querySelector('.free_cheсk_2');


check1.onclick = function (){
	check1.classList.toggle('active');
	check2.classList.remove('active');
}
check2.onclick = function (){
	check2.classList.toggle('active');
	check1.classList.remove('active');
}


box1.onmouseover = function () {
	wowanim1.classList.add("active");
}
wowanim1.onmouseout = function () {
	wowanim1.classList.remove("active");
}
box2.onmouseover = function () {
	wowanim2.classList.add("active");
}
wowanim2.onmouseout = function () {
	wowanim2.classList.remove("active");
}

box3.onmouseover = function () {
	wowanim3.classList.add("active");
}
wowanim3.onmouseout = function () {
	wowanim3.classList.remove("active");
}
let timer = 0;
function slideHead() {
	timer = setTimeout(function (){
		header.classList.toggle('head2');
		slideHead();
	}
	, 5000)
}
slideHead();

function change1 (){
	text1.style.setProperty('display', 'block');
	text2.style.setProperty('display', 'none');
	shangeSlide1();
}
change1();

function change2 (){
	text1.style.setProperty('display', 'none');
	text2.style.setProperty('display', 'block');
	shangeSlide2();
}
function shangeSlide1() {
	timer = setTimeout(change2, 5000)
}
function shangeSlide2() {
	timer = setTimeout(change1, 5000)
}
btn_thank.onclick = function (){
	modal.style.setProperty('display', 'none')
}


var t;
function up() {
	var top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);
	if(top > 0) {
		window.scrollBy(0,-50);
		t = setTimeout('up()',20);
	} else clearTimeout(t);
	return false;
}
// box.onclick = function () {
	
// }
// wowanim.onclick = function () {
// 	wowanim.classList.remove('active');
// }


$(document).ready(function() {

	//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "../sent.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});