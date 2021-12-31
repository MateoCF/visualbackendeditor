# Virtual Backend Editor

## About
This README is to outline and guide the development of EasyDev.

## Idea
EasyDev automates website creation through intuitive & dynamic forms.

## Process

General process each customer of EasyDev will undertake. For development purposes, this needs to be created in order.

1. Customer Register/Login
  - [ ] Passport
2. Create Backend
  - [ ] Authentication
  - [ ] Object CRUD

## Schemas


### Customer
```javascript
{
  "username": "string",
  "password": "string",
  "email": "string",
  // Usage Justification
  "purpose": "string",
  "data": {
    // Single Entry
    "website": Schema.Types.ObjectId,
    // Storage of multiple objects
    // Categorize by Model Name
    // {
    //   "Dog": [Schema.Types.ObjectId]
    //   "Sitter": [Schema.Types.ObjectId]
    // }
    "models": Schema.Types.Mixed,
    // Categorize by User Type
    // {
    //   "Admin": [Schema.Types.ObjectId]
    //   "User": [Schema.Types.ObjectId]
    // }
    "users": Schema.Types.Mixed,
  }
}
```

### EasyDev Website Schema
Note: `""` correlates to public access.

```javascript
{
  // Prompted Properties
  "title": "home",
  // Permitted navigation links per user type
  // {
  //   // Public
  //   "": [ "/" ],
  //   "admin": [ "/private" ]
  // }
  "links": Schema.Types.Mixed,
  "path": "/home",
  // Allowed user types for this specific page
  "accessibility": [ Schema.Types.ObjectId ],
  // Optional Properties
  // {
  //   usertype: String,
  //   filter: "",
  //           Schema.Types.ObjectId,
  //           [ "Model Name" ],
  //   styling: "table",
  //            "list"
  // }
  "read": [],
  // {
  //   usertype: String,
  //   filter: Schema.Types.ObjectId,
  //   styling: "prompt",
  //            "form"
  // }
  "create": [],
  // {
  //   usertype: String,
  //   filter: Schema.Types.ObjectId,
  //   styling: "inline",
  //            "form"
  // }
  "edit": [],
  // {
  //   usertype: String,
  //   filter: "",
  //            Schema.Types.ObjectId,
  //            [ "Model Name" ],
  //   styling: "button",
  // }
  "destory": []
}
```

### EasyDev Custom Model
```javascript
{
  // Required Properties
  "name": String,
  "visibility": [ "User Type" ],
  // Ownership (Modifiable)
  "userPrimary": [ Schema.Types.ObjectId ],
  "modelPrimary": [ Schema.Types.ObjectId ],
  "userForeign": [ Schema.Types.ObjectId ],
  "modelForeign": [ Schema.Types.ObjectId ],
  // Optional Properties
  "customAttributes": {
    "someAttribute": String,
                     Boolean,
  },
}
```

### EasyDev User
```javascript
{
  "userType": String,
  "username": String,
  "password": String,
  // Optional Properties
  customAttributes: {
    "customBoolean": Boolean,
  },
  specialAttributes: {
    "email": String,
  }
}
```

## Front-End Ideas
- Black / Green Color Scheme

## Future Features
- Process
  - [ ] Add encouraging text between transitions (ie. "You're almost done!")  
- EasyDev
  - [ ] Flash Messages
  - [ ] Special Admin User Type
  - [ ] Subscription for page access
