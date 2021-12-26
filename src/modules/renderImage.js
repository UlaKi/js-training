const renderImage = (dog) => {
    let element = document.createElement('div');
    element.className = 'col-12 col-sm-6 col-md-4 col-lg-3';
    element.innerHTML = `
<div class="image-wraper">
    <img class="img-fluid" src="${dog}" alt="dog"/>
</div>
`;

    return element;
}
export default renderImage