// Promise

var isTrue = true;

var realPromise = new Promise(
    function (resolve, reject) {
        if (isTrue) {
            let foo = {
                bar: 'Something Bar',
                baz: 'Something Baz'
            };
            resolve(foo); // All done
        } else {
            var reason = new Error('Promise is not true');
            reject(reason); // reject
        }

    }
);

// Вызываем промис
var testPromise = function () {
    realPromise
        .then(function (response) {
            // response
            console.log(response);
         // output: Object { bar: "Something Bar", baz: "Something Baz" }
        })
        .catch(function (error) {
            // oops, error
            console.log(error.message);
         // output: 'Promise is not true'
        });
};

testPromise();

