# mibici-rest-api-express

A REST API to find nearby stations using public data from [mibici](https://www.mibici.net/es/datos-abiertos/). This API was built using express, typescript and deployed to [VERCEL](https://vercel.com/docs/functions) as a serverless function.

The startup template is based on the [w3cj/express-api-starter](https://github.com/w3cj/express-api-starter.git) repository. All credit goes to the author.

## Getting Started

1. Clone the repository:

```
git clone https://github.com/KevJim/mibici-rest-api-express.git
```

2. Install dependencies (you need at least Node v20.11.0):

```
npm install
```

3. Start the development server:

```
npm run dev
```

## Test

```
npm run test
```

## Usage/Examples

You can use the following command to see an example of how to use the API:

```shell
curl -X GET "https://mibici-rest-api-express.vercel.app/api/v1/mibici/stations?latitude=20.666378&longitude=-103.34882&distance=2" -H "Content-Type: application/json"
```

The response should look like this:

```json
{
    "stations": [
        {
            "id": "2",
            "name": "(GDL-001) C. Epigmenio Glez./ Av. 16 de Sept.",
            "location": "POL�GONO CENTRAL",
            "latitude": 20.666378,
            "longitude": -103.34882,
            "status": "IN_SERVICE"
        }
    ]
}
```

## Authors

-   [@KevJim](https://github.com/KevJim)
