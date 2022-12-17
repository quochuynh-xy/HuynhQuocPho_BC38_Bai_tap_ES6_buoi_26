var hoverMe = () => {
    let selector = document.querySelector('h2.heading');
    let content = [...selector.innerHTML];
    let htmlInner = '';
    for (let i= 0; i<content.length; i++) {
        htmlInner += `<span>${content[i]}</span>`;
    }
    selector.innerHTML = htmlInner;
}
window.onload = hoverMe;