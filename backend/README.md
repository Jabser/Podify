# Podify Backend
The manuel podcast submission for Podify.

**Build with:**
- Nodemon
- Body-parser
- Cors
- Express
- Multer
- Mongoose

---

### Getting Started

Remember to install nodemon globally!

``
npm i -g nodemon
``

**Running the server**

``
nodemon
``

---

### Postman guide

**Post a new podcast**

Post > localhost:PORT/podcasts/add

Go under body & select json. Here you'll add all the necessary parameters inside podcast.js.

**Get all podcasts**

Get > localhost:PORT/podcasts

**Get a SINGLE podcast**

Get > localhost:PORT/podcasts/ID

**Update a podcast**

Put > localhost:PORT/podcasts/update/ID

Go under body & select json. Here you'll update all the necessary parameters.

**Delete a podcast**

Delete > localhost:PORT/podcasts/delete/ID

**Upload a single image**

Post > localhost:PORT/upload > Body > form-data > key = file > Switch from text to file > Import selected image

---

### MongoDB runs automatically when running your PC

If you want to change that go to:

Services > MongoDB Server > Right click & change the setting.