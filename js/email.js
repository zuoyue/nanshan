function createRequestObject(){var e;try{var e=null;window.XMLHttpRequest?e=new XMLHttpRequest:window.ActiveXObject&&(e=new ActiveXObject("Msxml2.XMLHTTP"))}catch(t){try{var e=null;window.XMLHttpRequest?e=new XMLHttpRequest:window.ActiveXObject&&(e=new ActiveXObject("Microsoft.XMLHTTP"))}catch(n){e=null}}return e||"undefined"==typeof XMLHttpRequest||(e=new XMLHttpRequest),e}function sendRequest(){var e=Math.random(),t=escape(document.getElementById("name").value),n=escape(document.getElementById("email").value),a=escape(document.getElementById("subject").value),o=document.getElementById("body").value;try{http.open("POST","php/contactform.php"),http.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),http.onreadystatechange=handleResponse,http.send("name="+t+"&email="+n+"&subject="+a+"&body="+o+"&rnd="+e)}catch(r){}finally{jQuery("#contactform").slideUp("slow").hide(),jQuery("#contactWrapper").append('<div class="success"><h4>Email Successfully Sent!</h4><br><p>Thank you for using our contact form <strong>'+decodeURIComponent(t)+"</strong>! Your email was successfully sent and we&#39;ll be in touch with you soon.</p></div>")}}function sendRequest_popup(){var e=Math.random(),t=escape(document.getElementById("name_popup").value),n=escape(document.getElementById("email_popup").value),a=escape(document.getElementById("subject_popup").value),o=escape(document.getElementById("body_popup").value);try{http.open("POST","php/contactform.php"),http.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),http.onreadystatechange=handleResponse_popup,http.send("name="+t+"&email="+n+"&subject="+a+"&body="+o+"&rnd="+e)}catch(r){}finally{jQuery("#contactform_popup").slideUp("slow").hide(),jQuery("#contactWrapper_popup").append('<div class="success"><h4>Email Successfully Sent!</h4><br><p>Thank you for using our contact form <strong>'+t+"</strong>! Your email was successfully sent and we&#39;ll be in touch with you soon.</p></div>")}}function sendRequest_news(){var e=Math.random();if(document.getElementById("name_news")instanceof Object)var t=escape(document.getElementById("name_news").value);else var t="noname";var n=escape(document.getElementById("email_news").value);try{http.open("POST","php/newsletter.php"),http.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),http.onreadystatechange=handleResponse_news,http.send("name_news="+t+"&email_news="+n+"&rnd_news="+e)}catch(a){}finally{jQuery("#newsletterform").slideUp("slow").hide(),jQuery(".intro-form-wrap").append('<div class="success"><h4>Subscription Successfully Sent!</h4><br><p>Thank you for using our newsletter, <strong>'+t+"</strong>! Your email has been registered.</p></div>")}}function validate_email(e){var t=/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;return 0==t.test(e)?!1:!0}function validate_phone(e){var t=/^[\:\-\.\_\(\) 0-9]+$/;return 0==t.test(e)?!1:!0}function check_values(){var e=jQuery.noConflict(),t="",n="",a="",o="";"undefined"!=typeof e("#contactform #name").val()&&(t=document.getElementById("name").value),"undefined"!=typeof e("#contactform #email").val()&&(n=document.getElementById("email").value),"undefined"!=typeof e("#contactform #subject").val()&&(a=document.getElementById("subject").value),"undefined"!=typeof e("#contactform #body").val()&&(o=document.getElementById("body").value);var r=0;if(void 0!=e("#contactform #name").val())if(""==e("#contactform #name").val()){var p=e("#contactform #name").parent().find(".error").hasClass("error");p||e("#contactform #name").parent().append('<label for="contactname" generated="true" class="error">Please enter your name</label>'),e("#contactform #name").focus(),r++}else e("#contactform #name").parent().find(".error").remove();if(void 0!=e("#contactform #email").val())if(0==validate_email(e("#contactform #email").val())){var p=e("#contactform #email").parent().find(".error").hasClass("error");p||e("#contactform #email").parent().append('<label for="contactname" generated="true" class="error">Please enter a valid email address</label>'),e("#contactform #email").focus(),r++}else e("#contactform #email").parent().find(".error").remove();if(void 0!=e("#contactform #subject").val())if(""==e("#contactform #subject").val()){var p=e("#contactform #subject").parent().find(".error").hasClass("error");p||e("#contactform #subject").parent().append('<label for="contactname" generated="true" class="error">You need to enter a subject!</label>'),e("#contactform #subject").focus(),r++}else e("#contactform #subject").parent().find(".error").remove();if(void 0!=e("#contactform #body").val())if(""==e("#contactform #body").val()){var p=e("#contactform #body").parent().find(".error").hasClass("error");p||e("#contactform #body").parent().append('<label for="contactname" generated="true" class="error">You need to enter a message!</label>'),e("#contactform #body").focus(),r++}else e("#contactform #body").parent().find(".error").remove();0==r&&(document.getElementById("submit").disabled=!0,document.getElementById("submit").value="Please Wait..",sendRequest())}function check_values_popup(){var e=jQuery.noConflict(),t=(document.getElementById("name_popup").value,document.getElementById("email_popup").value,document.getElementById("subject_popup").value,document.getElementById("body_popup").value,0);if(void 0!=e("#contactform_popup #name_popup").val())if(""==e("#contactform_popup #name_popup").val()){var n=e("#contactform_popup #name_popup").parent().find(".error").hasClass("error");n||e("#contactform_popup #name_popup").parent().append('<label for="contactname" generated="true" class="error">Please enter your name</label>'),e("#contactform_popup #name_popup").focus(),t++}else e("#contactform_popup #name_popup").parent().find(".error").remove();if(void 0!=e("#contactform_popup #email_popup").val())if(0==validate_email(e("#contactform_popup #email_popup").val())){var n=e("#contactform_popup #email_popup").parent().find(".error").hasClass("error");n||e("#contactform_popup #email_popup").parent().append('<label for="contactname" generated="true" class="error">Please enter a valid email address</label>'),e("#contactform_popup #email_popup").focus(),t++}else e("#contactform_popup #email_popup").parent().find(".error").remove();if(void 0!=e("#contactform_popup #subject").val())if(""==e("#contactform_popup #subject_popup").val()){var n=e("#contactform_popup #subject_popup").parent().find(".error").hasClass("error");n||e("#contactform_popup #subject_popup").parent().append('<label for="contactname" generated="true" class="error">You need to enter a subject!</label>'),e("#contactform_popup #subject_popup").focus(),t++}else e("#contactform_popup #subject_popup").parent().find(".error").remove();if(void 0!=e("#contactform_popup #body_popup").val())if(""==e("#contactform_popup #body_popup").val()){var n=e("#contactform_popup #body_popup").parent().find(".error").hasClass("error");n||e("#contactform_popup #body_popup").parent().append('<label for="contactname" generated="true" class="error">You need to enter a message!</label>'),e("#contactform_popup #body_popup").focus(),t++}else e("#contactform_popup #body_popup").parent().find(".error").remove();0==t&&(document.getElementById("submit_popup").disabled=!0,document.getElementById("submit_popup").value="Please Wait..",sendRequest_popup())}function check_values_news(){var e=jQuery.noConflict(),t="",n="";"undefined"!=typeof e("#newsletterform #name_news").val()&&(t=document.getElementById("name_news").value),"undefined"!=typeof e("#newsletterform #email_news").val()&&(n=document.getElementById("email_news").value);var a=0;if(void 0!=e("#newsletterform #name_news").val())if(""==e("#newsletterform #name_news").val()){var o=e("#newsletterform #name_news").parent().find(".error").hasClass("error");o||e("#newsletterform #name_news").parent().append('<label for="contactname" generated="true" class="error">Please enter your name</label>'),e("#newsletterform #name_news").focus(),a++}else e("#newsletterform #name_news").parent().find(".error").remove();if(void 0!=e("#newsletterform #email_news").val())if(0==validate_email(e("#newsletterform #email_news").val())){var o=e("#newsletterform #email_news").parent().find(".error").hasClass("error");o||e("#newsletterform #email_news").parent().append('<label for="contactname" generated="true" class="error">Please enter a valid email address</label>'),e("#newsletterform #email_news").focus(),a++}else e("#newsletterform #email_news").parent().find(".error").remove();0==a&&(document.getElementById("submit").disabled=!0,document.getElementById("submit").value="Please Wait..",sendRequest_news())}function handleResponse(){try{if(4==http.readyState&&200==http.status){var e=http.responseText;document.getElementById("confirmation").innerHTML=e,document.getElementById("confirmation").style.display=""}}catch(t){}finally{}}function handleResponse_popup(){try{if(4==http.readyState&&200==http.status){var e=http.responseText;document.getElementById("confirmation_popup").innerHTML=e,document.getElementById("confirmation_popup").style.display=""}}catch(t){}finally{}}function handleResponse_news(){try{if(4==http.readyState&&200==http.status){var e=http.responseText;document.getElementById("confirmation").innerHTML=e,document.getElementById("confirmation").style.display=""}}catch(t){}finally{}}function isUndefined(e){return"undefined"==typeof e}function trim(e){return e.replace(/^s*(S*(s+S+)*)s*$/,"$1")}function isEmail(e){return e.indexOf(".")>0&&e.indexOf("@")>0}var $j=jQuery.noConflict(),http=createRequestObject(),areal=Math.random()+"",real=areal.substring(2,6);