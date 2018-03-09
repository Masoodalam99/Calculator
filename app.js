function display(x){
    if(x == 1 || x == 2 || x == 3 || x == 4 || x == 5 || x == 6 || x == 7 || x == 8 || x == 9 || x == 0 || x == '(' || x == ')') {
        form.text.value=form.text.value+x;
    }
    else{
        if(form.text.value.charAt(form.text.value.length-1)==x){}
        else{
            if(form.text.value.charAt(form.text.value.length-1)=='*' ||
            form.text.value.charAt(form.text.value.length-1)=='/' ||
            form.text.value.charAt(form.text.value.length-1)=='-' ||
            form.text.value.charAt(form.text.value.length-1)=='+' ||
            form.text.value.charAt(form.text.value.length-1)=='.')
            {
                form.text.value=form.text.value.slice(0,form.text.value.length-1);
            }
            {
                form.text.value=form.text.value+x;
            }
        }
    }
}

//function for All Clear AC

function ac(){
    form.text.value="";
}

//function for BackSpace

function backspace(){
    form.text.value=form.text.value.slice(0,form.text.value.length-1);
}