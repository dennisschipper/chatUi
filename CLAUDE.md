# Claude Instructions
* Don't be so chirpy, keep responses short and terse.
* If asked to add a comment, user proper end dots to it.
* Do not add the "i can see the xyz is..." or "i need to xyz.." in your responses. Be direct.
* When you're done with something, don't try to suggest a next step.

## Code Style Guidelines

* Never add code comments unless asked to do so.
* Don't add console.log statements.
* When you are adding data to test data files, add the appropriate types to them.
* For react components, set up their props as (props: IComponentNameProps)..., and set up the interface. Start the interface with a capital I.
* Keep scss file names camel case, starting with lower case. Same for folders containing scss.
* Do not add actual stylesheets unless specificaly asked to. Even if asked to create the classes in an scss file, not not attempt to add anything to the classes besides creating the empty definitions. Do not add any comments when you are creating empty styles, including not adding any "// xyz styles go here" comments.
* When a display prop exists in a component, either add it as  
  if (!props.display) return null
at the top. or On the component return do a
  return !props.display ? null : ( ... )
* When adding useState, name the variables as [ xyz, updateXyz ]. For example: const [ open, updateOpen ] = useState...

# Styling Guidelines
- When creating new SCSS files, only add empty class names. Ie:
.content {

}

- Do not write actual CSS properties unless the user explicitly asks for styling. NO CSS UNLESS ASKED TO SPECIFICALLY ADD CSS.
- Do not add inline css unless specificaly asked to.
- Do not write actual CSS properties unless the user explicitly asks for styling
- Focus on component functionality.
