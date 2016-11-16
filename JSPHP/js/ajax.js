/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function makeRequest(url, verb, data, callback) {
    var httpRequest = new XMLHttpRequest();

    httpRequest.open(verb, url);


    //allows get or post
    if (verb === 'GET') {
        httpRequest.send(null);
    } else
    {
        httpRequest.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        httpRequest.send(data);
    }

    //attatches load an error events with the callback function
    httpRequest.addEventListener('load', callback.bind(httpRequest));
    httpRequest.addEventListener('error', callback.bind(httpRequest));
}


//does the same as above but as a promise with resolve and reject functions
function makeRequestPromise(url, verb, data) {

    var promise = new Promise(httpPromise);

    function httpPromise(resolve, reject) {

        var httpRequest = new XMLHttpRequest();

        httpRequest.open(verb, url, true);

         if (verb === 'GET') {
            httpRequest.send(null);
        } else
        {
            httpRequest.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            httpRequest.send(data);
        }

        //attatches load an error events with the appropriate function
        httpRequest.addEventListener('load', httpResolve.bind(httpRequest));
        httpRequest.addEventListener('error', httpReject.bind(httpRequest));
        
        
        function httpResolve(){
            //preforms resolve function when status is in the 200 (ok)
            if (this.status >= 200 && this.status < 300){
                resolve(JSON.parse(this.response));
            }
            else{
                //if status is not in the 200's preforms reject function
                reject(this.status.Text);
            }
        }
        
        function httpReject(){
            reject(this.statusText);
        }

    }

    return promise;
}





