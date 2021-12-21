const allCandidates = "http://localhost:8080/api/candidate/candidates";
fetch(allCandidates)
  .then((response) => response.json())
  .then((candidates) => {
    for (let i = 0; i < candidates.length; i++) {
      const candidateDiv = document.getElementById("candidateList");

      let candidateName = candidates[i].name;
      let candidateParty = candidates[i].party;

      const partyDiv = document.createElement("p");
      const nameDiv = document.createElement("h5");

      const deleteButton = document.createElement("BUTTON");
      deleteButton.innerHTML = "Delete";

      deleteButton.addEventListener("click", function () {
        deleteCandidate(candidates[i].id);
        alert("Candidate deleted");
      });

      nameDiv.innerHTML = candidateName;
      partyDiv.innerHTML = candidateParty;

      candidateDiv.appendChild(nameDiv);
      candidateDiv.appendChild(partyDiv);
      candidateDiv.appendChild(deleteButton);
    }
  });

const addUrl = "http://localhost:8080/api/candidate";

function addCandidate(municipality, name, party, zip) {
  const newCandidate = {
    municipality: municipality,
    name: name,
    party: party,
    zip: zip,
  };
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newCandidate),
  };

  fetch(addUrl, options)
    .then((data) => {
      if (!data.ok) {
        throw Error(data.status);
      }
      return data.json();
    })
    .then((update) => {
      console.log(update);
    })
    .catch((e) => {
      console.log(e);
    });
}

const addButton = document.querySelector(".addButton");

addButton.addEventListener("click", function () {
  const municipality = document.querySelector(".municipality").value;
  const name = document.querySelector(".name").value;
  const party = document.querySelector(".party").value;
  const zip = document.querySelector(".zip").value;

  addCandidate(municipality, name, party, zip);
  alert("Candidate added");
});


function deleteCandidate(id) {
  fetch("http://localhost:8080/api/candidate/" + id, {
    method: "DELETE",
  })
    .then((res) => res.text()) // or res.json()
    .then((res) => console.log(res));
}


