function jsonImport(url) {
    console.log();
    let returnig = fetch(url)
        .then(res => res.json())

    return returnig;
}