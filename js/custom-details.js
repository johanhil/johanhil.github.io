jQuery(function(){function e(e){e=e.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var n=new RegExp("[\\?&]"+e+"=([^&#]*)"),o=n.exec(location.search);return null===o?"":decodeURIComponent(o[1].replace(/\+/g," "))}var n=e("name"),o=e("email"),t=e("phone");$(".contract-name").text(n),$(".contract-email").text(o||"No email supplied"),$("embed").attr("src","http://dev.scrive.com/invoice.php?name="+n+"&email="+encodeURIComponent(o)+"&phone="+encodeURIComponent(t)),$("object").attr("data","http://dev.scrive.com/invoice.php?name="+n+"&email="+encodeURIComponent(o)+"&phone="+encodeURIComponent(t))});