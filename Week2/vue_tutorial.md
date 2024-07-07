## Nesting app1 and app2

When two apps are nested inside each other, the content that gets displayed depends on which app gets instantiated first

```javascript
// Refer to quiz question
const b=new Vue(
{
    data:{
        message1:'Rajput';    
}
});

const a=new Vue(
{
    data:{
        message2:'Abhishek';    
}
});

// here app 'b' is instantiated first , so it is rendered'
```

## Components

They are custom elements that help you extend basic HTML elements to encapsulate reusable code.

```javascript
Vue.component('my-component', {
  template: '<div>A custom component!</div>'
})

//Registering a component globally
Vue.component('my-component', {
  // options
  template: '<div>A custom component!</div>'
  data://function not variable or object ,so that it can properly render and have independence
  {
      return{
          message:'Hello, World!'
      }
  }
})
```




## Props
 
Help you pass data from a parent component to a child component.
```javascript 
Vue.component('child-component', {
  props: ['prop1'],
  template: '<div>{{ prop1 }}</div>'
})

var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello, Vue world!',
    parentMessage: 'Hello, World!'
  }
})
```

Bind it in the html file to use the prop and use the value.
index.html
```html
<div id="app">
  <!-- This is where you include the child component and pass parentMessage as prop1 -->
  <child-component :prop1="parentMessage"></child-component>
</div>
```

## Global and local registration of components
```javascript 
// Registering a component globally
Vue.component('my-component', {
  // options
  template: '<div>A custom component!</div>'
})
//local registration    
var app = new Vue({
  el: '#app',
  components: {
    'my-component': {
      template: '<div>A custom component!</div>'
    }
  }
})
//local registration
var app = new Vue({
  el: '#app',
  components: {
    'my-component':CustomComponent
  }
})

let CustomComponent={
    template: '<div>A custom component!</div>'
}
```

## Passing data from child to parent component

```javascript
//Step 1: Emit an event from the child component
// ChildComponent.vue
methods: {
  sendDataToParent() {
    const data = 'Data from child';
    this.$emit('childToParent', data);
  }
}

//Step 2:Listen for the event in the parent component
<!-- ParentComponent.vue -->
<child-component @childToParent="receiveDataFromChild"></child-component>

//Step 3: Handle the event in the parent component
/*In the parent component, define the method (receiveDataFromChild in this example) that will be called when the event is emitted. This method will receive the data passed from the child component.*/
// ParentComponent.vue
methods: {
  receiveDataFromChild(data) {
    console.log('Received data from child:', data);
    // Now you can use the data in the parent component
  }
}
```

