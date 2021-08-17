# auth-api



# LAB - 08
---
### Deployment Test

###### Author: Ibrahem Alomari

* ##### [Actions](https://github.com/ibrahemomari/auth-api/actions)
* ##### [Pull Request](https://github.com/ibrahemomari/auth-api/pull/1)
* ##### [Heroku](https://ibrahem-auth-api.herokuapp.com/)

---
###### Setup


### `.env`
 > PORT: 8000
NODE_ENV=test
DATABASE_URL=postgres://localhost:5432/lab8

---

###### Running the app:

* ####  `npm start` , `nodemon`

* #### Endpoint: */signin*
    * **Returns Object**

```javascript
{
    "username":"test",
    "password":"test"
}
```

* #### Endpoint: */signup*
* **Returns Object**

```javascript
{
    "username":"test",
    "password":"test",
    "token":"123456789abcd"
}
```

* #### Endpoint: *api/v1(2)/food*
* **Returns Object**

```javascript
{
    "name":"test",
    "calories":"test",
    "type":"test"
}
```

* #### Endpoint: *api/v1(2)/clothes*
* **Returns Object**

```javascript
{
    "name":"test",
    "color":"test",
    "size":"test"
}
```

---

#### Tests
Unit Tests: `npm run test`
Lint Tests: `npm run lint`

---

#### UML

<img src="https://raw.githubusercontent.com/ibrahemomari/bearer-auth/main/bearer.jpg" alt="drawing" style="width:500px;"/>

