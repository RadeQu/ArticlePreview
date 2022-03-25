const shareBtn = document.getElementById("Btn");
const iconShare = document.getElementById("ShareIcon");
const optionsToShareObject = document.getElementById("shareOptionsDiv");

const showShare = () => {
	if (true) 
	shareBtn.classList.add("darkBackgroundColorIcon");
	shareBtn.classList.remove("lightBackgroundColorIcon")
	iconShare.classList.toggle("iconColorChange");
};
const showNormal = () => {
	if (true) shareBtn.classList.add("lightBackgroundColorIcon");
	shareBtn.classList.remove("darkBackgroundColorIcon")
	iconShare.classList.toggle("iconColorChange");
};
const ShowBoxWithOptions = () => {
	if (true) optionsToShareObject.classList.add("elementWithShareActive");
};
const HideBoxWithOptions = () => {
	if (true) {
		optionsToShareObject.classList.remove("elementWithShareActive");
	}
};

shareBtn.addEventListener("mouseover", showShare);
shareBtn.addEventListener("mouseout", showNormal);
shareBtn.addEventListener("mouseenter", ShowBoxWithOptions);
optionsToShareObject.addEventListener("pointerleave", HideBoxWithOptions);
