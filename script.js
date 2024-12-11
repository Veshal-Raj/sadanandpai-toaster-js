const hPosition = document.getElementById('horizontal-position');
const vPosition = document.getElementById('vertical-position');
const toastType = document.getElementById('toast-type');
const toastMsg = document.getElementById('toast-msg');
const slider = document.getElementById('toast-range');
const showBtn = document.getElementById('show-toast')
const topLeftTC = document.querySelector('.top-left');
const topRightTC = document.querySelector('.top-right');
const bottomLeftTC = document.querySelector('.bottom-left');
const bottomRightTC = document.querySelector('.bottom-right');

function showToast() {
    const hPositionVal = hPosition.value;
    const vPositionVal = vPosition.value;
    const tTypeVal = toastType.value;
    const toastMsgVal = toastMsg.value;
    const sliderVal = slider.value; 

    createToast(tTypeVal, hPositionVal, vPositionVal, toastMsgVal, sliderVal)

}

function removeToast(toasterDiv, removeClass, addClass) {
    toasterDiv.classList.remove(removeClass)
    toasterDiv.classList.add(addClass)
    setTimeout(() => {
        toasterDiv.remove();
    }, 500);
}


function ToastBgClr(type) {
    if (type === "success") return "green";
    else if (type === "error") return "red";
    else if (type === "warning") return "yellow";
    else if (type === "info") return "aqua";
    else return "white";
}

function ToastTxtClr(type) {
    if (type === "error" || type === "success") return "white";
    else return "black";
}

function createToast(type, hPositionVal, vPositionVal, toastMsgVal, sliderVal) {
    const toasterDiv = document.createElement('div');
    const closeSpan = document.createElement('span')
    
    closeSpan.textContent = "X";
    closeSpan.style.cursor = "pointer";

    toasterDiv.style.display = "flex";
    toasterDiv.style.backgroundColor = ToastBgClr(type);
    toasterDiv.style.color = ToastTxtClr(type);
    toasterDiv.textContent = toastMsgVal;
    toasterDiv.style.zIndex = "1000";
    toasterDiv.style.padding = "1rem";
    toasterDiv.style.borderRadius = "10px";
    toasterDiv.style.boxShadow = "1px 1px 1px";
    toasterDiv.style.gap = "1rem"

    toasterDiv.append(closeSpan)

    toasterDiv.classList.add('toast');
    
    if (hPositionVal === "left" && vPositionVal === "top"){
        toasterDiv.classList.add('slide-in-left');
        topLeftTC.append(toasterDiv)
        closeSpan.onclick = () => removeToast(toasterDiv, "slide-in-left", "slide-out-left")
    } else if (hPositionVal === "right" && vPositionVal === "top"){
        toasterDiv.classList.add('slide-in-right');
        topRightTC.append(toasterDiv)
        closeSpan.onclick = () => removeToast(toasterDiv, "slide-in-right", "slide-out-right")
    } else if (hPositionVal === "left" && vPositionVal === "bottom"){
        toasterDiv.classList.add('slide-in-left');
        bottomLeftTC.append(toasterDiv)
        closeSpan.onclick = () => removeToast(toasterDiv, "slide-in-left", "slide-out-left")
    }
    if (hPositionVal === "right" && vPositionVal === "bottom"){
        toasterDiv.classList.add('slide-in-right');
        bottomRightTC.append(toasterDiv)
        closeSpan.onclick = () => removeToast(toasterDiv, "slide-in-right", "slide-out-right")
    }

    setTimeout(() => {
        removeToast(toasterDiv, hPositionVal === "left" ? "slide-in-left" : "slide-in-right", hPositionVal === "left" ? "slide-out-left" : "slide-out-right")
    }, sliderVal * 1000);
}


showBtn.addEventListener('click', showToast)