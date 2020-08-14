window.onload = function () {
    document.getElementById('escrita').addEventListener('blur', name)

}
function name() {
    var nome = document.getElementById('escrita').value

    const xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api.github.com/users/" + nome + "/repos")

    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {

            const obj = JSON.parse(this.responseText)
            document.getElementById('tabela').innerHTML = "";
            for (var i = 0; i < obj.length; i++) {
                document.getElementById('tabela').innerHTML += "<tr><td> Nome: " + obj[i].name + " </td>  <td>Linguagem: " + obj[i].language + "</td><td><a target='_blank'href='" + obj[i].html_url + "'>Link: " + obj[i].html_url + "</a></td> <td>Clonar: <button  onclick='copyToClipboard(this)'> " + obj[i].clone_url + "</button></td></tr>";
            }
            console.log(obj)
        }
    }
    xhr.send()
}

function copyToClipboard(btn) {
    var input = document.createElement("input");
    input.value = btn.innerText;
    console.log(btn.innerText)
    input.id = "input";
    document.body.appendChild(input);
    input.select();
    document.execCommand("copy");
    input.remove();
}