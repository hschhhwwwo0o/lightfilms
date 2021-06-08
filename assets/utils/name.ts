function h1(name: string): [string, string] {
    const firstName: string = name.split(" ")[0];
    const secondName: string = name.split(" ")[1];

    if(firstName.length >= secondName.length) {
        if(secondName.length < 4) return [secondName, firstName];
        return [firstName, secondName];
    } else if(secondName.length >= firstName.length) {
        if(firstName.length < 4) return [firstName, secondName];
        return [secondName, firstName];
    }
}

export default h1;