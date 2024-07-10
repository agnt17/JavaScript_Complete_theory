// What is json? We talk about it many times but what is actually json. So 
{
    
}

// defined above is a json...seriously....yes seriously..as we know everything in js is an object thus this empty curly braces is a json.
//In Earlier time the data from the backend that is fetched using api's is in form of XML, but now a days the data that come in form of json i.e., javascript object notation. 
// here keys and values both are in string format.

const val = {
    "data": [
      {
        "type": "articles",
        "id": "1",
        "attributes": {
          "title": "JSON:API paints my bikeshed!",
          "body": "The shortest article. Ever.",
          "created": "2015-05-22T14:56:29.000Z",
          "updated": "2015-05-22T14:56:28.000Z"
        },
        "relationships": {
          "author": {
            "data": {"id": "42", "type": "people"}
          }
        }
      }
    ],
    "included": [
      {
        "type": "people",
        "id": "42",
        "attributes": {
          "name": "John",
          "age": 80,
          "gender": "male"
        }
      }
    ]
  }
