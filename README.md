# Library project for the React UI Builder platform

This repository is a starting point for creating a library of components that can be processed in React UI Builder and used out of the box in any React Web Application.

Since React UI Builder is based on a visual Web application builder - [Webcodesk](https://github.com/webcodesk/webcodesk-srv), we use Webcodesk to create the component library locally.

### The instruction for creating components:

1. Make a copy (fork) of this repository into your own repository on GitHub.

2. Clone your repo to the local disk and run `yarn install` command in the command line.

3. Run Webcodesk server with the `yarn wcd` command in the command line. Then open the `http://localhost:7070` address in the browser.

4. Now you can create your own component in the favorite source code editor. All source codes for components should be in the `/src/usr` directory.

**Please note:** We understand that you may already have a ready-made component library or you are going to publish a library based on some popular component package that already exists.
But due to the fact that all components have different implementation approaches, and may differ in the description of properties in code, we propose to create wrappers for components using TypeScript and PropTypes to unify the description of properties.

So please find the sample source code for component wrappers in the `/src/usr/sample` directory of this project. Create your new components using these samples as the templates.

5. Switch to the Webcodesk tab in the browser and find your component in the `Components` section in the left panel.

> Read more about how to create reusable components in Webcodesk here: [Webcodesk User Guide](https://github.com/webcodesk/webcodesk-srv/blob/master/docs/README.md) 

### The instruction for publishing component library to the React UI Builder platform

Your component library code must be included in one or more project templates so that users can use the components in their projects that will be based on these templates.

1. Create a repository on GitHub with template project code. As an example, you can use existing project templates: [Material UI library for Create React App framework](https://github.com/react-ui-builder/material-ui-cra-boilerplate)

2. Copy the contents of the `/src/usr` directory from the library project to the `/src/usr` directory of the template project.

3. If you want to add the template project for another framework, repeat `1` and `2` steps. 

4. Change the boilerplates paths in the `/src/usr/README.md` file in the library project to the paths of your template projects.

5. Write a letter to the React UI Builder team (reactuibuilder(at)gmail.com) with the `New React UI Builder library` subject. Specify the path to the library project repo in the letter body.  

### The instruction for updating component library on the React UI Builder platform

1. Once you changed the code in your library project, copy the contents of the `/src/usr` directory from the library project to the `/src/usr` directory of the template project.

2. Repeat the `1` step for all template projects of this library.

3. Increase the version number of the library in the `/src/usr/README.md` file in the library project.  

4. Write the letter to the React UI Builder team (reactuibuilder(at)gmail.com) with the `Update React UI Builder library` subject. Specify the path to the library project repo in the letter body.

**Please note:** All repositories should be public and have MIT license.

## Community

If you need any help or want someone to set up the library project with you and get you stepping through code in your IDE, 
don't be afraid to speak up!

You can ask questions or talk about React UI Builder at [Spectrum chat](https://spectrum.chat/react-ui-builder)
