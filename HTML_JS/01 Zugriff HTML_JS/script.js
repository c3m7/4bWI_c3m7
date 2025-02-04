document.getElementById("add").addEventListener("click", function(){
    const value1 = document.getElementById("value1").value;
    const value2 = document.getElementById("value2").value;
    
    if(isNaN(value1) || isNaN(value2))
    {
        alert("Invalid value");
    }
    else
    {
        const result = parseFloat(value1) + parseFloat(value2);
        document.getElementById("result").innerText = result;
    }
});

document.getElementById("subtract").addEventListener("click", function(){
    const value1 = document.getElementById("value1").value;
    const value2 = document.getElementById("value2").value;
    
    if(isNaN(value1) || isNaN(value2))
    {
        alert("Invalid value");
    }
    else
    {
        const result = parseFloat(value1) - parseFloat(value2);
        document.getElementById("result").innerText = result;
    }
});

document.getElementById("multiply").addEventListener("click", function(){
    const value1 = document.getElementById("value1").value;
    const value2 = document.getElementById("value2").value;
    
    if(isNaN(value1) || isNaN(value2))
    {
        alert("Invalid value");
    }
    else
    {
        const result = parseFloat(value1) * parseFloat(value2);
        document.getElementById("result").innerText = result;
    }
});

document.getElementById("divide").addEventListener("click", function(){
    const value1 = document.getElementById("value1").value;
    const value2 = document.getElementById("value2").value;
    
    if(isNaN(value1) || isNaN(value2))
    {
        alert("Invalid value");
    }
    else
    {
        const result = parseFloat(value1) / parseFloat(value2);
        document.getElementById("result").innerText = result;
    }
});