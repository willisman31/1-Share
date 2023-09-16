const Http = new XMLHttpRequest();
const url = '192.168.0.255';
Http.open("POST", url)

Http.onreadystatechange=(e)=>{
    console.log(Http.responseText)
}