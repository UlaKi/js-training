import ajaxService from "./ajaxService";
import renderImage from "./renderImage";

const searchDogs = () => {
    document.querySelector('form').addEventListener('submit', (e) => {
        e.preventDefault()
        const searchTerm = document.querySelector('.term').value;
        ajaxService(searchTerm)
            .then((result) => {
                console.log(result)
                if (result.status === "success"){
                    document.querySelector('main .result').innerHTML = '<span></span>';
                    result.message.forEach(dog => {
                        document.querySelector('main .result').appendChild(renderImage(dog));
                    })
                }
                else {
                    document.querySelector('main .result').innerHTML = '<div lang="lt" class="col">Šuns veislė nerasta. Patikrinkite rašybą!</div>';
                }

            })
    })
}
export default searchDogs