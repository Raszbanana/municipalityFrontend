const MpUrl = "http://localhost:8080/api/candidates"
fetch(MpUrl)
    .then(response => response.json())
    .then(candidates => {
        console.log(candidates);
    })