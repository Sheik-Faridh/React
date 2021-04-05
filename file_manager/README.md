# File Manager
_A simple file manager app that represents a JSON tree structure as a file system of files and folders._

## Tech
This application mainly uses three library to build the file manager
- [React]
- [Redux]
- [Antd]
***
### Feature
- CRUD folder and files
- Upload Option for Files
- Multiple selections of assets
- Cascading tree view of folders
- Rename, download assets for only uploaded files
- Search assets in current directory
- Asset info popup - Properties modal
- Varying file icons for assets
- Shortcuts added for better user experience
***

### Note
- Search works based on the current directory
- Download can be done only on uploaded files
- Path Navigation Option provided. For Example if you want route to D:\filemanager\src, then write as `\filemanager\src` and click enter. you will be routed to that directory
- Overlay for Directory selection
***

### Screenshots
![File Manager](https://i.ibb.co/0JG9rDH/File-View.jpg)
![Folder Context Menu Option](https://i.ibb.co/9Z0pnGD/Context-Menu-Option.jpg)
![File Upload](https://i.ibb.co/QcP5VRC/File-Upload.jpg)
![Asset Search By Path](https://i.ibb.co/SrWxTMJ/Asset-Navigation-by-Path.jpg)
![Cascading View](https://i.ibb.co/ChBNxsF/Cascading-View.jpg)
***

## Installation

Install the dependencies to run the app.

```sh
git clone https://github.com/Sheik-Faridh/React.git
cd file_manager
npm i
npm start
```

[React]: <https://reactjs.org/docs/getting-started.html>
[Redux]: <https://redux.js.org/introduction/getting-started>
[Antd]: <https://ant.design/components/overview>