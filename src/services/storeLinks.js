// Fetch saved links.
export async function getLinksSave(key) {
    const myLinks = await localStorage.getItem(key)

    let linksSave = JSON.parse(myLinks) || []

    return linksSave
}


// save some link in the local storage
export async function saveLink(key, newLink) {
    let linksStored = await getLinksSave(key)

    const hasLink = linksStored.some(link => link.id === newLink.id)

    if(hasLink) {
        console.log("ESSE LINK JÁ EXISTE NA SUA LISTA!")
        return
    }

    // Add this new link to the list...
    linksStored.push(newLink)
    await localStorage.setItem(key, JSON.stringify(linksStored))
    console.log('LINK SALVO COM SUCESSO')
}


// delete a saved link
export async function deleteLink(links, id) {

    let myLinks = links.filter(item => {
        return (item.id !== id)
    })

    localStorage.setItem('@encurtaLink', JSON.stringify(myLinks))

    return myLinks
}