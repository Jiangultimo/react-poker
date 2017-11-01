export const HandleContainerHeight = (containerId) => {
    console.log('im coding');
    let container = document.getElementById(containerId);
    console.log(container);
    let navs = document.getElementById('navs');
    container.style.height = `${window.innerHeight - navs.clientHeight}px`;

}