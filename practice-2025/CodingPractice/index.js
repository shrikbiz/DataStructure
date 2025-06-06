async function getData(name) {
    const apiUrl = `https://api.agify.io/?name=${name}`;
    return fetch(apiUrl)
        .then((response) => {
            if (!response.ok) {
                if (response.status === 404) {
                    throw new Error("Data not found");
                } else if (response.status === 500) {
                    throw new Error("Server error");
                } else {
                    throw new Error("Network response was not ok");
                }
            }
            return response.json();
        })
        .then((data) => {
            return data;
        })
        .catch((error) => {
            console.error("Error:", error);
        });
}

const output = async (input) => {
    const temp = await getData(input);
    const el = document.getElementById("shrikbiz");
    el.innerText = JSON.stringify(temp);
};

function onSubmit() {
    const inputField = document.getElementById("textSubmit");
    const text = inputField.value;
    if (text) output(text);
    inputField.value = "";
}
