function start(){
    myName();
    motionTween();
    schoolText();
    shapeTween();
    nameSecond();
    quote();
    team();
    rotation();
    same();
}
function same(){
    var st = new createjs.Stage("last");
    var circle = new createjs.Shape();
    var shape = new createjs.Graphics().beginFill("#0000ff").drawRect(200,70,75,80);
    var rect = new createjs.Shape(shape);
    circle.graphics.beginFill("#dd0000").drawCircle(0, 0, 30);
    circle.x = 50;
    circle.y = 50;
    st.addChild(circle);
    st.addChild(rect);
    createjs.Tween.get(circle, {loop: false})
        .to({x:225,y:80}, 1000)
        .to({x:50,y:50}, 1000);
    createjs.Tween.get(rect, {loop: false})
        .to({x:-100,y:-25}, 1000)
        .to({x:0,y:0}, 1000);
    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener("tick", st);
}
function rotation(){
    var st = new createjs.Stage("rt");
    var text = new createjs.Text("Computer Science", "30px Arial", "#f4af00");
    text.x = 60;
    text.y = 70;
    text.regX = 35;
    text.regY = 35;
    st.addChild(text);
    createjs.Tween.get(text, {loop: false})
        .to({rotation:360}, 2000)
        .to({x:300,scaleX:-1,scaleY:-1}, 2000);
    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener("tick", st);
}
function team(){
  var st = new createjs.Stage("tm");
  var teamName = new createjs.Text("GB Packers", "30px Arial", "#22dd22");
  teamName.x = 25;
  teamName.y = -50;
  st.addChild(teamName);
  createjs.Tween.get(teamName, {loop: false})
  .to({alpha:0,y:-50}, 100)
  .to({alpha:1,y:100}, 500, createjs.Ease.getPowInOut(2))
  .to({x:400}, 800, createjs.Ease.getPowInOut(2))
  createjs.Ticker.setFPS(60);
  createjs.Ticker.addEventListener("tick", st);
}
function quote(){
  var st = new createjs.Stage("qu");
  var textQ = new createjs.Text("\"The truth may be stretched thin, but it never breaks, \nand it always surfaces above lies, as oil floats on water.\" \n  - Miguel de Cervantes Saavedra, Don Quixote",
                                "15px Arial", "#0000aa");
  textQ.x = 25;
  textQ.y = 60;
  st.addChild(textQ);
  createjs.Tween.get(textQ, {loop: false})
    .to({alpha:0},2000)
  createjs.Ticker.setFPS(60);
  createjs.Ticker.addEventListener("tick", st);
}
function nameSecond(){
  var st = new createjs.Stage("names");
  var jLetter = new createjs.Text("J", "45px Arial", "#ff0000");
  var aLetter = new createjs.Text("A", "45px Arial", "#ff0000");
  var rLetter = new createjs.Text("R", "45px Arial", "#ff0000");
  var eLetter = new createjs.Text("E", "45px Arial", "#ff0000");
  var dLetter = new createjs.Text("D", "45px Arial", "#ff0000");
  jLetter.x = 30;
  jLetter.y = 50;
  st.addChild(jLetter);
  createjs.Tween.get(jLetter, {loop: false})
    .to({y:0}, 1500)
    .to({y:110}, 1500)
  aLetter.x = 60;
  aLetter.y = 50;
  st.addChild(aLetter);
  createjs.Tween.get(aLetter, {loop: false})
    .to({x:0}, 1500)
    .to({x:110}, 1500)
    .to({x:60,y:110},1500)
  rLetter.x = 90;
  rLetter.y = 50;
  st.addChild(rLetter);
  createjs.Tween.get(rLetter, {loop: false})
    .to({y:110}, 1500)
    .to({y:0}, 1500)
    .to({y:110}, 1500)
  eLetter.x = 120;
  eLetter.y = 50;
  st.addChild(eLetter);
  createjs.Tween.get(eLetter, {loop: false})
    .to({alpha:0}, 1500)
    .to({y:110,alpha:100}, 1500)
  dLetter.x = 150;
  dLetter.y = 50;
  st.addChild(dLetter);
  createjs.Tween.get(dLetter, {loop: false})
    .to({x:200,y:100}, 1500)
    .to({y:110,x:150}, 1500)
  createjs.Ticker.setFPS(60);
  createjs.Ticker.addEventListener("tick", st);
}
function shapeTween(){
  var st = new createjs.Stage("test2");
  var shape = new createjs.Graphics().beginFill("#0000ff").drawRect(25,25,100,100);
  var rect = new createjs.Shape(shape);
  rect.x = 10;
  rect.y = 10;
  st.addChild(rect);
  createjs.Tween.get(rect, {loop: false})
    .to({x:15}, 500)
    .to({x:150, y:50, scaleX:2,scaleY:0.5}, 1000)
  createjs.Ticker.setFPS(60);
  createjs.Ticker.addEventListener("tick", st);
}
function schoolText(){
  var st = new createjs.Stage("schoolText");
  var name = new createjs.Text("Wisconsin Virtual School", "30px Arial", "#fd1111");
  name.x = 35;
  name.y = 65;
  st.addChild(name);
  createjs.Tween.get(name, {loop: false})
    .to({alpha:0}, 1000)
    .to({alpha:100}, 1000)
  createjs.Ticker.setFPS(60);
  createjs.Ticker.addEventListener("tick", st);
}
function myName(){
  var st = new createjs.Stage("test");
  var name = new createjs.Text("Jared Nemith", "52px Arial", "#ff2600");
  name.x = 50;
  name.y = 50;
  //name.textBaseline("alphabetic");
  st.addChild(name);
  createjs.Tween.get(name, {loop: false})
    .to({ y: 0}, 100)
    .to({ y: 100}, 100)
    .to({ y: 50}, 100)
  createjs.Ticker.setFPS(60);
  createjs.Ticker.addEventListener("tick", st);
  //st.update();
}
function motionTween() {
  var st = new createjs.Stage("my_canvas");
  var ci = new createjs.Shape();
  ci.graphics.beginFill("#d35454").drawCircle(0, 0, 90);
  ci.x = 325;
  ci.y = 100;
  st.addChild(ci);
  createjs.Tween.get(ci, {loop: false})
    .to({ x: 325, y: 450}, 2000)
    .to({ x: 100, y: 450}, 2000)
    .to({ x: 100, y: 100}, 2000)
    .to({ x: 325, y: 100}, 2000)
  createjs.Ticker.setFPS(60);
  createjs.Ticker.addEventListener("tick", st);
}