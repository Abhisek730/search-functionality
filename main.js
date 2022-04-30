var data;
var List = document.getElementById("List");

async function fetchData() {
    const response = await fetch("http://universities.hipolabs.com/search?country=India");
    data = await response.json();
    console.log(data)
    createRows(data)
}

fetchData()

// to create list elements
function createRows(data) {
    console.log(data)
    data.map((college) => {
        console.log(college)
        const li = document.createElement('li')
        li.classList.add("college-name");
        li.textContent = college.name;
        List.appendChild(li);
    })
}

// search functionality
function searchFunction() {
    var input = document.getElementById("searchBar").value;
    input = input.toLowerCase();
    console.log(input);
    var collegeArray = document.getElementsByClassName("college-name");
    console.log(collegeArray)

    for (i = 0; i < collegeArray.length; i++) {
        if (collegeArray[i].innerHTML.toLowerCase().includes(input)) {
            collegeArray[i].style.display = "list-item"
        } else {
            collegeArray[i].style.display = "none"
        }
    }
}