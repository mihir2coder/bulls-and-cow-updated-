var a,b,c="PEAK",y=50,word="Peak",d,e,f,g,s,four;



function bulls()
{
  
  var aa=four.charAt(0);
  var ab=four.charAt(1);
  var ac=four.charAt(2);
  var ad=four.charAt(3);
  var bn=0;
  var cn=0;

   
  
  word=a.value();
  //var word=word.toLowerCase();

    if(word.length!==4)
    {
     alert("put only four letters word");
    }
   if(word.charAt(0)==aa)
   {
     bn=bn+1;
   }


   if(word.charAt(1)==ab)
   {
     bn=bn+1;
   }


   if(word.charAt(2)==ac)
   {
     bn=bn+1;
   }


    if(word.charAt(3)==ad)
    {
      bn=bn+1;
    }


    if(word.charAt(0)==ab||word.charAt(0)==ac||word.charAt(0)==ad)
    {
      cn=cn+1;  
    }


    if(word.charAt(1)==aa||word.charAt(1)==ac||word.charAt(1)==ad)
    {
      cn=cn+1;  
    }


    if(word.charAt(2)==ab||word.charAt(2)==aa||word.charAt(2)==ad)
    {
      cn=cn+1;  
    }


    if(word.charAt(3)==ab||word.charAt(3)==ac||word.charAt(3)==aa)
    {
      cn=cn+1;  
    }

    //console.log(s);

    if(word.length==4)
    {
      var i;
      for( i =0;i<s.length;i=i+1)
      {
       if(s[i].includes(word))
       {
         break;
       }
       
      }
      if(i<s.length)
      {

      
    var d=createElement("h2");
    d.position(625,y);
    
    d.html(a.value()); 

    var zz=createElement("h2");
    zz.position(950,y);
    zz.html(bn);
    

    var z=createElement("h2");
    z.position(1250,y);
    z.html(cn);
    y=y+50;

    }
    else if(i==s.length)
    {
      alert("ENTER A VALID WORD");
    }
    }
     
    
}


function setup()
{
  var r=Math.round(random(0,s.length-1));
  four=s[r]
   a=createInput("");
   a.position(50,70);
   a.style("width", "a.value().length()px")

   b=createButton("SUBMIT");
   b.position(200,170);
   b.mousePressed(bulls);

   e=createElement('h1');
   e.position(600,10);
   e.html("Word");


   f=createElement('h1');
   f.position(750,10);
   f.html("Number of Bulls");

   g=createElement('h1');
   g.position(1100,10);
   g.html("Number of Cows");

   //console.log(s[s.length-1])
}
