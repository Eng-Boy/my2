    var handlerEmbed = function (captchaObj) {
        $("#embed-submit").click(function (e) {
            var validate = captchaObj.getValidate();
            if (!validate) {
                alert('\u8BF7\u5148\u5B8C\u6210\u9A8C\u8BC1');
                e.preventDefault();
            }
        });
        captchaObj.appendTo("#embed-captcha");
        captchaObj.onReady(function () {
            $("#wait")[0].className ="form-control uname hide";
        });
    };
    $.ajax({
        
        url:"/assets/geetest/StartCaptchaServlet.php?t="+ (new Date()).getTime(), 
        type:"get",
        dataType:"json",
        success: function (data) {
            console.log(data);

            initGeetest({
width: '100%',
                gt: data.gt,
                challenge: data.challenge,
                new_captcha: data.new_captcha,
                product:"embed", 
                offline: !data.success 

            }, handlerEmbed);
        }
    });
