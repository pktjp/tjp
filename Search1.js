function myFunction() 
{
  
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName('li');

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1)
	{
      li[i].style.display = "";
    } else 
	{
      li[i].style.display = "none";
    }
  }
}


function myFunction1() {
	document.getElementById('demo').style.display='block';
	document.getElementById('demo').style.marginLeft='38%';
	document.getElementById('demo2').style.display='none';
	document.getElementById('demo3').style.display='none';
	document.getElementById('demo4').style.display='none';
	document.getElementById('demo5').style.display='none';
	document.getElementById('demo6').style.display='none';
	document.getElementById('demo7').style.display='none';
	document.getElementById('demo8').style.display='none';
	
}

function myFunction2() {
	document.getElementById('demo2').style.display='block';
	document.getElementById('demo2').style.marginLeft='38%';
	document.getElementById('demo').style.display='none';
	document.getElementById('demo3').style.display='none';
	document.getElementById('demo4').style.display='none';
	document.getElementById('demo5').style.display='none';
	document.getElementById('demo6').style.display='none';
	document.getElementById('demo7').style.display='none';
	document.getElementById('demo8').style.display='none';
	
}

function myFunction3() {
	document.getElementById('demo3').style.display='block';
	document.getElementById('demo3').style.marginLeft='38%';
	document.getElementById('demo').style.display='none';
	document.getElementById('demo2').style.display='none';
	document.getElementById('demo4').style.display='none';
	document.getElementById('demo5').style.display='none';
	document.getElementById('demo6').style.display='none';
	document.getElementById('demo7').style.display='none';
	document.getElementById('demo8').style.display='none';
	
}

function myFunction4() {
	document.getElementById('demo4').style.display='block';
	document.getElementById('demo4').style.marginLeft='38%';
	document.getElementById('demo').style.display='none';
	document.getElementById('demo2').style.display='none';
	document.getElementById('demo3').style.display='none';
	document.getElementById('demo5').style.display='none';
	document.getElementById('demo6').style.display='none';
	document.getElementById('demo7').style.display='none';
	document.getElementById('demo8').style.display='none';
	
}

function myFunction5() {
	document.getElementById('demo5').style.display='block';
	document.getElementById('demo5').style.marginLeft='38%';
	document.getElementById('demo').style.display='none';
	document.getElementById('demo2').style.display='none';
	document.getElementById('demo3').style.display='none';
	document.getElementById('demo4').style.display='none';
	document.getElementById('demo6').style.display='none';
	document.getElementById('demo7').style.display='none';
	document.getElementById('demo8').style.display='none';
	
}

function myFunction6() {
	document.getElementById('demo6').style.display='block';
	document.getElementById('demo6').style.marginLeft='38%';
	document.getElementById('demo').style.display='none';
	document.getElementById('demo2').style.display='none';
	document.getElementById('demo3').style.display='none';
	document.getElementById('demo4').style.display='none';
	document.getElementById('demo5').style.display='none';
	document.getElementById('demo7').style.display='none';
	document.getElementById('demo8').style.display='none';
	
}

function myFunction7() {
	document.getElementById('demo7').style.display='block';
	document.getElementById('demo7').style.marginLeft='38%';
	document.getElementById('demo').style.display='none';
	document.getElementById('demo2').style.display='none';
	document.getElementById('demo3').style.display='none';
	document.getElementById('demo4').style.display='none';
	document.getElementById('demo5').style.display='none';
	document.getElementById('demo6').style.display='none';
	document.getElementById('demo8').style.display='none';
	
}

function myFunction8() {
	document.getElementById('demo8').style.display='block';
	document.getElementById('demo8').style.marginLeft='38%';
	document.getElementById('demo').style.display='none';
	document.getElementById('demo2').style.display='none';
	document.getElementById('demo3').style.display='none';
	document.getElementById('demo4').style.display='none';
	document.getElementById('demo5').style.display='none';
	document.getElementById('demo6').style.display='none';
	document.getElementById('demo7').style.display='none';
	
}



