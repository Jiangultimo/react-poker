export const HandleContainerHeight = (containerId) => {
    let container = document.getElementById(containerId);
    let navs = document.getElementById('navs');
    container.style.height = `${window.innerHeight - navs.clientHeight}px`;

}