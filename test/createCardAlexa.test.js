const index = require('../index')

const event = {
    "version": "1.0",
    "session": {
        "new": true,
        "sessionId": "amzn1.echo-api.session.f3aca6fd-3f0a-4ee6-a9f0-0969ccd1594d",
        "application": {
            "applicationId": "amzn1.ask.skill.557eba5b-aaa1-4c3b-afae-3754b9b92df8"
        },
        "user": {
            "userId": "amzn1.ask.account.AGEPRWECC24W4OLUMOC5L2ZHWRGUIHEXY42PGMNAI5Q576CN2KUCBZDAIGHDD6EOCIQPNMMCQEZALE5I6MY74U32DBQDCTPOFM6CIEN6JR2HZWHF4E3IDCDTBG4KQGAMPDR7NCOZYAJE3DLTIGDEW26FOM53ISFY6ELQWGGVYIM3TZYLILVILC4MPXZZXM25UWDATKY32PL3Q4I"
        }
    },
    "context": {
        "AudioPlayer": {
            "playerActivity": "IDLE"
        },
        "Display": {},
        "System": {
            "application": {
                "applicationId": "amzn1.ask.skill.557eba5b-aaa1-4c3b-afae-3754b9b92df8"
            },
            "user": {
                "userId": "amzn1.ask.account.AGEPRWECC24W4OLUMOC5L2ZHWRGUIHEXY42PGMNAI5Q576CN2KUCBZDAIGHDD6EOCIQPNMMCQEZALE5I6MY74U32DBQDCTPOFM6CIEN6JR2HZWHF4E3IDCDTBG4KQGAMPDR7NCOZYAJE3DLTIGDEW26FOM53ISFY6ELQWGGVYIM3TZYLILVILC4MPXZZXM25UWDATKY32PL3Q4I"
            },
            "device": {
                "deviceId": "amzn1.ask.device.AFLXVD26RSDSNKSLJIBKMEGQWJQYCUQDVEY6EKBJ5VPUHRNGQRMAUD5IJMFA7ZG72J5ZGRRIJ3SI6ZGBZ65AS42YHUPNV3NTJWO3FNCMF2Z7HNJAXUROEL6EVF63TMMIFRR3M7WB4Y346M3HAR27PJFK5HZQ",
                "supportedInterfaces": {
                    "AudioPlayer": {},
                    "Display": {
                        "templateVersion": "1.0",
                        "markupVersion": "1.0"
                    }
                }
            },
            "apiEndpoint": "https://api.amazonalexa.com",
            "apiAccessToken": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IjEifQ.eyJhdWQiOiJodHRwczovL2FwaS5hbWF6b25hbGV4YS5jb20iLCJpc3MiOiJBbGV4YVNraWxsS2l0Iiwic3ViIjoiYW16bjEuYXNrLnNraWxsLjU1N2ViYTViLWFhYTEtNGMzYi1hZmFlLTM3NTRiOWI5MmRmOCIsImV4cCI6MTUyNjY2NjE3NCwiaWF0IjoxNTI2NjYyNTc0LCJuYmYiOjE1MjY2NjI1NzQsInByaXZhdGVDbGFpbXMiOnsiY29uc2VudFRva2VuIjpudWxsLCJkZXZpY2VJZCI6ImFtem4xLmFzay5kZXZpY2UuQUZMWFZEMjZSU0RTTktTTEpJQktNRUdRV0pRWUNVUURWRVk2RUtCSjVWUFVIUk5HUVJNQVVENUlKTUZBN1pHNzJKNVpHUlJJSjNTSTZaR0JaNjVBUzQyWUhVUE5WM05USldPM0ZOQ01GMlo3SE5KQVhVUk9FTDZFVkY2M1RNTUlGUlIzTTdXQjRZMzQ2TTNIQVIyN1BKRks1SFpRIiwidXNlcklkIjoiYW16bjEuYXNrLmFjY291bnQuQUdFUFJXRUNDMjRXNE9MVU1PQzVMMlpIV1JHVUlIRVhZNDJQR01OQUk1UTU3NkNOMktVQ0JaREFJR0hERDZFT0NJUVBOTU1DUUVaQUxFNUk2TVk3NFUzMkRCUURDVFBPRk02Q0lFTjZKUjJIWldIRjRFM0lEQ0RUQkc0S1FHQU1QRFI3TkNPWllBSkUzRExUSUdERVcyNkZPTTUzSVNGWTZFTFFXR0dWWUlNM1RaWUxJTFZJTEM0TVBYWlpYTTI1VVdEQVRLWTMyUEwzUTRJIn19.OBQnc2nhjaDY-LmEvG88_RJ4o_KhcjSCGL40sB5ExTLTYgrJ9yehEQ1Dr0R9f--t-c-86VGxSdwmpSPPFOe0KOrEMk3Dc_rj9ZEjzG7JikrSgQrl1Wkd0KVkjCfYwgpSH2Wb3W670zgObgLdB35-KV27kSwNXOp4Kf8C46P82VN8Bfygk41GhPjKmUv7LYQj6gRr36LjriXiaKvJTYIARwtowUXit8M_PByvxkvvCwzmOU4savkB3kzTXfuEQNlX_YmHdqhHg3pieW-uDkHr9JRjP2vEnfBhliy0kOMJmx9gxVdM9sHBVXvV6fu2Mhq7R1PFdABeIh2hJLqgZZf7gQ"
        }
    },
    "request": {
        "type": "IntentRequest",
        "requestId": "amzn1.echo-api.request.65762fab-6e43-4948-93b9-75cc0d9df96b",
        "timestamp": "2018-05-18T16:56:14Z",
        "locale": "en-US",
        "intent": {
            "name": "AddCardIntent",
            "confirmationStatus": "NONE",
            "slots": {
                "cardText": {
                    "name": "cardText",
                    "value": "alexa passed the test",
                    "confirmationStatus": "NONE"
                }
            }
        }
    }
}

describe('alexa testing', () => {
    it('it should test create card intent', () => {
        index.handler(event, {}, (err, resp) => {
            assert(err).equals(null)
        })
    })
})
