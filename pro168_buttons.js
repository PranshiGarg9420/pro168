AFRAME.registerComponent('create-buttons',{
    init: function(){
        //creating button-1
        var button1=document.createElement('button');
        button1.innerHTML='ORDER SUMMARY';
        button1.setAttribute('id','order-summary');
        button1.setAttribute('class','btn btn-warning');

        //creating button-2
        var button2=document.createElement('button');
        button2.innerHTML='ORDER NOW';
        button2.setAttribute('id','order-now');
        button2.setAttribute('class','btn btn-warning');

        //append button elements
        var buttonDiv= document.getElementById('button-div');
        buttonDiv.appendChild(button1);
        buttonDiv.appendChild(button2);
    }
})