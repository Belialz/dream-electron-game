import got from 'got'

const { data } = (await got
    .post('https://httpbin.org/anything', {
        json: {
            hello: 'world',
        },
    })
    .json()) as { data: '' }

console.log(data)
