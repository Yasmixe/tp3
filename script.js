
var numero = 1;

function ajouterligne()
{
    const nom = document.getElementById("name").value;
    const prenom = document.getElementById("secondname").value;
    const points = document.getElementById("range").value;
    const tablee = document.getElementById("table");
    const newRow = tablee.insertRow(numero);
    const lines = document.getElementById("ligne");
    const totale = document.getElementById("total");
    const Numberr = newRow.insertCell(0);
    const Name = newRow.insertCell(1);
    const secondname = newRow.insertCell(2);
    const Points = newRow.insertCell(3);
    const Select = newRow.insertCell(4);
    lines.innerHTML = '<p> ${numero} lignes </p>'
    totale.innerHTML = '<p>Totale points = ${points} </p>'
    Numberr.innerHTML = numero ;
    Name.innerHTML = nom;
    secondname.innerHTML = prenom;
    Points.innerHTML = points;
    Select.innerHTML = '<input type="checkbox" name="check" id="">';
    

    document.getElementById("name").value = "";
    document.getElementById("secondname").value = "";
    document.getElementById("range").value = "";
    numero = numero +1;

    const checkbox = newRow.querySelector('input[type="checkbox"]');
    checkbox.addEventListener('change', function() {
        if (checkbox.checked) {
            document.getElementById('remove').addEventListener("click", function() {
                removeline(newRow)
            });
        }
    });



}


   

   


