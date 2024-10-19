const insert = document.getElementById('insert')

window.addEventListener( 'keydown', (e) => {
    insert.innerHTML = `
    <div class='color'>
    <table>
    <tr>
        <th>key</th>
        <th>keyCode</th>
        <th>key</th>
    </tr>
    <tr>
        <td>${e.key === " " ? "space" : e.key}</td>
        <td>M${e.keyCode}</td>
        <td>${e.code}</td>
    </tr>
    </table>
    </div>  
    `
})