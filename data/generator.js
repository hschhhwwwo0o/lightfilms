const add = document.querySelector("#add");

add.addEventListener( "click", (event) => {

    event.preventDefault()

    let inputs = document.querySelectorAll('input');

    const JSON_FORMAT = {
        films: [],
        persons: [],
    }

        const person = {
            id: inputs[0].value,
            name: inputs[1].value
        }

        console.log(person);

    const file = new Blob(

        [JSON.stringify(person)], {
            type: 'application/json'
        }

    )

    const link = document.querySelector("#download")

    link.setAttribute('href', URL.createObjectURL(file))
    link.setAttribute('download', 'data.json')
    URL.revokeObjectURL(file)

    const file2 = new Blob(

        [JSON.stringify(person)], {
            type: 'application/json'
        }

    )

    console.log("Compile");

} )