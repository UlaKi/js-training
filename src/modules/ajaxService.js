const ajaxService = (term)=>{
    const url = `https://dog.ceo/api/breed/${term}/images`
    return fetch(`${url}`)
        .then(response=>response.json())
}

export default ajaxService