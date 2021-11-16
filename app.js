var Main = document.getElementById("main");

var DivForm = document.createElement("div");
DivForm.setAttribute("Id","DivMain1")
Main.appendChild(DivForm);

var DivTitle = document.createElement("h1");
DivForm.appendChild(DivTitle);

var DivTitleText = document.createTextNode("ToDo App");
DivTitle.appendChild(DivTitleText);

var DivInputDiv = document.createElement("div");
DivInputDiv.setAttribute("id","IDivision");
DivForm.appendChild(DivInputDiv);

var DivInput = document.createElement("input");
DivInput.setAttribute("Type","Text");
DivInput.setAttribute("Placeholder","Add A Task Here");
DivInput.setAttribute("Id","InputTask")
DivInputDiv.appendChild(DivInput);

var DivInputButton = document.createElement("button");
DivInputButton.setAttribute("Id","InputBtn");
DivInputButton.setAttribute("onClick","sendData()");
DivInputDiv.appendChild(DivInputButton);

var DivButtonImg = document.createElement("img");
DivButtonImg.setAttribute("id","mainBtn1")
DivButtonImg.setAttribute("src","./plus.png")
DivInputButton.appendChild(DivButtonImg);

var DivInputDiv2 = document.createElement("div");
DivInputDiv2.setAttribute("id","IDivision2");
DivForm.appendChild(DivInputDiv2);

var DivList = document.createElement("Ul");
DivInputDiv2.appendChild(DivList);

function sendData(){
    if(DivInput.value === ""){
        window.alert("Write Something!!!")
    } else{
        console.log(DivInput.value);

        var ListLi1 = document.createElement("li");
        ListLi1.setAttribute("id",DivInput.value)
        DivList.appendChild(ListLi1);

        var ListDiv = document.createElement("div");
        ListLi1.appendChild(ListDiv);
        var ListLi = document.createTextNode(DivInput.value);
        ListDiv.appendChild(ListLi);

        var ListDiv1 = document.createElement("div");
        ListDiv1.setAttribute("id","ListDiv1");
        ListLi1.appendChild(ListDiv1);

        var EditBtn = document.createElement("button");
        EditBtn.setAttribute("class","Btns")
        ListDiv1.appendChild(EditBtn);
        var BtnImg = document.createElement("img");
        BtnImg.setAttribute("id","icon1");
        BtnImg.setAttribute("src","./check.png");
        EditBtn.appendChild(BtnImg);

        var DelBtn = document.createElement("button");
        DelBtn.setAttribute("class","Btns")
        ListDiv1.appendChild(DelBtn);
        var BtnImg1 = document.createElement("img");
        BtnImg1.setAttribute("id","icon2");
        BtnImg1.setAttribute("src","./close.png");
        DelBtn.appendChild(BtnImg1);

        //empty
        document.getElementById("InputTask").value = "";
        //editBtn
        EditBtn.addEventListener("click", function(){
            var editValue = prompt("Edit Task Here:",ListLi1.id);
            ListLi1.setAttribute("id",editValue)
            ListLi1.innerHTML = editValue;
            var ListDiv1 = document.createElement("div");
            ListDiv1.setAttribute("id","ListDiv1");
            ListLi1.appendChild(ListDiv1);
            ListDiv1.appendChild(EditBtn);
            ListDiv1.appendChild(DelBtn);
        })
        // delBtn
        var DivDiv3 = document.createElement("div");
            DivDiv3.setAttribute("id","IDivision3");
            DivForm.appendChild(DivDiv3);

        DelBtn.addEventListener("click", function(){
            var DelbtnValue = DelBtn.parentNode.parentNode;
            var Div3list = document.createElement("li");
            Div3list.setAttribute("id",DelbtnValue.id)
            DivDiv3.appendChild(Div3list);
            //text div
            var Div3D1 = document.createElement("div");
            Div3list.appendChild(Div3D1);
            var Div3Text = document.createTextNode(DelbtnValue.id);
            //button div
            var Div3D2 = document.createElement("div");
            Div3list.appendChild(Div3D2);

            var BTN3d = document.createElement("button");
            BTN3d.setAttribute("class","Btns")
            Div3D2.appendChild(BTN3d);

            var BTN3dImg = document.createElement("img");
            BTN3dImg.setAttribute("id","icon3");
            BTN3dImg.setAttribute("src","./check-mark.png")
            BTN3d.appendChild(BTN3dImg);

            Div3D1.appendChild(Div3Text);
            DelbtnValue.remove();
        })
        
    }
}