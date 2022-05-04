var axios = require('axios');

var config = {
    method: 'get',
    url: 'https://www.nseindia.com/api/option-chain-indices?symbol=NIFTY',
    headers: {
        'Cookie': 'ak_bmsc=FC6B4FD7536DF8463351F87BEFC32DFB~000000000000000000000000000000~YAAQMyEPF/A6xX2AAQAAQoO0gA++sJHZiMCCtx10pywWHQDuOIvprqIeTFp2p46UAvrFQCkcG/orKMzGzFbmAOBV/bvYO/LHkDr/zkjj4qCSrvEUknSI87+HZoxua4zgI347hAYqpfDcIXuYSar0vXfOu23XgRyP8ryCX/pn6MNr3WwhIKQkz76c/2XKM7+BblvizZgQatSOqbK12CAOZumdUus8qIJL+5vHbKOV/k9PzP2eygeA+iWLGDkM6qbyyaKBsIUvP8x4VCC9mIjSTeUlNtL/dCzwn9eyOB1c6mYTULEBMgOB8hkvv9ZcJPOyzYw0pT8fLnVqbHUnLCMzGPTjBDj52bLhXG6P8ZQ+BuueV5qn5e+OpNSoUGN5zLE=; bm_sv=0AA14422DF56C52EDBBBEC9B0C78D2D7~YAAQMyEPF+CWxX2AAQAA4xW+gA+cmE31+4mLOuO06wfxyUqFrJOHhlKJ51VLT9FC5qIY+HOPfJdm1BjjPmT/Q79w2SuBUidSk07HJZJm0cvdhtRp1NZ8IN69k/ldawTM1xEs1B3cpJqrBMbG0g+N/aZCZh+6+tGbwPCgmRSRxe6vGEL9KTDtKGs9GgEzUGGQRYY8s++VuDMmziJf0ruioqCFp0IHMRiwyj817ApdMM2u1r3S2xTAhedrYUN5by7890g=~1'
    }
};

axios(config)
    .then(function (response) {
        console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
        console.log(error);
    });
