var tabObjets = document.querySelectorAll('.draggableBox');

for (var i=0; i<tabObjets.length; i++)
{
	tabObjets[i].addEventListener('mousedown', mDown, false);
	document.addEventListener('mousemove', mMove, false);
	tabObjets[i].addEventListener('mouseup', mUp, false);
}

	objet = '';

function mDown(e)
{
	objet = e.currentTarget;
}

function mMove(e)
{
	if (objet != '')
	{
		objet.style.top = e.clientY + "px";
		objet.style.left = e.clientX + "px";
	}
}

function mUp(e)
{
	objet = '';
}