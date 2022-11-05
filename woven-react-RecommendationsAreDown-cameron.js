1. Actions / Event Handlers: (MORE LIKELY since this can be often edited)
- The function that handles the input: is the state correctly set with e.target.value? are the variables correctly set? are actions/reducers in place? 
- `<input>` HTML tag in `return`: Does it have the right values and/or variables on `value`,  `placeholder`, `onChange`, `onClick`, `onKeyDown`, etc?

2. Components: (LIKELY since newly created components can have some mistakes)
- paths: correctly imported?
- props, variables: are props and/or variables correctly passed between components?

3. API: (LESS LIKELY since this was set up once and not often modified)
- paths: correctly imported?
- API's variables/URLs: correctly passed between files?
- API key: correct?


///////////////////////////////////////////
Hey Cameron,

We got some bugs!! I believe you also knew it already so I'll make it to the points.
Please try to look into these suggestions to see if you can find the problems:

1. Actions / Event Handlers (please mostly focus on this):
- The function that handles the input: Is the state correctly set with `e.target.value`? Are the variables correctly set? Are actions/reducers in place? I think the problem could be found here, mostly because the customers still can type in the search box and the results are just not shown. More on this: https://stackoverflow.com/questions/36683770/
- `<input>` HTML tag in `return`: Does it have the right values and/or variables on `value`,  `placeholder`, `onChange`, `onClick`, `onKeyDown`, etc? Of course, if these are wrong, the input will not be stored. More on this: https://bobbyhadz.com/blog/react-get-input-value

2. Components:
- Check the props and variables that are being passed between components to see if they are correct. If they are not correctly passed, the components will not understand the given props/variables. You could have a look here to understand more about components and props: https://reactjs.org/docs/components-and-props.html

Let me know if you find something. Please don't hesitate to call if you need me. 
I appreciate your help, Cameron!

Best,
Luan


