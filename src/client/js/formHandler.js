function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field


    let text = document.getElementById('name').value
    Client.text
    let regexp = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
    if (!regexp.test(text)) {
        document.getElementById("validate").innerHTML = "Enter valid url";
        return false

    }
    document.getElementById("validate").innerHTML = "";




    console.log(text)

    console.log("::: Form Submitted :::")
    fetch('http://localhost:8080/api', {
            method: 'POST',

            body: JSON.stringify({
                text
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(res => res.json())
        .then(function (data) {
            console.log("Updating the UI!");

            document.getElementById("polarity").innerHTML = data.polarity;
            document.getElementById("subjectivity").innerHTML = data.subjectivity;
            document.getElementById("polarity_confidence").innerHTML =
                data.polarity_confidence;
            document.getElementById("subjectivity_confidence").innerHTML =
                data.subjectivity_confidence;


            console.log(data);

        }).catch(err => console.log(err));

}



export {
    handleSubmit
}