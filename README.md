# vbe

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
- [ ] Username
- [ ] Password
- [ ] Email
- [ ] Usage Justification
- [ ] Data
  - [EasyDev Website Schema] (Singular)
  - [EasyDev Objects] (Sort Object Name)
  - [EasyDev Users] (Sort by User Type)

### EasyDev Website Schema
- Authentication
  - [ ] Public
  - [ ] [EasyDev User]
    - [ ] User Type Authentication
      - [ ] Integrated Register/Login
      - [ ] Segregated Register/Login
- Pages
  - Default Properties
    - [ ] Navigation bar with permitted links
  - Prompted Properties
    - [ ] Page title
    - [ ] Page link path
    - [ ] Accessibility [EasyDev User]
  - Optional Properties
    - CRUD [EasyDev Object]
      - Read
        - Display
          - [ ] Inclusive [All Objects]
          - [ ] Exclusive [Some Objects]
        - Styling
          - [ ] Table
          - [ ] List
      - Create
        - Display
          - [ ] Exclusive [Single Object]
        - Styling
          - [ ] Prompt
          - [ ] Form
      - Edit
        - Display
          - [ ] Exclusive [Single Object]
        - Styling
          - [ ] Inline
          - [ ] Form
      - Destroy
        - Display
          - [ ] Inclusive [All Objects]
          - [ ] Exclusive [Some Objects]
        - Styling
          - [ ] Button
    - Specialty Pages
      - [ ] About Page


### EasyDev Object
- [ ] Object Name (ie. Post, Dog) [Default: Post]
- Visibility
  - [ ] Public [All Users] [Default]
  - [ ] Private [Some Users]
- Ownership (Modifiable)  
  - User Primary Key (Owner of...)
    - [ ] Inclusive [All Users] [Default: All Users]
    - [ ] Exclusive [Some Users]
  - Object Primary Key (Owner of...)
    - [ ] Exclusive [Some Objects] [Default: No Users]
    - [ ] Inclusive [All Objects]
  - User Foreign Key (Child of...)
    - [ ] Exclusive [Some Users] [Default: No Users]
    - [ ] Inclusive [All Users]
  - Object Foreign Key (Child of...)
    - [ ] Exclusive [Some Objects] [Default: No Objects]
    - [ ] Inclusive [All Objects]
- Optional Properties
  - Custom Attributes (ie.)
    - Special
      - [ ] View Counter
    - General
      - [ ] String Attribute (Modifiable through Ownership)

### EasyDev User
- [ ] User Type
- [ ] Username
- [ ] Password
- Optional Properties (ie.)
  - Special
    - [ ] Email
  - General
    - [ ] Boolean

## Front-End Ideas
- Black / Green Color Scheme

## Future Features
- Process
  - [ ] Add encouraging text between transitions (ie. "You're almost done!")  
- EasyDev
  - [ ] Flash Messages
  - [ ] Special Admin User Type
  - [ ] Subscription for page access

`bruhasdf asdf asdfadsf asd`
