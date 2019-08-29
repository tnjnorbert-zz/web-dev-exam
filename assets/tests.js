  $(document).ready(function(){
    $("#submit_button").click(function(ed){  
        ed.preventDefault();      
        // $("#myForm").submit(); // Submit the form
        var num1=$("#num1").val();
        var num2=$("#num2").val();
        var expi=$("#symbol").val();
        var final_string=num1+expi+num2;
        // alert(String(final_string));

        var Data = {
            "expr":final_string,
            "precision":14
            };
            // alert(getRandomInt());
            var expected_number=eval(num1+expi+num2);
        $.ajax({
            type:"POST",
            url:"http://api.mathjs.org/v4/",
            data:JSON.stringify(Data),
            contentType:"application/json",
            dataType:"json",
            success:function(data){
                // alert(JSON.stringify(data));
                var ress = data.result;
                var err = data.error;
                // gen random number
                var xc=getRandomInt();
                final_response=0;
            if (xc != 1) {
                final_response=ress;
            }else{
                var new_num=generateDecimalJust();
               var sd= Math.ceil(new_num*4000);
                final_response =sd;
            }
               
                var passed="";
                var ccc="";
                if(final_response == expected_number){
                    passed="Yes";
                   
                }else{
                    passed="No";
                    
                }
                
            if (passed=="Yes") {
                ccc="odd";
            }else{
                ccc="even";
            }

                // 
                $("#kkk").append("<tr class='"+ccc+"'><td>'"+num1+"'</td><td>'"+num2+"'</td><td>'"+final_response+"'</td><td>'"+ expected_number+"'</td><td>'"+passed+"'</td><td><button class='btn-delete'>Delete</button></td></tr>");

                // 

            },
            error: function( jqXhr, textStatus, errorThrown ){
                 console.log( errorThrown );
            }
        });
    });

    $("body").on("click", ".btn-delete", function(){
        $(this).parents("tr").remove();
    });
});


function getRandomInt() {
    return Math.round(Math.random() * (0.00 - 1.00) + 1.00).toFixed(4);
  }
  function genCeil(num) {
    Math.ceil(num);
  }
  function generateDecimalJust(){
      return (Math.random() * (0.00 - 1.00) + 1.00).toFixed(4)
  }


  function test(then, expected) {
    results.total++;
    var result = prettyDate("2008/01/28 22:25:00", then);
    if (result !== expected) {
      results.bad++;
      console.log("Expected " + expected +
        ", but was " + result);
    }
  }