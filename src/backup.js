// client.getEntries({
//     content_type: 'hakkimizda',
//     locale: 'en-GB'
// })
//     .then((response) => console.log(response.items))
//     .catch(console.error)

/*client.getContentType('hakkmizda')
    .then((contentType) => console.log(contentType))
    .catch(console.error);*/

/*
client.getSpace('xy2pzptac37o')
    .then((space) => space.getLocale('en-GB'))
    .then((locale) => console.log(locale))
    .catch(console.error)
*/

// Hem dile göre hem kategoriye göre seçim
/*client.getEntries({
    locale: 'en-GB'
})
    .then((response) =>
    {
        response.items.forEach(entry => {
            // Home içeriğine göre alma
            if(entry.sys.contentType.sys.id === "home") {
                console.log(entry.fields)
            }
        })
        console.log(response) })
    .catch(console.error);*/
/*
client.getLocales()
    .then((response) => console.log(response))
    .catch(console.error)*/

/*client.getEntries().then(entries => {
    console.log(entries);
    entries.items.forEach(entry => {

        if(entry.fields) {
            console.log(entry.fields)
        }
    })
});*/