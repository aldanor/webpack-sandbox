var div = document.createElement('div');
div.innerHTML = 'app.js';
document.getElementsByTagName('body')[0].appendChild(div);

function dynamic_require(name) {
    if (name == 'v1') {
        require('bundle?name=dynamic!./v1');
    } else if (name == 'v2') {
        require('bundle?name=dynamic!./v2')
    }
}

dynamic_require('v2');
