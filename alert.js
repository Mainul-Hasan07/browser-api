console.log('I am here')

// alert('Ma is coming !!')
const maComing = () => {
    alert('ammu is coming.Open the book');
}

const askPicnic = () => {
    const response = confirm('Are you going to picnic?');
    console.log(response);
    if (response) {
        alert('amake fee ta Bkash kore de');
    }
    else {
        console.log('DGM !! Doore giye mor');
    }
}

const askName = () => {
    const name = prompt("what's your name")
    if (name) {
        console.log(name);
    }
}